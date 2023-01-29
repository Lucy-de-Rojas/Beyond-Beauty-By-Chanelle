import Link from "next/link";

export default function BottomLinks() {




    return (<div style={{
        backgroundColor: 'white',
        fontFamily: 'mainTHICK',
        width: '100%',
        position:'fixed',
        bottom: '0',
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '10px 0',
        boxShadow: '2px -5px 3px var(--light)',

    }}>



        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/recommendations'>Recommendations</Link>

    </div>);

};
