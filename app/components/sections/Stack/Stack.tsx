import styles from "./Stack.module.css";

const categories = [
  {
    label: "core",
    items: [
      { name: "Java 21",         letter: "J",   icon: "/java-logo-svg-vector.svg" },
      { name: "Spring Boot",     letter: "SB",  icon: "/Spring_Boot.svg.png" },
      { name: "Spring Security", letter: "SS",  icon: "/Springsecurity--Streamline-Simple-Icons.svg", iconWhite: true },
      { name: "Kafka",           letter: "KF",  icon: "/kafka.png", iconWhite: true },
      { name: "Redis",           letter: "RD",  icon: "/Logo-redis_(old).svg.png" },
      { name: "PostgreSQL",      letter: "PG",  icon: "/postgres.png" },
      { name: "JUnit",           letter: "JU",  icon: "/junit.svg" },
      { name: "Docker",          letter: "DK",  icon: "/330px-Docker_Logo.svg.png" },
      { name: "GitHub Actions",  letter: "GH",  icon: "/githubactions.svg", iconWhite: true },
    ],
  },
  {
    label: "frontend",
    items: [
      { name: "React",       letter: "R",   icon: "/react-svgrepo-com.svg" },
      { name: "TypeScript",  letter: "TS",  icon: "/typescript-official-svgrepo-com.svg" },
      { name: "Angular",     letter: "A",   icon: "/angular-svgrepo-com.svg" },
      { name: "Next.js",     letter: "N",   icon: "/next.svg", iconWhite: true },
    ],
  },
  {
    label: "mobile",
    items: [
      { name: "Kotlin",          letter: "K",   icon: "/kotlin.png" },
      { name: "Jetpack Compose", letter: "JC",  icon: "/250px-Jetpack_Compose_logo.png" },
      { name: "Android Studio",  letter: "AS",  icon: "/logo-google-android-studio-svgrepo-com.svg", iconWhite: true },
    ],
  },
  {
    label: "game dev",
    items: [
      { name: "Unity",  letter: "U",    icon: "/unity-svgrepo-com.svg", iconWhite: true },
      { name: "C#",     letter: "C#",   icon: "/Logo_C_sharp.svg.png" },
      { name: "C++",    letter: "C++",  icon: "/ISO_C++_Logo.svg.png" },
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.prompt}>$ stack_</span>
          <div className={styles.statement}>
         
        </div>

        <div className={styles.categories}>
          {categories.slice(0, 2).map(({ label, items }) => (
            <div key={label} className={styles.group}>
              <span className={styles.categoryLabel}>{`> ${label}`}</span>
              <div className={styles.grid}>
                {items.map((item) => (
                  <div key={item.name} className={styles.card}>
                    {item.icon
                      ? <img src={item.icon} alt={item.name} className={styles.icon} style={{ width: ('iconSize' in item ? item.iconSize as number : 40), height: ('iconSize' in item ? item.iconSize as number : 40), filter: ('iconWhite' in item && item.iconWhite ? 'brightness(0) invert(1)' : undefined) }} />
                      : <span className={styles.letter}>{item.letter}</span>
                    }
                    <span className={styles.name}>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className={styles.row}>
            {categories.slice(2).map(({ label, items }) => (
              <div key={label} className={styles.group}>
                <span className={styles.categoryLabel}>{`> ${label}`}</span>
                <div className={styles.grid}>
                  {items.map((item) => (
                    <div key={item.name} className={styles.card}>
                      {item.icon
                        ? <img src={item.icon} alt={item.name} className={styles.icon} style={{ width: ('iconSize' in item ? item.iconSize as number : 40), height: ('iconSize' in item ? item.iconSize as number : 40), filter: ('iconWhite' in item && item.iconWhite ? 'brightness(0) invert(1)' : undefined) }} />
                        : <span className={styles.letter}>{item.letter}</span>
                      }
                      <span className={styles.name}>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
