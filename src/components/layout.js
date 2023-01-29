import Head from 'next/head';
import Image from 'next/image';

import {useState, useEffect} from 'react';
import Link from "next/link";
import {Sling as Hamburger } from 'hamburger-react';


import styles from '../styles/layout.module.css';
import LogoAndMenu from './logoAndMenu';
import MenuExperimental from './MenuExperimental';
import BottomLinks from './bottomLinks';


export default function Layout({children}) {



return (<div>
    <Head>
    <link rel="icon" href="/media/logos/FaviconChanelle.ico" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>


<LogoAndMenu />











{/*

    <MenuExperimental
        pages={['home','about','contact', 'recommendations']}

        width='80%'

        centered='center'

        borderRadius='10px'

        colorBackgroundBasic='green'
        colorBackgroundHighlight='#5456'
        colorBackgroundSelected='red'

        colorFontBasic='#eab676'
        colorFontHighlight='red'
        colorFontSelected='white'


        />
 */}














    {children}

<BottomLinks />
</div>);

}