


import Layout from "../components/layout";
import Header1 from "../components/header1";


import ImageBackground from "../components/image-background";


export default function About() {

    return(<Layout>


        <ImageBackground
                image="/media/unsplash/lowRes/backgrounds-Portrait1.jpg"

                />





        {/* <ImageBackground
            src="/media/unsplash/backgrounds-Portrait1.jpg"

            width={1000}
            height={1500}


        /> */}





        <Header1
            text='About'
            color='white'

        />


    </Layout>);







};
