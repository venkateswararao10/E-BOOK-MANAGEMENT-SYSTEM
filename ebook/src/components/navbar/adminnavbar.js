

'use client'
import Link from "next/link";

import { permanentRedirect } from 'next/navigation'

import { useState, useEffect } from "react";
export default function AdminNavbar() {
  const [redirect, setRedirect] = useState(false);
  const Signout=async (e)=>{
    e.preventDefault()
    try {
        
      const response = await fetch('/api/adminlogout', { method: 'GET' });
  
      if (response.ok) {
        alert("Admin successfully Logout");
        setRedirect(true);
        
      } else {
        alert("Error: Admin could not be Signout");
      }
    } catch(error) {
      alert("An error occurred. Please try again later.");
      console.error("Error:", error);
      
    }
   
  };
  useEffect(() => {
    if (redirect) {
        permanentRedirect("/")
    }
  }, [redirect]);
  
  return (
  <>
    <nav className=" bg-white/30">
      <div className="relative flex justify-center items-center">
        {/*<Link href="/admin" className="text-3xl p-5 m-5 transform hover:scale-110 transition-transform duration-300">Home
        </Link>*/}
        <Link href="/admin/booklist" className="text-3xl p-5 m-5 transform hover:scale-110 transition-transform duration-300">Home
        </Link>
        <Link href="/admin/addbook" className="text-3xl p-5 m-5 transform hover:scale-110 transition-transform duration-300">Add Book
        </Link>
        <Link href="/admin/userbuylist" className="text-3xl p-5 m-5 transform hover:scale-110 transition-transform duration-300">User Buy List
        </Link>
        <button onClick={(e)=>Signout(e)} className="text-3xl p-5 m-5 transform hover:scale-110 transition-transform duration-300">Logout
        </button>
      </div>
    </nav>
    
    </>
  );
}
