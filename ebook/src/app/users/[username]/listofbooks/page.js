'use client'
import { books } from "@/lib/data/book";
import { book_users } from "@/lib/data/book-user";
import { account } from "@/lib/data/data";

import Image from 'next/image';
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
export default function Listofbooks({params}){
    const router = useRouter()
    const username=params.username
    const addbook= /*async*/(item)=>{

        if ((account.findIndex(user=>user.username===username))!==-1){
            if ((book_users.findIndex(user => ((user.username===username)&&(user.books.find(book => book.SNo === item.SNo)))))!==-1){alert("already book bought by u");}
            else{
                router.push(`/users/${username}/payment/${parseInt(item.SNo)}/`)
            }
    }}
    /*
        console.log(typeof(item.SNo))
        console.log(account.findIndex(user=>user.username===username));
        console.log(book_users.findIndex(user => user.books.find(book => book.SNo === item.SNo)));
        if ((account.findIndex(user=>user.username===username))!==-1){
               if ((book_users.findIndex(user => ((user.username===username)&&(user.books.find(book => book.SNo === item.SNo)))))!==-1){alert("already book bought by u");}
               else{
        const newuser = {
            username:username,
            books:[item]
        };
        
        console.log(newuser);
        
        

        let user=await fetch("/api/addbook",
            {method:"POST",
          body:JSON.stringify(newuser) }
            )
            if(user.ok){
                alert(" payment successfully ");
                setredirect(true)}
              else{
                  alert("error")
              }
    }    
     }


     
    }*/
    return(<>
        
        <table>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Book Picture</th>
                            <th>Book Name</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Action</th>
                            {/*<th>Cart</th>*/}
                        </tr>
                    </thead>
                    <tbody>
                        
                        {books.map((item,index)=>(
            <tr key={index}>
                <td>{item["SNo"]}</td>
                <td><Image src="https://source.unsplash.com/1600x800/?bookcover" width={100} height={100} alt="Book Image"/></td>
                <td>{item["BookName"]}</td>
                <td>{item["Author"]}</td>
                <td>{item["Price"]}</td>
                <td><button onClick={()=>{addbook(item)}}>Buy</button></td>
         {/*<td><Link href={`/users/${username}/payment/${parseInt(item.SNo)}/`}>{item["Action"]}</Link></td> */}
            </tr>
        ))}
                      
                              {/* Add more rows for additional books */}
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