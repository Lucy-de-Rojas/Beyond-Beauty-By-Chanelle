
import styles from '../styles/searchBar.module.css';



export default function SearchBarArchive({handleChange}) {








    return (<div className={styles.wrapper}>




            <input
                type="text"
                className={styles.inputBar}
                placeholder="search archive"
                onChange={handleChange}
                autofocus
                style={{
                    backgroundColor: 'black',
                    color: 'white',

                }}

            />


    </div>);
};
