// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



export default async function handler(req, res) {


    let data = req.body;
    console.log('data arriving to the back:>>> ', data)



    res.status(200).json({ name: 'John Doe' })
  }
