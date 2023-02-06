import Layout from "@/components/layout";
import Header1 from "@/components/header1";
import ImageBackground from "@/components/image-background";


import {useState, useEffect} from 'react'





export default function MessagesDisplay() {

    const [messages, setMessages] = useState([]);


    useEffect(()=>{

        // getting data from '/api/messages-display'
        async function getMessages() {
            let response = await fetch('/api/messages-display');
            let data = await response.json();


            console.log('data:>>> ', data)
            setMessages(data);
        }


        getMessages();




    },[]);



return (<Layout>
    <ImageBackground image='/media/unsplash/lowRes/backgrounds-Portrait14NARROW.jpg'/>
    <Header1
        text='Messages'
        color='red'
    />


    {messages.map((item, index)=>{
        return <p key={index}>{item.email}: {item.message} </p>;

    })}




</Layout>);};
