import styles from './Grid.module.css'

interface Props {
  children: React.ReactNode;
}

export const Grid = ({children}: Props) => {

  return (
    <section className={styles.grid} >
      {children}
    </section>
  )
}
