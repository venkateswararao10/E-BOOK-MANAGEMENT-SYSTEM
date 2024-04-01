// pages/booklist.js
import React from 'react'

function page() {
  return (
    <div>
      
    </div>
  )
}

export default page

/*'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { book_users } from '@/lib/data/book-user';

const BookList = ({params}) => {
  const [cartItems, setCartItems] = useState([]);
  console.log(params.username)
  const handleAddToCart = (book) => {
    setCartItems([...cartItems, book]);
  };

  return (
    <>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {book_users.map((user) => ( (user==params.username) &&
          user.books.map((book) => (
            <div key={book.SNo} className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
              <img className="w-full" src={`/${book.BookPicture}`} alt="Book Image"/>
              <div className="px-4 py-2">
                <h2 className="text-xl font-semibold text-gray-800">{book.BookName}</h2>
                <p className="text-sm text-gray-600">Author: {book.Author}</p>
                <p className="text-sm text-gray-600">Price: {book.Price}</p>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => handleAddToCart(book)}>Add to Cart</button>
              </div>
            </div>
          ))
        ))}
      </div>
      <div>
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.BookName} - {item.Author} - {item.Price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default BookList;*/
