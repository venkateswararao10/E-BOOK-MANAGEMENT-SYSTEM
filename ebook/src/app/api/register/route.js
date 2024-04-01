import { NextResponse } from "next/server";
//import connectDB from "@/lib/model/connectdb";
import User from "@/lib/model/user";
import { account } from "@/lib/data/data";
import fs from 'fs';
export  async function POST(req,res){
      
      //try{
            
            const {username,password,email,fullname}= await req.json();
      console.log(username,password,email,fullname);
      if (username && password && email && fullname){
           //const newuser= await req.json()
             
            // Read the existing JSON data from the file
            //const rawData = fs.readFileSync('./src/lib/data/data.js');
            //const users= JSON.parse(rawData);
            
            // Create a new user object
            const newuser = {
                
                username: username,
                fullname:fullname,
                email: email,
                password:password
                // Add other properties as needed
            };
            const index=account.findIndex(user=>user.username===username);
            if (index!==-1){
              console.log("rey entra idi");
              return NextResponse.json({
                success:"username already exist",ok:false
            },{status:400});}
            
            // Add the new user to the array
            else if(index===-1){
            account.push(newuser);
            const updatedarray=account
            // Convert the array of users back to JSON
            const updateddata = JSON.stringify(updatedarray, null, 2);
            
            // Write the updated JSON data back to the file
            //fs.writeFileSync('ebook/src/lib/data/data.js', newData);
            
            fs.writeFileSync(
              "./src/lib/data/data.js",
              `export const account = ${updateddata};`,
              "utf-8"
            );

            console.log('New user added successfully.');
        console.log("hlo");
        return NextResponse.json({
          success:"successfully added",ok:true
      },{status:200});}}
    else{
        return NextResponse.json({
            error:"error got",ok:false
        },{status:400})
    }

            
            /*await connectDB();
            const user = new User(obj);  
            
            await user.save();
            console.log("bye");
            console.log(user);
            return  NextResponse.json("hi");
          }
            catch(e){
            console.log("error")
            return  NextResponse.json("error");
            }*/
      


}