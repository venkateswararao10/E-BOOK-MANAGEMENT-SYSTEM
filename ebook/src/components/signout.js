'use client'
import React from 'react'
import { permanentRedirect } from 'next/navigation'

import { useState, useEffect } from "react";
async function Signout() {
    
    const [redirect, setRedirect] = useState(false);
    
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
      useEffect(() => {
        if (redirect) {
            permanentRedirect("/")
        }
      }, [redirect]);
    };

  


export default Signout
