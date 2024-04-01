'use client'
import { books } from "@/lib/data/book";
import { book_users } from "@/lib/data/book-user";
import { account } from "@/lib/data/data";
import EditBook from "./edit/[itemno]/page";
import Image from 'next/image';
import Link from "next/link";
import { useState,useEffect } from "react";
import { redirect, useRouter,permanentRedirect } from "next/navigation";
export default function Listofbooks(){
    const router = useRouter()
    const [redirect, setRedirect] = useState(false);
   
    
    const editbook=(item)=>{
        console.log(item);
        router.push(`/admin/booklist/edit/${item.SNo}`)
        
    }
    const deletebook=async (item)=>{
        try {
            const response = await fetch(`/api/book/${item.SNo}`, {
              method: "DELETE",
              
            });
            if (response.ok) {
              alert(`${item.BookName} successfully deleted`);
              setRedirect(true);
            } else {
              alert(`Error: ${item.BookName} could not be deleted`);
            }
          } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
          }
        };
      
        
      
    
    useEffect(() => {
        if (redirect) {
          permanentRedirect("/admin/booklist");
        }
      }, [redirect]);
    return(<>
        <div className="text-3xl text-center">Hi Admin</div>
        <table>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Book Picture</th>
                            <th>Book Name</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            {/*<th>Cart</th>*/}
                        </tr>
                    </thead>
                    <tbody>
                        
                        {books.map((item,index)=>(
            <tr key={index}>
                <td>{index+1}</td>
                <td><Image src="https://source.unsplash.com/1600x800/?bookcover" width={100} height={100} alt="Book Image"/></td>
                <td>{item["BookName"]}</td>
                <td>{item["Author"]}</td>
                <td>{item["Price"]}</td>
                <td><button onClick={()=>{editbook(item)}}>Edit</button></td>
                <td><button onClick={()=>{deletebook(item)}}>Delete</button></td>
            </tr>
        ))}
                      
                             
                    </tbody>
                </table>
            

            <style jsx>{`
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }
                th {
                    background-color: #f2f2f2;
                }
                img {
                    max-width: 100px;
                    max-height: 100px;
                }
            `}</style>
        </>
    );
}