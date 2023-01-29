import Image from "next/image";
import styles from '../styles/about-services.module.css';




export default function AboutServices({imageSrc, title}) {



    return (<div className={styles.compWrapper}>







<div className={styles.imageWrapper}>

        <Image
            src={imageSrc}
            width={100}
            height={100}
            layout="responsive"


            /></div>


        <p className={styles.title}>{title}</p>




    </div>);
};
