import Layout from "@/components/layout";
import Header1 from "@/components/header1";
import ImageBackground from "@/components/image-background";
import styles from '../styles/messages-display.module.css';
import { reinstateMessage } from "@/utils/reinstateMessage";

import SearchBarArchive from "@/components/searchBarArchive";

import {useState, useEffect, useRef} from 'react';
import Link from "next/link";
import Head from "next/head";





export default function MessagesDisplay() {

    const [messages, setMessages] = useState([]);
    const [keyword1, setKeyword1] = useState("");
    // const keyword =useRef('');


    // on ipnput change for search bar:
    function handleChange(event) {
        console.clear();
        let data = event.target.value;
        console.log('data from search bar archive>>>>>:', data);
        // keyword.current = data;
        setKeyword1(data);

    }




    useEffect(()=>{

        // getting data from '/api/messages-display'  ✅
        async function getMessages() {
            let response = await fetch('/api/archive-display');
            let data = await response.json();


            console.log('data:>>> ', data)
            setMessages(data);
        }

        // getMessages();










        async function getDynamicMessages() {

            // set the keyword: 🟥
            let response = await fetch(`/api/archive/${keyword1}`);
            let data = await response.json();

            setMessages(data);
        }

        // getDynamicMessages();

        if(keyword1) {
            getDynamicMessages();
        }
        else {
            getMessages();
        }


    },[keyword1]);





return (<Layout>


<Head>
    <title>✔ Archived Messages Beauty by Chanelle</title>
</Head>




    <ImageBackground image='/media/unsplash/lowRes/backgrounds-Portrait14.jpg'/>
    <Header1
        text={'Messages Archive: ' + messages.length}
        color='var(--dark)'
    />


{/* link to main messages: */}
<Link
    href="/messages-display"
    className={styles.goToMessagesButton}
    >
<button>Messages</button>
</Link>


<SearchBarArchive handleChange={handleChange} />



    {/* display messages from DB: */}
    {messages.map((item)=>{
        return <p key={item.id} className={styles.wrapper}>

            <span className={styles.email}>
                        {item.email}
            </span>
            <span className={styles.message}>
                         {item.message}
            </span>



            <button
                onClick={reinstateMessage} id={item.id}
                className={styles.archiveMessageButton}

                >Reinstate Message</button>


                          </p>;

    })}




</Layout>);};
