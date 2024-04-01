/*import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { data } = req.body;

    const client = new MongoClient("mongodb+srv://venky:VENKy@2003@cluster0.cmgisc7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();
      const database = client.db('my-magic-database'); // Choose a name for your database

      const collection = database.collection('my-magic-collection'); // Choose a name for your collection

      await collection.insertOne({ data });

      res.status(201).json({ message: 'Data saved successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong!' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed!' });
  }
}*/