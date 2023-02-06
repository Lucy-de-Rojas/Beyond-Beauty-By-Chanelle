
import styles from '../styles/searchBar.module.css';



export default function SearchBar({handleChange}) {








    return (<div className={styles.wrapper}>




            <input
                type="text"
                className={styles.inputBar}
                placeholder="search emails"
                onChange={handleChange}
                autofocus

            />


    </div>);
};
