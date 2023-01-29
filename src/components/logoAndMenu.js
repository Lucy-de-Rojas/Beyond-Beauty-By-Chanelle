import {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';


import {Sling as Hamburger} from 'hamburger-react';



import styles from '../styles/logoAndMenu.module.css';


import Menu from '@lucyderojas/menu13-next/dist/Menu';





export default function LogoAndMenu() {
    const router = useRouter();











    console.log('router from logo and menu comp:>>> ', router.pathname);









// for burger menu:
    const [isOpen, setOpen] = useState(false);






//   toggle burger menu to open/close:  ✅
     function MenuNavigation() {


        if(isOpen) {
            console.log('open');

            let color = 'pink';


            document.querySelector('.logoAndMenu_navigation__p_YgD').style.transform = 'translateX(-150%)';


            //coloring the burger menu bars:
            for(let i=0;i<=2;i++){
                document.querySelector('.hamburger-react').childNodes[i].style.background = color;

            }



        }
        else {
            console.log('closed');
            // let color = 'sienna';
            // let color = 'salmon';
            let color = 'slategrey';


            document.querySelector('.logoAndMenu_navigation__p_YgD').style.transform = 'translateX(0%)';



            // change color of burger menu:



            for(let i=0;i<=2;i++){
                document.querySelector('.hamburger-react').childNodes[i].style.background = color;

            }



        }
    }









    return (<div>


<div className={styles.logoAndMenuWrapper}>


<div className={styles.logoWrapper}>
<Link href='/'>
        <Image
            src="/media/logos/beauty-by-chanelle-logo.jpg"
            width={915}
            height={580}
            layout="responsive"
            alt="logo- beyond beauty by Chanelle"

            />

            </Link> </div>




<div className={styles.hamburgerWrapper}>

        <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            onToggle={MenuNavigation}
            rounded easing='ease-in-out'
            color='pink'
            label='Show Menu'
            size={60}

            /></div>
</div>   {/*end of:  logoAndMenuWrapper */}




{/* menu: */}
<div className={styles.navigationWrapper}>

        <nav className={styles.navigation}>

        <Menu
            pages={["home","about","contact","recommendations"]}

        />



        </nav></div>





<div>



       </div>






    </div>);

};
