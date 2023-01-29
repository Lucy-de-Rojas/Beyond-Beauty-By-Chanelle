
import Image from 'next/image';


export default function LayoutNoMenu({children}) {



    return (<div>
<div style={{

    width:'50%',
    margin: 'auto',
}}>

<Image
            src="/media/logos/beauty-by-chanelle-NEW-logo.png"
            width={915}
            height={580}
            layout="responsive"
            alt="logo"

            />
            </div>
<h1>layout no menu</h1>

{children}


    </div>);

};
