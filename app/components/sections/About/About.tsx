import styles from "./About.module.css"
import { useGlitch } from "react-powerglitch";

const stats = [
  { value: "Junior",       label: "status",           easter: "por ahora..." },
  { value: "Java / Spring", label: "main_stack",      easter: "sí, Java. no me juzgues" },
  { value: "370h",         label: "internship_h",      easter: "y sin dormir algunas" },
  { value: "3+",           label: "projects_shipped",  easter: "y 12 sin terminar 🙃" },
  { value: "Hetzner",      label: "always_on_vps",     easter: "uptime: 99% (el resto, Kafka)" },
  { value: "First role",   label: "seeking",           easter: "¿eres tú? 👀" },
];

export default function About() {
  const glitch = useGlitch({
    playMode: "hover",
    createContainers: true,
    timing: { duration: 600, iterations: 1 },
    glitchTimeSpan: { start: 0, end: 1 },
    shake: { velocity: 15, amplitudeX: 0.08, amplitudeY: 0.04 },
    slice: { count: 6, velocity: 15, minHeight: 0.02, maxHeight: 0.2, hueRotate: false },
  });

  return (
    <section id="sobre-mi" className={styles.wrapper}>
    <div className={styles.about}>
      <div className={styles.left}>
        <span className={styles.prompt}>$ about_</span>

        <h2 className={styles.headline}>
          <span className={styles.highlight} ref={glitch.ref} style={{ display: "inline-block" }}>backend dev</span><br /><span className={styles.headlineSub}>sistemas distribuidos con Java + Spring,<br />Kafka como bus de eventos,<br />fallos como parte del diseño.</span>
        </h2>

        <span className={styles.prompt}>$ user.bio_</span>

        <pre className={styles.code}>
{`> `}<strong>Java + Spring Boot</strong>{` — APIs REST, Spring Data JPA,
  microservicios, Kafka, Redis, SQL.

> Arquitectura `}<strong>hexagonal</strong>{`, DDD y Scrum
  aplicados en proyecto real durante ~370h
  de internship en `}<a href="https://www.linkedin.com/company/beebit/" target="_blank" rel="noopener noreferrer">Beebit</a>{`.
  No rompí nada en producción. `}<strong>Oficialmente.</strong>{`

> Seguridad con `}<strong>Spring Security</strong>{` y `}<strong>JWT</strong>{`.
  Containerización con `}<strong>Docker</strong>{` y CI/CD
  con `}<strong>GitHub Actions</strong>{`.

> Tests con `}<strong>JUnit</strong>{` en proyectos propios.

> FP DAM terminado. En oct 2026 empiezo el Grado
  en la `}<strong>UNED</strong>{`. Hasta entonces todo vive en
  un VPS en Hetzner — siempre encendido,
  siempre roto en algún sitio.

> También hablo frontend. Lo suficiente
  para no molestar al equipo de UI.`}
        </pre>

        <span className={styles.comment}>{"// TODO: conseguir trabajo"}</span>
      </div>

      <div className={styles.right}>
        <span className={styles.prompt}>$ user.stats_</span>
        <div className={styles.grid}>
          {stats.map(({ value, label, easter }) => (
            <div key={label} className={styles.card}>
              <span className={styles.cardValue}>{value}</span>
              <span className={styles.cardLabel}>{label}</span>
              <span className={styles.cardEaster}>{easter}</span>
            </div>
          ))}
        </div>
        <div className={styles.secretWrapper}>
          <p className={styles.secretBig}>// también estoy haciendo un videojuego con Unity, pero dije que es secreto. SHHH 😤</p>
          <img src="/hollow-knight-waking-up.gif" alt="" className={styles.secretGif} />
        </div>
      </div>
    </div>
    </section>
  );
}
