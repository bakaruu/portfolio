"use client";
import { useEffect, useRef } from "react";
import { useGlitch } from "react-powerglitch";
import styles from "./BrokenTVOverlay.module.css";

interface Props {
  onBack: () => void;
  onContinue: () => void;
}

export default function BrokenTVOverlay({ onBack, onContinue }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const glitch = useGlitch({ playMode: "always", hueRotate: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const vs = `
      attribute vec2 aPos;
      void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
    `;

    const fs = `
      precision highp float;
      uniform float uTime;
      uniform vec2 uRes;

      float rand(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / uRes;
        float t = uTime;

        /* subtle rolling distortion — less wave */
        float roll = sin(uv.y * 10.0 + t * 0.8) * 0.005
                   + sin(uv.y * 2.5  + t * 0.3) * 0.002;
        uv.x += roll;

        /* heavy multi-layer static */
        vec2 cell = floor(uv * uRes);
        float n1 = rand(cell + floor(t * 30.0));
        float n2 = rand(cell * 0.5 + floor(t * 15.0));
        float n3 = rand(cell * 3.0 + floor(t * 60.0));
        float noise = n1 * 0.55 + n2 * 0.30 + n3 * 0.15;

        /* fine scanlines — thin and dense */
        float scan = 0.90 + 0.10 * sin(uv.y * uRes.y * 3.14159);
        noise *= scan;

        /* thin glitch bands — more frequent, less thick */
        float band = step(0.988, fract(uv.y * 14.0 + t * 0.2));
        noise = mix(noise, 1.0 - noise, band * 0.6);

        /* subtle RGB channel split */
        float cr = rand(cell + floor(t * 30.0) + vec2(0.41, 0.0));
        float cb = rand(cell + floor(t * 30.0) + vec2(0.0, 0.41));

        vec3 color = vec3(
          noise * 0.88 + cr * 0.12,
          noise,
          noise * 0.88 + cb * 0.12
        );

        /* push towards white (bright static) */
        color = mix(vec3(0.9), color, 0.75);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "uTime");
    const uRes  = gl.getUniformLocation(prog, "uRes");

    const start = performance.now();
    const loop = () => {
      gl.uniform1f(uTime, (performance.now() - start) / 1000);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className={styles.overlay}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.content}>
        <span className={styles.signal}>// SIGNAL_LOST</span>
        <h1 ref={glitch.ref} className={styles.title}>BROKEN</h1>
        <p className={styles.sub}>day mode detected — proceed at your own risk</p>
        <div className={styles.actions}>
          <button onClick={onBack}     className={styles.btnBack}>[ EXIT ]</button>
          <button onClick={onContinue} className={styles.btnContinue}>[ CONTINUAR ]</button>
        </div>
      </div>
    </div>
  );
}
