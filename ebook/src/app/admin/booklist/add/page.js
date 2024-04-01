'use client'
import { useState,useEffect } from 'react';
import {permanentRedirect} from 'next/navigation';
export default function AddBook() {
    const [redirect, setRedirect] = useState(false);
    const [formData, setFormData] = useState({
        
        Bookname: '',
        author: '',
        price: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Here you can handle form submission, for example, sending data to a backend API
        console.log(formData);
        try {
            const response = await fetch("/api/register", {
              method: "POST",
              body: JSON.stringify(formData),
            });
            if (response.ok) {
              alert("User successfully added");
              setRedirect(true);
            } else {
              alert("Error: User could not be added");
            }
          } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
          }
        };
      
        
      
        useEffect(() => {
            if (redirect) {
              permanentRedirect("/login");
            }
          }, [redirect]);

    return (
        <div className="container mx-auto max-w-md mt-20">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl font-bold mb-6 text-center">Add New Book</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Book Name:</label>
                        <input
                            type="text"
                            id="title"
                            name="Bookname"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter book name"
                            required
                            className="input-field"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">Author:</label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            placeholder="Enter author"
                            required
                            className="input-field"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="Enter price"
                            required
                            className="input-field"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Add Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
