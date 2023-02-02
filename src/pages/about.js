
import Head from "next/head";

import Layout from "../components/layout";
import Header1 from "../components/header1";
import styles from '../styles/about.module.css';


import ImageBackground from "../components/image-background";
import AboutServices from "@/components/about-services";







export default function About() {



    const dataAbout = [{
        image:'/media/about-services/manicure.jpg',
        title: 'Manicure',
    }, {
        image: '/media/about-services/facial.jpg',
        title: 'Facial',
    }, {
        image: '/media/about-services/massage.jpg',
        title: 'Massage',
    }, {
        image: '/media/about-services/pedicure.jpg',
        title: 'Pedicure',
    }, {
        image: '/media/about-services/waxing.jpg',
        title: 'Waxing',
    }];







    return(<Layout>

        <Head>
            <title>  🌷
            Cosmetic care & massage high wycombe, princess risborough, marlow, leighton buzzard, south buckinghamshire

            </title>
        </Head>


        <ImageBackground
                image="/media/unsplash/lowRes/backgrounds-Portrait1.jpg"

                />










        <Header1
            text='About'
            color='white'

        />



    <h2 className={styles.header2}>Sevices</h2>



<div className={styles.servicesWrapper}>


<AboutServices
            title={dataAbout[0].title}
            imageSrc={dataAbout[0].image}
/>


<AboutServices
            title={dataAbout[1].title}
            imageSrc={dataAbout[1].image}
/>


<AboutServices
            title={dataAbout[2].title}
            imageSrc={dataAbout[2].image}
/>



<AboutServices
            title={dataAbout[3].title}
            imageSrc={dataAbout[3].image}
/>

<AboutServices
            title={dataAbout[4].title}
            imageSrc={dataAbout[4].image}
/>




            </div>















    </Layout>);};
