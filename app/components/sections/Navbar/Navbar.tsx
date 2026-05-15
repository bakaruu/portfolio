"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import NavBadTV from "../../effects/NavBadTV/NavBadTV";
import BrokenTVOverlay from "../../effects/BrokenTVOverlay/BrokenTVOverlay";

const links = [
  { label: "Sobre mí",  href: "#sobre-mi" },
  { label: "Stack",     href: "#stack" },
  { label: "Proyectos",   href: "#proyectos" },
  { label: "Contacto",  href: "#contacto" },
];

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState<"es" | "en">("es");
  const [showBroken, setShowBroken] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("light");
  }, []);

  const toggleTheme = () => {
    if (dark) {
      // switching to light → show broken TV first
      setShowBroken(true);
    } else {
      // switching back to dark → direct
      setDark(true);
      document.documentElement.classList.remove("light");
    }
  };

  const handleBack = () => {
    setShowBroken(false);
  };

  const handleContinue = () => {
    setShowBroken(false);
    setDark(false);
    document.documentElement.classList.add("light");
  };

  return (
    <>
      {showBroken && (
        <BrokenTVOverlay onBack={handleBack} onContinue={handleContinue} />
      )}
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
    </>
  );
}
