import { useEffect, useRef } from "react"
import styles from "./Statement.module.css"

export default function Statement() {
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
    <section className={styles.section} ref={ref}>
      <blockquote className={`${styles.text} reveal`}>
        No ofrecemos paquetes estándar.<br />
        Ofrecemos <em>resultados</em> a medida de quienes saben exactamente lo que necesitan,<br />
        y buscan a alguien que pueda resolverlo.
      </blockquote>
      <p className={`${styles.attr} reveal d2`}>— Dirección General de Soluciones</p>
    </section>
  )
}