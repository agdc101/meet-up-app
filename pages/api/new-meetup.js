// api/new-meetup
import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;

    const newMeetup = {
      title,
      image,
      address,
      description,
    };

    const client = await MongoClient.connect('mongodb+srv://agdc101:Jupiter68-@cluster0.lrcr2ju.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(newMeetup);

    console.log(newMeetup);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;