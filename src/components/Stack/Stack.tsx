import { FC } from "react"
import styles from "./Stack.module.css"

export const Stack: FC = ({children}) => {
  return (
    <section className={styles.flexgrid} >
      {children}
    </section>
  )
}
