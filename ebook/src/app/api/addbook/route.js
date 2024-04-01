import fs from 'fs';
import { book_users } from "@/lib/data/book-user";
import { NextResponse } from "next/server";
export  async function POST(req,res){
    const userbook=await req.json();
         const username=userbook.username;
    console.log(userbook);
    let no=1;
    
    book_users.find((user)=>{
         if ((user.username)===username){
            console.log("hi");
            console.log(userbook.books);
            const book=userbook.books[0]
            user.books.push(book);
            no=0;
            
         }
         
         
    })
    if (no==1){
        book_users.find((user)=>{
    if ((user.username)!==username){ 
        book_users.push(userbook)}
        
        })}
    
    console.log(book_users);
    const updatedarray=book_users;
    const updateddata = JSON.stringify(updatedarray, null, 2);
    
    fs.writeFileSync(
        "./src/lib/data/book-user.js",
        `export const book_users = ${updateddata};`,
        "utf-8"
      );
      return NextResponse.json({
        success:"successfully added",ok:true
    },{status:200});
}