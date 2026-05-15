import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.left}>© 2026 bakaru.dev</span>
      <span className={styles.center}>[stderr] css.module still loaded</span>
      <span className={styles.right}>served from a single goroutine</span>
    </footer>
  );
}
