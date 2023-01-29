
import styles from '../styles/recommendations.module.css';

export default function Recommendation({quote, name}) {





    return (<div className={styles.recWrapper}>
<p className={styles.quote}>{quote}</p>
<p className={styles.name}>{name}</p>
    </div>);
};
