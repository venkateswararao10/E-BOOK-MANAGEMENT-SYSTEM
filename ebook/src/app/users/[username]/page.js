'use client'
import BookCard from '@/components/bookcard'; // Assuming BookCard component is in a separate file
import { book_users } from '@/lib/data/book-user';
import Image from 'next/image';
const BookList = ({params}) => {
  
  console.log("hlo",params.username);
  if (book_users.findIndex(user => user.username === (params.username))==-1){
    return (
      <>
      <div> HLO {params.username}</div>
      <div>No books are boughts  and please check out book list</div>
      </>
    );
  }
  else{
  if (book_users.findIndex(user => user.username === (params.username))!==-1){
  const book=book_users.find(user => user.username === (params.username));
  console.log("hi",book);
  const bookData=book.books;
  console.log(bookData)
  bookData.map((book, index) => (console.log(book)))
  const handleDownload = (BookName,Author) => {
    // Implement download functionality here
    // For example, you could trigger a file download or navigate to a download link
    alert(`Downloading ${BookName} by ${Author}`);
};
  return (
    <>
<div className=' text-5xl b-5 m-5 text-center'>hi {params.username}</div>
<div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bookData.map((book) => (
          <div key={book.SNo} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <Image className="w-full" src="https://source.unsplash.com/1600x800/?bookcover" width={100} height={100} alt="Book Image"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{book.BookName}</div>
                <p className="text-gray-700 text-base">{book.Author}</p>
            </div>
            <div className="px-6 py-4">
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => handleDownload(book.BookName, book.Author)}>Download</button>
            </div>
            
          </div>
        ))}
      </div>
      </div>
    </>
  );} }
  
};

export default BookList;
