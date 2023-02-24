import {MongoClient} from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
    console.log('1')
    if (req.method === 'POST') {
        console.log('2')
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://neighborpil:O4iC6SK2c1DljxQX@cluster0.yjchtin.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup inserted!'});


    }
}

export default handler;