import Layout from "../components/layout";
import Head from "next/head";
import styles from '../styles/contact.module.css';
import Router from "next/router";

import {useForm} from 'react-hook-form';



import ImageBackground from "../components/image-background";
import Header1 from "@/components/header1";









export default function Contact() {




// getting data from the form:
    async function getFormData(data) {

        console.log('form data:>>>> ',data);




        // send to back
        let response = await fetch("api/contact", {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data),
        });




        // route page to thank you page:
        Router.push({
            pathname:"/contact-thank-you",
            query: {
                email: data.email,
                message: data.message,
            },
        });




    }





// form defaults:
    const formDefaults= {
        defaultValues: {
            email: '',
            message: '',
        }
    }

// using form hook:
const {register, handleSubmit, watch, formState: {errors}} = useForm(formDefaults);






    return (<Layout>


        <Head>
            <title> 🌹
                Personal care & waxing high wycombe, princess risborough, marlow, leighton buzzard, south buckinghamshire
</title>
        </Head>





        <ImageBackground image='/media/unsplash/lowRes/backgrounds-Portrait4.jpg'
 />




<Header1
text='Contact'
color="white"
className={styles.header1}
            />







{/* FORM: */}
    <form
        onSubmit={handleSubmit(getFormData)}
        className={styles.form}
        >




{/* email: */}
        <input
            {
                ...register("email", {
                    required: {
                        value: true,
                        message: 'we do need email, please',
                    },
                    minLength: {
                        value: 3,
                        message: 'bit too short'
                    },
                    maxLength: {
                        value: 100,
                        message: 'enter email shorter than this'
                    }
                })
            }

            type="email"
            placeholder="email"
            className={styles.input}


        />

        <p className={styles.errormessage}> {errors.email?.message}</p>














{/* message: */}
    <textarea
        rows="5"
        placeholder="message"
        className={styles.input}

        {
            ...register("message", {
                required: {
                    value: true,
                    message: 'we do need some message',

                 },
                 minLength: {
                    value: 10,
                    message: `at leat 10 characters, characters, please`
                 },
                 maxLength: {
                    value: 2000,
                    message: 'bit tooo long message'
                 }
            }
            )
        }

    >




    </textarea>
    <p className={styles.errormessage}>
        {errors.message?.message}
    </p>











{/* submit: */}

            <input
                type="submit"
                value="Submit"
                className={styles.submit}
                />







</form>







    </Layout>);
};
