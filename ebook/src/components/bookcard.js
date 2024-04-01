import React from 'react';
import { book_users } from '@/lib/data/book-user';
import Image from 'next/image';
const BookCard = ({ book }) => {
    const { BookName, Author } = book;

    // Function to handle download button click
    const handleDownload = () => {
        // Implement download functionality here
        // For example, you could trigger a file download or navigate to a download link
        alert(`Downloading ${BookName} by ${Author}`);
    };

    return (
        <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <Image className="w-full" src="https://source.unsplash.com/1600x800/?bookcover" width={100} height={100} alt="Book Image"/>
        <div className="px-4 py-2">
            <h2 className="text-xl font-semibold text-gray-800">{BookName}</h2>
            <p className="text-sm text-gray-600">Author: {Author}</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleDownload}>Download</button>
        </div>
    </div>
    );
};

export default BookCard;
