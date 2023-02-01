import Layout from "@/components/layout";
import {useRouter} from 'next/router';
import LayoutNoMenu from "@/components/layout-no-menu";

import Header1 from "@/components/header1";
import styles from '../styles/contact-thank-you.module.css';
import ImageBackground from "@/components/image-background";




export default function ContactThankYou() {


    // getting data from contact page:
    const router = useRouter();
    const {query: {
        email, message
    }} = router;






    return (<Layout>


        <ImageBackground image="/media/unsplash/lowRes/backgrounds-Portrait11.jpg"/>


        <Header1
            text="Thank you for contacting us"
            color="rgb(81, 2, 2)"

        />



{/* content wrapper: */}
<div className={styles.contentWrapper} >


        <p className={styles.bolder}>email:</p>
        {email}
<br /><br /><br />
        <p className={styles.bolder}>message:</p>

             {message}


</div>



    </Layout>);

};
