"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import NavBadTV from "../../effects/NavBadTV/NavBadTV";

const links = [
  { label: "Sobre mí",  href: "#sobre-mi" },
  { label: "Stack",     href: "#stack" },
  { label: "Proyectos",   href: "#proyectos" },
  { label: "Contacto",  href: "#contacto" },
];

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState<"es" | "en">("es");

  useEffect(() => {
    document.documentElement.classList.remove("light");
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("light", !next);
  };

  return (
    <nav className={styles.nav}>
      <NavBadTV light={!dark} />
      <a href="#" className={styles.logo}>
        <span className={styles.dot} />
        bakaru.dev
      </a>

      <ul className={styles.links}>
        {links.map(({ label, href }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>

      <div className={styles.controls}>
        <button className={styles.toggle} onClick={() => setLang(lang === "es" ? "en" : "es")} aria-label="Toggle language">
          {lang === "es" ? "en" : "es"}
        </button>
        <span className={styles.separator}>|</span>
        <button className={styles.toggle} onClick={toggleTheme} aria-label="Toggle theme">
          {dark ? "☀ día" : "☾ noche"}
        </button>
      </div>
    </nav>
  );
}
