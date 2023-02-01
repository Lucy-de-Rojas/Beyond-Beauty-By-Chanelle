import Layout from "../components/layout";
import Head from "next/head";
import styles from '../styles/contact.module.css';

import {useForm} from 'react-hook-form';



import ImageBackground from "../components/image-background";
import Header1 from "@/components/header1";





export default function Contact() {




// getting data from the form:
    async function getFormData(data) {

        console.log('form data:>>>> ',data);




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
            <title>Contact</title>
        </Head>





        <ImageBackground image='/media/unsplash/lowRes/backgrounds-Portrait4.jpg'
 />




<Header1
text='Contact'
color="red"
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
                    message: 'at leat 10 characters, please'
                 },
                 maxLength: {
                    value: 1000,
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
