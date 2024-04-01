import { NextResponse } from "next/server"
import fs from "fs";
import { books } from "@/lib/data/book";
export async function POST(req, res) {
    // Getting Data From User
    let {Bookname,author,price } = await req.json();
  
    // Checking If the data is provided
    if (!Bookname || !author || !price) {
      return NextResponse.json(
        { error: "required field not found" },
        { status: 400 }
      );
    } else {
      // Add the new user to the in-memory array
      let id=parseInt(books[books.length-1].SNo)+1
      books.push({ SNo:`${id}`, BookName:Bookname, Author:author, Price:price });
  
      // Extract just the users array from the updated data
      const updatedBooksArray = books;
  
      // Convert the updated users array to a JSON string
      const updatedData = JSON.stringify(updatedBooksArray, null, 2);
  
      // Write the updated data back to the db.js file
      fs.writeFileSync(
        "./src/lib/data/book.js",
       `export const books = ${updatedData};`,
      "utf-8"
    );
  
      return NextResponse.json({ success: "BOOK Successfully Created",ok:true },{status:200});
    }
  }      