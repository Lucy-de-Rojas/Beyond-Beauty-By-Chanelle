
import { useEffect, useState} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';



export default function MenuExperimental({
        pages, width, centered, borderRadius, colorFontBasic, colorFontHighlight, colorFontSelected, colorBackgroundBasic,colorBackgroundHighlight, colorBackgroundSelected
    }) {



        // setting up default values for props:
        if(!pages) {
            pages = ['home',"about", "contact"];
        }
        if(!width) {
            width = '80%';
        }
        if (!centered) {
            centered = "center"
        }

         if(!borderRadius) {
            borderRadius = '10px';
         }





         if(!colorBackgroundBasic) {
            colorBackgroundBasic = '#85a5ff';
         }

         if(!colorFontBasic) {
            colorFontBasic = '#001655';
         }



         if(!colorBackgroundHighlight) {
            colorBackgroundHighlight ='#000f5b';
         }

         if(!colorFontHighlight) {
            colorFontHighlight = '#ffffff';
         }


         if(!colorBackgroundSelected) {
            colorBackgroundSelected='#ffc549';
         }
         if(!colorFontSelected) {
            colorFontSelected ='#000f5b';
         }





         function handleClick() {
            let navigation =  document.querySelector('.logoAndMenu_navigation__p_YgD');
            navigation.style.transition = 'transform 0.8s, transalte 0.8s';
            navigation.style.transform = 'translateX(-150%)';
         }





    const router = useRouter();
    let path = router.pathname;
    console.log('path name:>>>>', path);





    // centering nav:
    if(centered=='left') {
        centered = 'flex-start';
    }
    if(centered=='right') {
        centered = 'flex-end';
    }














// highlighing selected menu item
// router.pathname drives the


    // useEffect(()=>{


    //     let regex = /\//g;


    //     path = path.replace(regex, "");
    //     if(path=='') {
    //         path='home'
    //     }

    //     let target = document.querySelector(`.${path}`);




    //     // styling of selected item:
    //     target.style.backgroundColor = colorBackgroundSelected;
    //     target.style.color = colorFontSelected;
    //     target.style.fontSize = '1.6rem';
    //     target.style.fontWeight = 'bolder';
    //     target.style.padding = '18px 0';

    //     // end of styling selected itme


    //     console.log('target: by class>>>>', target);




    // },[]);






    return (<div className='wrapper'>

      <style global jsx>{`





        .navigation {
            /* background-color:pink; */
            /* width:100%; */
            display:flex;
            flex-direction:column;
            align-items: ${centered};
            transition: transform 2s;

        }






        .menuItem {
            background-color:  ${colorBackgroundBasic};
            color: ${colorFontBasic};
            width:${width};
            text-align: center;
            margin: 2px 0;
            transition: padding 0.4s;
            border-radius: ${borderRadius};
        }


        .menuItem:hover {
            background-color: ${colorBackgroundHighlight};
            color: ${colorFontHighlight};
            font-size: 1.6rem;
            font-weight: bolder;
            padding: 5px 0;
        }








      `}</style>






        <nav className='navigation'>



        {pages.map((item, index)=>{
            let capitalisedName = item[0].toUpperCase() + item.slice(1);

            let href = '/'+item;

            if(item=='home') {
                href='/';
            }

            return (

                <Link
                    href={href}
                    className={`menuItem ${item}`}
                    key={index}
                    onClick={handleClick}
                    >{capitalisedName}</Link>
            );
        })}


        {/* end of menu items loop */}




        </nav>
    </div>);};
