
import mysql from 'mysql2/promise';
import { mysqlConnect } from "utils/connectDB";







export default async function handler(req, res) {

    // connecting to DB:
    const mysqlDetails = await mysqlConnect();
    const connection = await mysql.createConnection(mysqlDetails);


    const query=`select * from messagesArchive`;
    console.log('query: ', query)
    const values = [];
    const [results] = await connection.execute(query, values);





    res.status(200).json(results)

}