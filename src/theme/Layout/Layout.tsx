import { Outlet } from "react-router-dom"
import { NavBar } from "../NavBar/NavBar"
import styles from "./Layout.module.css"

export const Layout = () => {
  return (
    <div>
      <NavBar/>
      <main className={styles.maincontainer}>
        <Outlet />
      </main>
    </div>
  )
}
