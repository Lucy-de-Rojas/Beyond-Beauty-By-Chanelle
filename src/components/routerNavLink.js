import { useRouter } from "next/router";




export default function RouterNavLink() {
    console.clear();

    const router = useRouter();


    console.log('router all:>>>', router)
    console.log('router info:>>>>',router.pathname);


    


    return (<div
                style={{
                    backgroundColor: '#147147',
                    color: '#fff',
                    padding: '20px',
                    }}>
        <h1>router : {router.pathname}</h1>


    </div>);};
