import { Link } from 'react-router-dom';
import styles from './Chip.module.css';

interface Props {
  label: string;
}

export const Chip = ({label}: Props) => {

  return (
    <Link to={`/search/${label}`} className={styles.chip} >
      <p>
        {label}
      </p>
    </Link>
  )
}
