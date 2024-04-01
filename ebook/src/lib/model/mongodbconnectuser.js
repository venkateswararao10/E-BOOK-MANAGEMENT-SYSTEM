/*import { MongoClient } from 'mongodb';
const client = new MongoClient(process.env.mongodb_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
try {
    await client.connect();
    const collection = client.collection('user'); // Choose a name for your database
    const user=await collection.findOne({username:'sai'});
    console.log(user);}
catch(e){
   console.log(e);
}*/