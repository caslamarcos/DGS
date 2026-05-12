import { useEffect, useState } from "react"
import styles from "./Navbar.module.css"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <img src="/dgsicono.png" alt="DGS" className={styles.logoImg} />
        <span className={styles.logoText}>Dirección General</span>
      </div>
      <ul className={styles.links}>
        <li><a href="#areas">Áreas</a></li>
        <li><a href="#casos">Referencias</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <a href="#contacto" className={styles.cta}>Iniciar consulta</a>
    </nav>
  )
}