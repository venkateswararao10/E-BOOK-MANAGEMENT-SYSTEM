/*'use client'
 
import { authenticate } from '@/lib/actions'
import { useFormState, useFormStatus } from 'react-dom'
 
export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)
 
  return (
    <form action={dispatch}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <div>{errorMessage && <p>{errorMessage}</p>}</div>
      <LoginButton />
    </form>
  )
}
 
function LoginButton() {
  const { pending } = useFormStatus()
 
  return (
    <button aria-disabled={pending} type="submit">
      Login
    </button>
  )
}*/
'use client'
/*
import { motion } from 'framer-motion';

import { useState,useEffect } from "react";
import FormData from "@/lib/actions";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
export default function Login(){
  const router = useRouter();
  const [redirect,setredirect]=useState(false);
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    async function handleSubmit(e){
      e.preventDefault();
            console.log(username);
            console.log(password);
            let user=await fetch("/api/login",
            {method:"POST",
          body:JSON.stringify({username,password}) }
            )
            
              if(user.ok){
                alert("user successfully login");
                setredirect(true)}
              else{
                  alert("error")
              }
              
            
    }*/
    /*if (msg === undefined) {
        msg=""
    }*/
    /*
    useEffect(()=>{
   if (redirect===true){
    router.push(`/users/${username}`);
   }
    })
    const errorMessage="";
    
    return(<div className="relative overflow-hidden h-screen">
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
        initial={{ rotate: -6, skewY: -6 }}
        animate={{ rotate: 0, skewY: 0 }}
        transition={{ duration: 0.8 }}
      />
    </div>
    <div className="container mx-auto px-4 py-8 relative z-10 flex justify-center items-center h-full">
      <motion.div
        className="bg-white bg-opacity-90 rounded-lg shadow-md p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">Login</button>
        </form>
      </motion.div>
    </div>
  </div>
);
}*/



/*import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    // Upon successful submission:
    setSubmitted(true);
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>Success Message: Your form has been submitted successfully!</div>
      )}
    </div>
  );
};

export default ContactForm;*/



import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar/navbar";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(username);
    console.log(password);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (response.ok===true ) {
        alert("User successfully logged in");
        router.push(`/users/${username}`);
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  }

  return (
    <>
    <Navbar></Navbar>
    <div className="relative overflow-hidden h-screen bg-gradient-to-br from-purple-400 to-pink-600">
      <div className="container mx-auto px-4 py-8 relative z-10 flex justify-center items-center h-full">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
