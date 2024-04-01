/*import React from 'react';

const PaymentPage = ({params}) => {
    console.log(params)
    const handlePayment = () => {
        const confirmPayment = window.confirm("Are you sure you want to proceed with the payment?");
        if (confirmPayment) {
            window.alert("Payment successful!");
            // You can add further logic here, such as redirecting to a success page or updating the UI
        } else {
            window.alert("Payment cancelled.");
        }
    };

    return (
        <div>
            <h1>Payment Page</h1>
            <button onClick={handlePayment}>Proceed with Payment</button>
        </div>
    );
};

export default PaymentPage;*/
'use client'
import { permanentRedirect } from 'next/navigation';
//import PaymentCard from '@/components/paymentcard';
import { redirect,useRouter } from 'next/navigation';
import { books } from '@/lib/data/book';
import { book_users } from "@/lib/data/book-user";
import { account } from "@/lib/data/data";
/*export default function Allroutes({params}){
    
    console.log("hlo",params);
    const book=books.find((book)=>(book.SNo===params.bookitem[0]))
    console.log(book);
    
        const cardNumber = '1234 5678 9012 3456';
        const cardHolder = 'John Doe';
        const expiryDate = '12/24';
    return (

        <div className="flex justify-center items-center h-screen">
        <PaymentCard cardNumber={cardNumber} cardHolder={cardHolder} expiryDate={expiryDate} />
      </div>
    
    );
}*/
// pages/checkout.js


// components/PaymentCard.js

// components/PaymentCard.js

import { useState } from 'react';
import Image from 'next/image';

export default function PaymentCard({params})  {
    const router=useRouter();
    console.log("hlo",params);
    const book=books.find((book)=>(book.SNo===params.bookitem[0]))
    console.log(book);
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'cardNumber':
        setCardNumber(value);
        break;
      case 'cardHolder':
        setCardHolder(value);
        break;
      case 'expiryDate':
        setExpiryDate(value);
        break;
      default:
        break;
    }
  };

  const handlePayment = async () => {
    // Implement payment processing logic here
    
    alert('Payment processed!');
    console.log("hlo",params);
    const username=params.username
    const SNo=params.bookitem[0]
    const book=books.find((book)=>(book.SNo===params.bookitem[0]))
    console.log(book);
    
    if ((account.findIndex(user=>user.username===username))!==-1){
        if ((book_users.findIndex(user => ((user.username===username)&&(user.books.find(book => book.SNo === SNo)))))!==-1){alert("already book bought by u");}
        else{
 const newuser = {
     username:username,
     books:[book]
 };
 
 console.log(newuser);
 
 

 let user=await fetch("/api/addbook",
     {method:"POST",
   body:JSON.stringify(newuser) }
     )
     if(user.ok){
         alert(" payment successfully ");
         router.push(`/users/${username}`)
         }
       else{
           alert("error")
       }
}    }
  };

  return (
    <div className=''>
    <div className="bg-white rounded-lg shadow-md p-20 w-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Payment Card</h2>
        <Image src="https://source.unsplash.com/600x400/?mastercard" alt="Credit Card Icon" className="w-15 h-12" />
      </div>
      <div className="text-gray-700 mb-4 -4">
        <input
          type="text"
          name="cardNumber"
          value={cardNumber}
          onChange={handleInputChange}
          placeholder="Card Number"
          required
          className="input-field mb-4"
          
        />
        <input
          type="text"
          name="cardHolder"
          value={cardHolder}
          onChange={handleInputChange}
          placeholder="Card Holder"
          required
          className="input-field mb-4"
          
        />
        <input
          type="text"
          name="expiryDate"
          value={expiryDate}
          onChange={handleInputChange}
          placeholder="Expiry Date"
          className="input-field mb-4"
          required
        />
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
    </div>
  );
};


