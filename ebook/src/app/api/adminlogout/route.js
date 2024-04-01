import { NextResponse } from "next/server";

import { session } from "@/lib/data/datasession";
import fs from "fs";
export  async function GET(req,res){
   
      try{
        const updatedarray={admin:false};
        const updateddata=JSON.stringify(updatedarray, null, 2);
        fs.writeFileSync(
            "./src/lib/data/datasession.js",
            `export const session = ${updateddata};`,
            "utf-8"
          );
        return NextResponse.json({
          success:"successfully",ok:true
      },{status:200});}
    catch(e){
        return NextResponse.json({
            error:"error got",ok:false
        },{status:400})
    }
    
      

}