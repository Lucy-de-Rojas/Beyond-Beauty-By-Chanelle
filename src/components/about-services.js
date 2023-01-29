import Image from "next/image";
import styles from '../styles/about-services.module.css';




export default function AboutServices({imageSrc, title}) {



    return (<div className={styles.compWrapper}>








        <Image
            src={imageSrc}
            width={100}
            height={100}
            layout="responsive"
            className={styles.imageWrapper}


            />


        <p className={styles.title}>{title}</p>




    </div>);
};
