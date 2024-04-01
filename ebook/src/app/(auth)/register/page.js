'use client'
import RegisterFormData from "@/lib/registeraction";
/*import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
export default function register(){
    const router = useRouter();
  const [redirect,setredirect]=useState(false);
    const[formdata,setformdata]=useState({
        username:"",fullname:"",email:"",password:"",
    })
    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(formdata)
       
        let user=await fetch("/api/register",
            {method:"POST",
          body:JSON.stringify(formdata) }
            )
            if(user.ok){
                alert("user successfully added");
                setredirect(true)}
              else{
                  alert("error")
              }
    }
    useEffect(()=>{
        if (redirect===true){
         router.push('/login');
        }
         },[redirect])
    return(
    
    <form onSubmit={handleSubmit}>
    <div className=" text-red-600 ">
       
            
            <label htmlFor="fullname">Full Name:</label><br/>
            <input type="text" id="fullname" name="fullname" value={formdata.fullname} onChange={(e)=>setformdata(f=>({...f,fullname:e.target.value}))} required/><br/>
            <label htmlFor="email">Email Address:</label><br/>
            <input type="email" id="email" name="email" value={formdata.email} onChange={(e)=>setformdata(f=>({...f,email:e.target.value}))} required/><br/>
            <label htmlFor="username">Username:</label><br/>
            <input type="text" id="username" name="username" value={formdata.username} onChange={(e)=>setformdata(f=>({...f,username:e.target.value}))} required/><br/>
            <label htmlFor="password">Password:</label><br/>
            <input type="password" id="password" name="password" value={formdata.password} onChange={(e)=>setformdata(f=>({...f,password:e.target.value}))} required/><br/>
            
        

        
        </div>
        <button>submit</button>
      </form>
      
      );
}*/
/*
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const [redirect, setRedirect] = useState(false);
  const [formdata, setFormData] = useState({
    username: '',
    fullname: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);

    let user = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(formdata),
    });
    if (user.ok) {
      alert('User successfully added');
      setRedirect(true);
    } else {
      alert('Error');
    }
  };

  useEffect(() => {
    if (redirect === true) {
      router.push('/login');
    }
  }, [redirect]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-600 via-blue-500 to-green-400">
      <motion.form
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 rounded-lg shadow-md p-8"
      >
        <div className="text-red-600">
          <label htmlFor="fullname">Full Name:</label>
          <br />
          <motion.input
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            type="text"
            id="fullname"
            name="fullname"
            value={formdata.fullname}
            onChange={(e) => setFormData((f) => ({ ...f, fullname: e.target.value }))}
            required
            className="mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <br />
          <label htmlFor="email">Email Address:</label>
          <br />
          <motion.input
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            type="email"
            id="email"
            name="email"
            value={formdata.email}
            onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
            required
            className="mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <br />
          <label htmlFor="username">Username:</label>
          <br />
          <motion.input
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            type="text"
            id="username"
            name="username"
            value={formdata.username}
            onChange={(e) => setFormData((f) => ({ ...f, username: e.target.value }))}
            required
            className="mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <motion.input
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            type="password"
            id="password"
            name="password"
            value={formdata.password}
            onChange={(e) => setFormData((f) => ({ ...f, password: e.target.value }))}
            required
            className="mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <motion.button
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </motion.button>
      </motion.form>
    </div>
  );
}*/


import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar/navbar";

export default function Register() {
  const router = useRouter();
  const [redirect, setRedirect] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      console.log('hi',response);
      
      if(response.ok===true) {
      
        alert("User successfully added");
        setRedirect(true);
      } else {
        alert("Error: Username already exist");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    if (redirect) {
      router.push("/login");
    }
  }, [redirect]);

  return (
    <>
    <Navbar></Navbar>
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-8 transform-gpu -rotate-0">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullname" className="block text-gray-700">
              Full Name:
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, fullname: e.target.value }))
              }
              required
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              required
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, username: e.target.value }))
              }
              required
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              required
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
