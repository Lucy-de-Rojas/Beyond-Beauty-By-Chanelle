import Head from "next/head";


import Layout from "../components/layout";
import ImageBackground from "../components/image-background";
import styles from '../styles/recommendations.module.css';
import Recommendation from "@/components/recommendation";
import Header1 from "@/components/header1";







export default function Recommendations() {






    return (
            <Layout>
                <Head>
                    <title> 🌼
                    Manicure & pedicure high wycombe, princess risborough, marlow, leighton buzzard, south buckinghamshire

                    </title>
                </Head>

<ImageBackground image='/media/unsplash/lowRes/backgrounds-Portrait8.jpg' />




        <Header1

            text="Recommendations"
            color='white'

        />



<div className={styles.columnsWrapper}>




<div className={styles.column}>
        <Recommendation
            quote='“I had the Revitaliser Dermplaning Facial and it was an absolute treat! Would 100% recommend this treatment. My skin feels cleansed, soft and glowing!  Chanelle was super lovely, calming and professional. She really made my living room feel like a spa!
            Cant wait for my next treatment already!
            Thank you Chanelle x'
            name='Michelle Andrews'

            />




        <Recommendation
            quote="“Chanelle is an absolute wizard when it comes to her work. she has corrected my awful brows done elsewhere and completely restored my confidence.  I absolutely love my new brows.”
            "
            name="Farrah King"
            />
</div>





<div className={styles.column}>
<Recommendation
            quote="“Lovely leg wax, didnt feel a single bit of pain. chanelle is friendly and chatty. cant wait to try out more treatments.”
            "
            name="Angela Klaire"
        />


<Recommendation
            quote="“Chenelle is wonderful!!! Highly skilled, punctual, professional and good pre-appointment correspondence. More than that though, she has a lovely presence about her and I felt so comfortable having her in my home. I had a 1hr full body massage and it was really great! Super relaxing and methodical but she also had the strength to go harder in areas I needed her to. Highly recommended!”"
            name="Lilly Papaioannou"
        />
</div>
            </div>




                </Layout>)
};
