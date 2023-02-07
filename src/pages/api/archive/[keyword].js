
import mysql from 'mysql2/promise';
import { mysqlConnect } from "utils/connectDB";










export default async function handler(req, res) {


    let keyword = req.query.keyword;

    console.log('DYNAMIC keyword:>>>> ', keyword);



     // connecting to DB:
     const mysqlDetails = await mysqlConnect();
     const connection = await mysql.createConnection(mysqlDetails);




// edit query to search in table rows: ✅
    let query=`select * from messagesArchive
    where   email like '%${keyword}%' or
            message like '%${keyword}%'`;



    // console.log('query: ', query);
    const values = [];
    const [results] = await connection.execute(query, values);









    res.status(200).json(results);
}