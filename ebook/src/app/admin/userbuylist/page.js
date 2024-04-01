// components/BookTable.js

import React from 'react';
import { books } from '@/lib/data/book';
import { book_users } from '@/lib/data/book-user';
import Image from 'next/image';
const BookTable = () => {
    return (
        <table className="w-full border-collapse border border-gray-300">
            <thead>
                <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2">S.No.</th>
                    <th className="border border-gray-300 p-2">User Name</th>
                    <th className="border border-gray-300 p-2">Book Picture</th>
                    <th className="border border-gray-300 p-2">Book Name</th>
                    <th className="border border-gray-300 p-2">Author</th>
                    <th className="border border-gray-300 p-2">Price</th>
                </tr>
            </thead>
            <tbody>
            
            {book_users.flatMap((user,index1) => 
  
  user.books.map((item,index) => (
  <tr key={index}>
                <td>{`${index1}${index+1}`}</td>
                <td>{user.username}</td>
                <td><Image src="https://source.unsplash.com/1600x800/?bookcover" width={100} height={100} alt="Book Image"/></td>
                <td>{item["BookName"]}</td>
                <td>{item["Author"]}</td>
                <td>{item["Price"]}</td>
                </tr>
   
  
)))}
                       
                      
                              {/* Add more rows for additional books */}
                    </tbody>
        </table>
    );
};

export default BookTable;
