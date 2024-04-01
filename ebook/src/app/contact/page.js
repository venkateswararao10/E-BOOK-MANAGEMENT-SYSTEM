'use client'
import Navbar from '@/components/navbar/navbar';
//import { motion } from 'framer-motion';
/*
const ContactPage = () => {
  return (
    <div className="relative overflow-hidden h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
          initial={{ rotate: -6, skewY: -6 }}
          animate={{ rotate: 0, skewY: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.div
          className="bg-white bg-opacity-90 rounded-lg shadow-md p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <div className="contact-info">
            <p><strong>Email:</strong> info@ebookmanagement.com</p>
            <p><strong>Phone:</strong> 123-456-7890</p>
            <p><strong>Address:</strong> 123 Main Street, Cityville, Country</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;*/
import { useEffect } from 'react';

const ContactPage = () => {
  useEffect(() => {
    const tilt = document.querySelector('.tilt');

    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const moveX = (clientX - centerX) / 5;
      const moveY = (clientY - centerY) / 5;

      tilt.style.transform = `rotateX(${moveY}deg) rotateY(${moveX}deg)`;
    });
  }, []);

  return (
    <>
    <Navbar></Navbar>
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="relative w-96 h-72 bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 transform-gpu -rotate-12 tilt">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 opacity-75" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center px-8">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <div className="text-left">
            <p><strong>Email:</strong> info@ebookmanagement.com</p>
            <p><strong>Phone:</strong> 123-456-7890</p>
            <p><strong>Address:</strong> 123 Main Street, Cityville, Country</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;

