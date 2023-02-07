
import mysql from 'mysql2/promise';
import { mysqlConnect } from "utils/connectDB";



export default async function handler(req, res) {

    const values = [];





    let messageID = req.query.id;
    console.log('inside message archive api', messageID);


    const mysqlDetails = await mysqlConnect();
    const connection = await mysql.createConnection(mysqlDetails);




    // get the message details based on id: 🟥

    let messageQuery = `select * from messagesArchive where id = ${messageID}`;

    const [resultMessage] = await connection.execute(messageQuery, values);


    console.log('selected message details:>>>', resultMessage[0])







    // copy message from archive to messages: 🟥

    let id=  parseInt(resultMessage[0].id);
    let email = resultMessage[0].email;
    let message = resultMessage[0].message;

    console.log('id, email, message:>>>>>',id, email, message, typeof id);



    let queryCopyMessage =  `insert into messages (id, email, message) values (${id},'${email}','${message}')`;

    console.log('query to insert:>>>', queryCopyMessage)


    const [resultCopyingMessage] = await connection.execute(queryCopyMessage, values);






    // delete message from messagesArchive: 🟥

    const queryDeleteMessage = `DELETE FROM messagesArchive WHERE id=${id}`;

    const resultDeletingMessage = await connection.execute(queryDeleteMessage,values);







}
