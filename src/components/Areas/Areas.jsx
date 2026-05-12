import { useEffect, useRef } from "react"
import styles from "./Areas.module.css"

const AREAS = [
  {
    number: "01",
    icon: "⚙️",
    name: "Gestión de Activos",
    desc: "Estructuración, movimiento y protección de patrimonio en distintos formatos y jurisdicciones. Adaptado a cada perfil.",
  },
  {
    number: "02",
    icon: "🌐",
    name: "Conectividad & Tecnología",
    desc: "Infraestructura de comunicaciones para zonas donde el mercado no resuelve. Soluciones para empresas y particulares.",
  },
  {
    number: "03",
    icon: "🔄",
    name: "Flujo Internacional",
    desc: "Gestión de operaciones que cruzan fronteras: logística, comercio exterior y movimiento de capital con respaldo profesional.",
  },
  {
    number: "04",
    icon: "👤",
    name: "Consultoría de Situaciones Complejas",
    desc: "Acompañamos a personas y familias en procesos que requieren experticia, discreción y gestión personalizada.",
  },
]

export default function Areas() {
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
    <section id="areas" className={styles.section} ref={ref}>
      <div className="reveal" style={{ marginBottom: "72px" }}>
        <p className="section-label">Nuestras áreas</p>
        <h2 className="section-title">
          Soluciones donde<br />otros no <em>llegan.</em>
        </h2>
      </div>

      <div className={styles.grid}>
        {AREAS.map((area, i) => (
          <div key={area.number} className={`${styles.card} reveal d${i + 1}`}>
            <div className={styles.number}>{area.number}</div>
            <div className={styles.icon}>{area.icon}</div>
            <div className={styles.name}>{area.name}</div>
            <p className={styles.desc}>{area.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}