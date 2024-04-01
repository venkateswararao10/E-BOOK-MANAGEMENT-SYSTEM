import { NextResponse } from "next/server"
import fs from "fs";
import { books } from "@/lib/data/book";
export  function GET(req,res){
    console.log(res.params);
    const {itemno}=res.params;
    const book = books.find((u) => u.SNo === `${itemno}`);
    console.log(book);
    if (book) {
        return NextResponse.json(book,{status:200});
    } else {
        return NextResponse.error(new Error("Book not found"), { status: 404 }); // Return a 404 error if book is not found
    }}
    
    export async function PUT(req, res) {
        const { SNo, BookName, Author, Price } = await req.json();
      
        // Find the user in the users array by ID
        const bookIndex = books.findIndex((book) => book.SNo === SNo);
      
        if (bookIndex === -1) {
          return NextResponse.json({ result: "book not found" }, { status: 404 });
        }
      
        if (SNo) {
          books[bookIndex].SNo = SNo;
        }
        if (BookName) {
            books[bookIndex].BookName = BookName;
          }
          if (Author) {
            books[bookIndex].Author = Author;
          }
          if (Price) {
            books[bookIndex].Price = Price;
          }
        // Update the user data in the db.js file
        const updatedBookArray = books;
        const updatedData = JSON.stringify(updatedBookArray, null, 2);
      
        fs.writeFileSync(
            "./src/lib/data/book.js",
           `export const books = ${updatedData};`,
          "utf-8"
        );
      
        return NextResponse.json({ success: "Book Successfully Updated",ok:true
    },{status:200});
      }

      export async function DELETE(req, res) {
        const { itemno } = await res.params;

  // Find the index of the user to delete in the users array
  const bookIndex = books.findIndex((book) => book.SNo === itemno);

  if (bookIndex === -1) {
    return NextResponse.json({ result: "book not found" }, { status: 404 });
  }

  // Remove the user from the users array
  books.splice(bookIndex, 1);

  // Update the user data in the db.js file
  const updatedBookArray = books;
  updatebookData(updatedBookArray);

  return NextResponse.json({ success: "book Successfully Deleted",ok:true
 },{status:200});
      }
      
      function updatebookData(updatedBookArray) {
        const updatedData = JSON.stringify(updatedBookArray, null, 2);
        fs.writeFileSync("./src/lib/data/book.js",
        `export const books = ${updatedData};`,
       "utf-8");
      }


      