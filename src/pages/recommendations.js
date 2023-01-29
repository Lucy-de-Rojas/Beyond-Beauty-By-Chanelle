
import Layout from "../components/layout";
import ImageBackground from "../components/image-background";

import styles from '../styles/recommendations.module.css';

import Recommendation from "@/components/recommendation";


export default function Recommendations() {






    return (
            <Layout>
<ImageBackground image='/media/unsplash/lowRes/backgrounds-Portrait8.jpg' />


<h1>Recommendations</h1>

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





<Recommendation
            quote="“Chanelle is an absolute wizard when it comes to her work. she has corrected my awful brows done elsewhere and completely restored my confidence.  I absolutely love my new brows.”
            "
            name="Farrah King"
        />


                </Layout>)
};
