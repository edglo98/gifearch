import { Link } from "react-router-dom"
import styles from "./Gif.module.css"

interface Props {
  id: string | number;
  title: string;
  url: string;
}

export const Gif = ({
  id,
  title,
  url,
}: Props) => {

  return (
    <article className={styles.gif} >
      <Link to={`/details/${id}`}>
        <picture>
          <img loading="lazy" src={url} alt={title} />
        </picture>
        <label>
          <p>{title}</p>
        </label>
      </Link>
    </article>
  )
}
