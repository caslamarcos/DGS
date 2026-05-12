import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src="/dgsicono.png" alt="DGS" className={styles.logoImg} />
      </div>
      <div className={styles.tagline}>
        Donde otros se detienen, nosotros empezamos.
      </div>
      <div className={styles.copy}>
        © {new Date().getFullYear()} Dirección General de Soluciones
      </div>
    </footer>
  )
}