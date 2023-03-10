import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';



import Layout from '../components/layout';

import ImageBackground from '../components/image-background';
import Header1 from '../components/header1';

import TwoComponents from '../components/two-components';




export default function Home() {








  return (
    <Layout>
      <Head>
        <title>
🌻
          Beauty care & facial high wycombe, princess risborough, marlow, leighton buzzard, south buckinghamshire
</title>
        <meta name="description" content="Generated by create next app" />

{/* for google search engine: */}
        <meta name="google-site-verification" content="-U70Yo_PUyJNjtc9GuyqT4vWVG0UDMjNYE247B5sORY" />


      </Head>









                <ImageBackground
                  image="/media/unsplash/lowRes/backgrounds-Portrait3.jpg"


                />


<h1 className={styles.header}>Beauty, cosmetic<br /> <span style={{fontFamily: 'mainTHIN',}}>&</span> personal care</h1>










      <TwoComponents>



{/* first comp: */}
        <div style={{
          fontSize:'1.7rem',
          // width: '90%',
        }}>
            Welcome to<br />

            <span style={{
              fontFamily: 'fancyCurly',
              fontSize: '4rem',
            }}>

            Beyond Beauty by Chanelle
            </span>



            </div>





<br />


{/* second comp: */}
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.6)',
          // width: '100%',
          display:'flex',
          justifyContent: 'center',
        }}>

          <p style={{
            width: '70%',
            lineHeight: '150%',
            // backgroundColor: 'pink',
          }}>



        Services are available in South Buckinghamshire, High Wycombe, Princess Risborough, Marlow
and Leighton Buzzard.
          </p>
          </div>




      </TwoComponents>




    </Layout>
  )
}
