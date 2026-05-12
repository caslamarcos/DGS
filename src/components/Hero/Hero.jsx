import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.accentLine} />

      <p className={styles.tag}>
        Dirección General de Soluciones — Est. 2024
      </p>

      <h1 className={styles.title}>
        Cada problema<br />
        tiene una <em>solución.</em><br />
        La nuestra, también.
      </h1>

      <p className={styles.subtitle}>
        Trabajamos con personas y organizaciones que enfrentan situaciones
        que requieren discreción, expertise y resultados concretos.
        Sin intermediarios. Sin preguntas innecesarias.
      </p>

      <div className={styles.actions}>
        <a href="#contacto" className={styles.btnPrimary}>Hablar con nosotros</a>
        <a href="#areas" className={styles.btnGhost}>Conocer más</a>
      </div>

      <div className={styles.badge}>
        <svg viewBox="0 0 110 110" width="110" height="110" className={styles.badgeSvg}>
          <defs>
            <path id="circle-text" d="M 55,55 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
          </defs>
          <text fill="#7a6335" fontFamily="Rajdhani" fontSize="7.5" letterSpacing="3.8">
            <textPath href="#circle-text">CONFIDENCIALIDAD · PRECISIÓN · RESULTADOS · </textPath>
          </text>
        </svg>
        <div className={styles.badgeCenter}><span>DGS</span></div>
      </div>

      <div className={styles.scrollHint}>Explorar</div>
    </section>
  )
}