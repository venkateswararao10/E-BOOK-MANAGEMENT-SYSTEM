'use client'
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
/*
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex it
      <motion.div
        className="absolute inset-0 z-0"
        style={{ 
          background: 'linear-gradient(45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)',
          backgroundSize: '400% 400%',
          animation: 'gradientAnimation 10s ease infinite'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <div className="relative z-10 text-center text-white">
        <motion.h1 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to E-Book Management
        </motion.h1>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Organize, store, and access your digital library with ease.
        </motion.p>
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-md transition-colors duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection; */

const HeroSection = () => {
  const router=useRouter();
   
  return (
    <>
    <Navbar></Navbar>
    <div className="hero-container">
      <div className="gradient-background"></div>
      <div className="hero-content">
        <h1 className="hero-heading">Welcome to E-Book Management</h1>
        <p>Organize, store, and access your digital library with ease.</p>
        
        <button onClick={()=>router.push('/about')}className="hero-button">Get Started</button>
      </div>

      <style jsx>{`
        .hero-container {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1000px;
        }

        .hero-content {
          position: relative;
          text-align: center;
          color: white;
          transform-style: preserve-3d;
        }

        .hero-heading {
          font-size: 5rem;
          margin-bottom: 2rem;
          transform: translateZ(100px);
          animation: rotateAnimation 10s linear infinite;
        }

        .hero-button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 1.5rem;
          border-radius: 5px;
          cursor: pointer;
          transform: translateZ(50px);
          animation: pulseAnimation 2s ease-in-out infinite;
        }

        @keyframes rotateAnimation {
          0% { transform: translateZ(100px) rotateY(0deg); }
          100% { transform: translateZ(100px) rotateY(360deg); }
        }

        @keyframes pulseAnimation {
          0% { transform: translateZ(50px) scale(1); }
          50% { transform: translateZ(50px) scale(1.2); }
          100% { transform: translateZ(50px) scale(1); }
        }

        .gradient-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
          background-size: 400% 400%;
          animation: gradientAnimation 10s ease infinite;
        }

        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
    </>
  );
};

export default HeroSection;

