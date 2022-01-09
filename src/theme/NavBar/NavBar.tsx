import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

export const NavBar = () => {
  return (
    <header className={styles.appbar} >
      <section className={styles.appcontainer} >
        <section className={styles.logo}>
          <Link to='/'>
            Gifearch
          </Link>
        </section>
        <nav className={styles.nav} >
          <ul>
            <li>
              <Link to="/">Sitckers</Link>
            </li>
            <li>
              <Link to="/">Sitckers</Link>
            </li>
            <li>
              <Link to="/">Sitckers</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  )
}
