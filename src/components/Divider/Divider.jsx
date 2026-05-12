import styles from "./Divider.module.css"

export default function Divider() {
  return (
    <div className={styles.divider}>
      <span className={styles.symbol}>✦ ✦ ✦</span>
    </div>
  )
}