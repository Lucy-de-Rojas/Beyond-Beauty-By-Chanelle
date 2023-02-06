// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mysql from 'mysql2/promise';

import { mysqlConnect } from "utils/connectDB";







export default async function handler(req, res) {


    let data = req.body;
    console.log('data arriving to the back:>>> ', data);

    // connecting to DB:
    const mysqlDetails = await mysqlConnect();
    const connection = await mysql.createConnection(mysqlDetails);


    // if connected to DB:
    if(connection) {
      console.log('connected to chanelle database!')



      // save data if it comes from the front:
      if(data) {
        const query=`insert into messages (email, message) values('${data.email}','${data.message}')`;
        console.log('query: ', query)
        const values = [];
        const [results] = await connection.execute(query, values);
      }

    }



    res.status(200).json({ name: 'John Doe' })
  }
