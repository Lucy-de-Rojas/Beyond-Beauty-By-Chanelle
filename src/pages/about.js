


import Layout from "../components/layout";
import Header1 from "../components/header1";


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


        <ImageBackground
                image="/media/unsplash/lowRes/backgrounds-Portrait1.jpg"

                />










        <Header1
            text='About'
            color='white'

        />





<AboutServices
            title={dataAbout[0].title}
            imageSrc={dataAbout[0].image}
/>


<AboutServices
            title={dataAbout[1].title}
            imageSrc={dataAbout[1].image}
/>
















    </Layout>);};
