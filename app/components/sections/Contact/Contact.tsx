import styles from "./Contact.module.css";

const info = [
  { label: "email",    value: "hola@bakaru.dev",          href: "mailto:hola@bakaru.dev" },
  { label: "github",   value: "github.com/bakaruu",        href: "https://github.com/bakaruu" },
  { label: "linkedin", value: "linkedin.com/in/bakaru",    href: "https://linkedin.com/in/bakaru" },
  { label: "location", value: "Spain · Remote · UTC+1",    href: null },
];

export default function Contact() {
  return (
    <section id="contacto" className={styles.wrapper}>
      <div className={styles.inner}>
        <span className={styles.prompt}>$ contacto_</span>

        <h2 className={styles.headline}>
          backend systems · APIs · distributed systems
        </h2>

        <div className={styles.grid}>
          {info.map(({ label, value, href }) => (
            <div key={label} className={styles.card}>
              <span className={styles.label}>{label}</span>
              {href
                ? <a href={href} className={styles.value} target="_blank" rel="noopener noreferrer">{value}</a>
                : <span className={styles.value}>{value}</span>
              }
            </div>
          ))}
        </div>

        <p className={styles.terminal}>
          <span className={styles.terminalPrompt}>$</span> echo "ready"
          <span className={styles.cursor} />
        </p>
      </div>
    </section>
  );
}
