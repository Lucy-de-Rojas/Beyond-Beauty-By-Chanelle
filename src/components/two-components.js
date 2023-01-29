import styles from '../styles/twoComponents.module.css';


export default function TwoComponents({children}) {




    return (<div className={styles.wrapper}>

{children}


    </div>);

};
