/*
import Link from "next/link";
export default function  Navbar(){
 return(
   <nav>
    <div className="relative flex m-1 p-1 justify-center items-center">
    
       <Link href="/" className="text-3xl p-5 m-5">home</Link>
       <Link href="/about" className="text-3xl p-5 m-5">about</Link>
       <Link href="/contact" className="text-3xl p-5 m-5">contact</Link>
       <Link href="/login" className="text-3xl p-5 m-5">login</Link>
       <Link href="/register" className="text-3xl p-5 m-5">register</Link>
       
    </div>
    </nav>
 );
}

*/
// components/Navbar.js
/*
'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion
              className="flex-shrink-0 text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Logo
            </motion>
          </div>
          <div className="flex">
            <Link href="/">
              <motion
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Home
              </motion>
            </Link>
            <Link href="/about">
              <motion
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                About
              </motion>
            </Link>
            <Link href="/contact">
              <motion
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Contact
              </motion>
            </Link>
            <Link href="/login">
              <motion
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Login
              </motion>
            </Link>
            <Link href="/register">
              <motion
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Register
              </motion>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;*/



'use client'
import Link from "next/link";

export default function Navbar() {
  return (
   
    <nav className="backdrop-blur-sm bg-white/30">
      <div className="relative flex justify-center items-center">
        <Link href="/" className="text-3xl px-5 mx-5 my-4 transform hover:scale-110 transition-transform duration-300">Home
        </Link>
        <Link href="/about" className="text-3xl px-5 mx-5 my-4 py-3 transform hover:scale-110 transition-transform duration-300">About
        </Link>
        <Link href="/contact" className="text-3xl px-5 mx-5 my-4 py-3 transform hover:scale-110 transition-transform duration-300">Contact
        </Link>
        <Link href="/login" className="text-3xl px-5 mx-5 my-4 py-3 transform hover:scale-110 transition-transform duration-300">Login
        </Link>
        <Link href="/register" className="text-3xl px-5 mx-5 my-4 py-3 transform hover:scale-110 transition-transform duration-300">Register
        </Link>
      </div>
    </nav>
    
  
  
  );
}
