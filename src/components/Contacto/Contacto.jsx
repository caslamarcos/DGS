import { useEffect, useRef } from "react"
import styles from "./Contacto.module.css"

const WHATSAPP = "5491100000000"
const EMAIL = "consultas@dgs.ar"

export default function Contacto() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target) }
        })
      },
      { threshold: 0.12 }
    )
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contacto" className={styles.section} ref={ref}>
      <div className={`${styles.left} reveal`}>
        <p className="section-label">Contacto</p>
        <h2 className={styles.title}>
          ¿Tenés una<br />situación que<br />resolver <em>hoy?</em>
        </h2>
        <p className={styles.note}>
          No hay formularios ni burocracia.<br />
          Nos contactás, evaluamos tu caso,<br />
          y te decimos si podemos ayudarte.<br /><br />
          Toda consulta es confidencial.
        </p>
      </div>

      <div className={`${styles.right} reveal d2`}>
        <a href={`https://wa.me/${WHATSAPP}?text=Hola,%20quiero%20hacer%20una%20consulta%20a%20DGS.`}
          className={styles.btn} target="_blank" rel="noopener noreferrer">
          <span className={styles.btnIcon}>💬</span>
          <div className={styles.btnText}>
            <div className={styles.btnLabel}>WhatsApp Business</div>
            <div className={styles.btnValue}>+54 9 11 0000‑0000</div>
          </div>
          <span className={styles.btnArrow}>↗</span>
        </a>

        <a href={`mailto:${EMAIL}`} className={styles.btn}>
          <span className={styles.btnIcon}>✉️</span>
          <div className={styles.btnText}>
            <div className={styles.btnLabel}>Correo electrónico</div>
            <div className={styles.btnValue}>{EMAIL}</div>
          </div>
          <span className={styles.btnArrow}>↗</span>
        </a>

        <div className={`${styles.btn} ${styles.btnDisabled}`}>
          <span className={styles.btnIcon}>🔒</span>
          <div className={styles.btnText}>
            <div className={styles.btnLabel}>Canal cifrado</div>
            <div className={styles.btnValue}>Disponible previa solicitud</div>
          </div>
        </div>
      </div>
    </section>
  )
}