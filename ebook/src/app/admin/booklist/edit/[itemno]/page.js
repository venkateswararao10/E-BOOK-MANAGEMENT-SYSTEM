

'use client'
import { useState,useEffect  } from 'react';
import {redirect,permanentRedirect} from 'next/navigation';
export default  function EditBook({params}) {
    const [redirect, setRedirect] = useState(false);
    const [formData, setFormData] = useState({
        SNo: "",
        BookName: "",
        Author: "",
        Price: "",
    });
    useEffect(() => {
        const getApiItem = async () => {
            try {
                const response = await fetch(`/api/book/${params.itemno}`, { method: 'GET' });
                
                const data = await response.json();
                console.log(data)
                // Update formData state with fetched item data
                setFormData({
                    SNo: data.SNo,
                    BookName: data.BookName,
                    Author: data.Author,
                    Price: data.Price,
                });
            } catch (error) {
                console.error('Error fetching item:', error);
            }
        };
        getApiItem();
    },[params.itemno]); // Add params as a dependency to fetch data when it changes
    
    
    
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        const obj={[name]:value}
        console.log('venky',obj)
        setFormData((f) => ({
            ...f,
            [name]: e.target.value,
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Here you can handle form submission, for example, sending data to a backend API
        
        console.log(formData);

        try {
            const response = await fetch(`/api/book/${parseInt(params.itemno)}`, {
              method: "PUT",
              body: JSON.stringify(formData),
            });
            if (response.ok) {
              alert("Book successfully Updated");
              setRedirect(true);
            } else {
              alert("Error: Book could not be Updated");
            }
          } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
          }
        };
    
        useEffect(() => {
            if (redirect) {
                permanentRedirect("/admin/booklist");
            }
          }, [redirect]);
    return (
        <div className="container mx-auto max-w-md mt-20">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl font-bold mb-6 text-center">Edit Book</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Book Name:</label>
                        <input
                            type="text"
                            id="title"
                            name="BookName"
                            
                            onChange={handleChange}
                            value={formData.BookName}
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
                            name="Author"
                            value={formData.Author}
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
                            name="Price"
                            value={formData.Price}
                            onChange={handleChange}
                            placeholder="Enter price"
                            required
                            className="input-field"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type='submit'
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Update Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
