"use client";

import { useGlitch } from "react-powerglitch";
import styles from "./Hero.module.css";

export default function Hero() {
  const glitch = useGlitch({
    playMode: "always",
    createContainers: true,
    timing: { duration: 4000, iterations: Infinity },
    glitchTimeSpan: { start: 0.9, end: 1 },
    shake: { velocity: 10, amplitudeX: 0.05, amplitudeY: 0.05 },
    slice: { count: 5, velocity: 10, minHeight: 0.02, maxHeight: 0.15, hueRotate: false },
  });

  return (
    <section className={styles.hero}>
      <div ref={glitch.ref} className={styles.photoWrapper}>
        <img
          src="/bakaru.jpeg"
          alt="bakaru"
          className={styles.photo}
        />
      </div>

      <div className={styles.text}>
        <span className={styles.prompt}>$ whoami_</span>

        <div>
          <h1 className={styles.name}>bakaru</h1>
          <p className={styles.role}>
            &gt; desarrollador backend <span className={styles.secret}>{"// y de videojuegos — shhh, no se lo digas a nadie"}</span>
          </p>
        </div>

        <span className={styles.prompt}>$ user.descripcion_</span>
        <pre className={styles.code}>{`> Construyo sistemas distribuidos con Java y Spring.
> Kafka rompe cosas. Normalmente las arreglo.
> Miau.`}</pre>
      </div>
    </section>
  );
}
