import { NextResponse } from "next/server";

import { account } from "@/lib/data/data";
import fs from "fs";
export  async function POST(req,res){
   /* let obj=await req.json();
      console.log(obj);*/
      let {username,password}= await req.json();
      console.log(username,password);
      if (username==="admin" && password==="admin"){
        console.log("hlo");
        const updatedarray={admin:true};
        const updateddata=JSON.stringify(updatedarray, null, 2);
        fs.writeFileSync(
            "./src/lib/data/datasession.js",
            `export const session = ${updateddata};`,
            "utf-8"
          );
        return NextResponse.json({
          success:"successfully",ok:true
      },{status:200});}
    else{
        return NextResponse.json({
            error:"error got",ok:false
        },{status:400})
    }
    
      

}