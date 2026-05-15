import styles from "./Work.module.css";

const projects = [
  {
    proc: "PROC/01",
    status: "ONLINE",
    name: "user-management-api",
    description: "API REST de gestión de usuarios con autenticación JWT, control de roles y navegación HATEOAS. Documentada con OpenAPI 3, PKs en UUID y manejo global de excepciones. Frontend en Angular.",
    tags: ["Java 21", "Spring Boot", "Spring Security", "JPA", "MySQL", "Docker"],
    highlight: "REST + JWT",
    github: "https://github.com/bakaruu/user-management-frontend",
  },
  {
    proc: "PROC/02",
    status: "ONLINE",
    name: "skate-shop",
    description: "E-commerce distribuido con microservicios Spring Boot. Comunicación asíncrona entre servicios con Kafka, cache Redis para rendimiento y pagos Stripe procesados mediante webhooks.",
    tags: ["Microservices", "Kafka", "Redis", "Stripe", "Angular", "Jib"],
    highlight: "MICROSERVICES",
    github: "https://github.com/bakaruu/skate-shop",
  },
  {
    proc: "PROC/03",
    status: "WIP",
    name: "financial-alerts",
    description: "Sistema de alertas en tiempo real sobre precios de crypto y bolsa. Arquitectura Maven multi-module, notificaciones vía WebSockets, envío de emails con AWS SES y dashboard Angular.",
    tags: ["Spring Boot", "Kafka", "WebSockets", "PostgreSQL", "AWS SES", "Hetzner"],
    highlight: "REAL-TIME",
    github: "#",
  },
  {
    proc: "PROC/04",
    status: "PRIVATE",
    name: "catium",
    description: "App Android para solicitar cuidadores de gatos cuando estás de viaje. Construida con Jetpack Compose y Material 3, autenticación Firebase y consumo de API REST con Retrofit.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Retrofit", "Material 3"],
    highlight: "ANDROID",
    github: "#",
  },
];

export default function Work() {
  return (
    <section id="proyectos" className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.prompt}>$ trabajo_</span>
          <h2 className={styles.title}>Proyectos</h2>
        </div>

        <div className={styles.grid}>
          {projects.map(({ proc, status, name, description, highlight, github }) => (
            <div key={name} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.proc}>{proc}</span>
                <span className={`${styles.status} ${styles[`status_${status.toLowerCase()}`]}`}>
                  <span className={styles.dot} />
                  {status}
                </span>
              </div>

              <h3 className={styles.name}>{name}</h3>
              <p className={styles.description}>{description}</p>

              <div className={styles.cardFooter}>
                <span className={styles.highlight}>{highlight}</span>
                <a href={github} className={styles.link} target="_blank" rel="noopener noreferrer">
                  {status === "PRIVATE" ? "[ privado ]" : "[ github ]"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
