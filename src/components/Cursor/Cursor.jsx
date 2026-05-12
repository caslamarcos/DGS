import { useEffect, useRef } from "react"
import styles from "./Cursor.module.css"

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`
    }

    const animate = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`
      rafId = requestAnimationFrame(animate)
    }

    document.addEventListener("mousemove", onMove)
    animate()
    return () => { document.removeEventListener("mousemove", onMove); cancelAnimationFrame(rafId) }
  }, [])

  return (
    <>
      <div ref={dotRef}  className={styles.dot}  />
      <div ref={ringRef} className={styles.ring} />
    </>
  )
}