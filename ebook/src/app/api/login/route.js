import { NextResponse } from "next/server";
import connectDB from "@/lib/model/connectdb";
import User from "@/lib/model/user";
import { MongoClient } from 'mongodb';
import { account } from "@/lib/data/data";
export  async function POST(req,res){
   /* let obj=await req.json();
      console.log(obj);*/
      let {username,password}= await req.json();
      console.log(username,password);
      if (account.find(user=>user.username===username && user.password===password)){
        console.log("hlo");
        return NextResponse.json({
          success:"successfully",ok:true
      },{status:200});}
    else{
        return NextResponse.json({
            error:"error got",ok:false
        },{status:400})
    }
    
      /*if (account.find(user=>user.username===obj.username && user.password===obj.password)){
      return NextResponse.json({
        success:"successfully",ok:true
    },{status:200});}*/
     /* await connectDB();
      console.log("hi ra");
      const user = await User.findOne({username:obj.username});
      console.log(user);
      console.log("bye ra");
      
      return NextResponse.json("hi");}
      
const client = new MongoClient(process.env.mongodb_url);

    await client.connect();
    const collection = client.collection('user'); // Choose a name for your database
    const user=await collection.findOne({username:'sai'});
    console.log(user);
    }
      
      catch(e){
        console.log("error");
        return NextResponse.json("error");
      }
    */
      


}