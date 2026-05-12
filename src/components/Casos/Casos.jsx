import { useEffect, useRef } from "react"
import styles from "./Casos.module.css"

const CASOS = [
  {
    initial: "M. R.",
    text: '"El proceso que parecía imposible fue resuelto en menos tiempo del que esperaba. Sin complicaciones, sin exposición. Exactamente lo que necesitaba."',
    tag: "Gestión de Activos",
  },
  {
    initial: "F. L.",
    text: '"Teníamos una situación de alta complejidad que ninguna consultora convencional supo resolver. DGS lo hizo con una discreción ejemplar."',
    tag: "Flujo Internacional",
  },
  {
    initial: "A. T.",
    text: '"La solución que implementaron superó nuestras expectativas técnicas y operativas. Profesionalismo de otro nivel."',
    tag: "Conectividad",
  },
  {
    initial: "C. V.",
    text: '"Mi familia atravesaba un proceso delicado. Fueron los únicos que entendieron la situación real y actuaron en consecuencia."',
    tag: "Situaciones Complejas",
  },
]

export default function Casos() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target) }
        })
      },
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="casos" className={styles.section} ref={ref}>
      <div className="reveal" style={{ marginBottom: "60px" }}>
        <p className="section-label">Referencias</p>
        <h2 className="section-title">Resultados que<br />hablan por <em>sí solos.</em></h2>
      </div>
      <div className={styles.list}>
        {CASOS.map((caso, i) => (
          <div key={i} className={`${styles.item} reveal`}>
            <div className={styles.initial}>{caso.initial}</div>
            <p className={styles.text}>{caso.text}</p>
            <div className={styles.tag}>{caso.tag}</div>
          </div>
        ))}
      </div>
    </section>
  )
}