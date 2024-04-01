
'use client'
/*
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="relative overflow-hidden h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <motion
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
          initial={{ rotate: -6, skewY: -6 }}
          animate={{ rotate: 0, skewY: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion
          className="bg-white bg-opacity-90 rounded-lg shadow-md p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="text-3xl font-bold mb-4">About Us - E-Book Management</h1>
          <p className="mb-4">
            Welcome to E-Book Management, where we offer a comprehensive solution for organizing, storing, and accessing your digital library of e-books. Our platform is designed to enhance your reading experience and simplify the management of your electronic book collection.
          </p>
          <p className="mb-4">
            Here are some key features of our service:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Organize Your Library</li>
            <li>Centralized Storage</li>
            <li>Multi-Device Access</li>
            <li>Recommendation Engine</li>
            <li>Reading Tools</li>
            <li>Late Submission Policy</li>
            <li>Privacy and Security</li>
          </ul>
          <p>
            Experience the convenience and flexibility of managing your e-book library with E-Book Management. Sign up today and take control of your digital reading experience like never before!
          </p>
        </motion>
      </div>
    </div>
  );
};

export default AboutPage;*/


import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar/navbar';

export default function EBookManagement() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
    <Navbar></Navbar>
    <div className="bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 min-h-screen flex justify-center items-center">
      

      <main className="text-white text-center">
        <div className={`animate__animated animate__fadeInUp animate__faster px-6 py-8 bg-black bg-opacity-50 rounded-lg ${isLoaded ? '' : 'hidden'}`}>
          <h1 className="text-4xl font-bold mb-4">Welcome to E-Book Management</h1>
          <p className="text-lg mb-8">Where we offer a comprehensive solution for organizing, storing, and accessing your digital library of e-books.</p>
          <div className="text-left mb-8">
            <h2 className="text-2xl font-semibold mb-2">Key Features:</h2>
            <ul>
              <li className="mb-2">Organize Your Library</li>
              <li className="mb-2">Centralized Storage</li>
              <li className="mb-2">Multi-Device Access</li>
              <li className="mb-2">Recommendation Engine</li>
              <li className="mb-2">Reading Tools</li>
              <li className="mb-2">Late Submission Policy</li>
              <li className="mb-2">Privacy and Security</li>
            </ul>
          </div>
        </div>
      </main>

      <style jsx>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

        .hidden {
          display: none;
        }
      `}</style>
    </div>
    </>
  );
}

