
import Link from "next/link";
export default function  UserNavbar(props){
   // /users/[username]/listofbooks
   const username=props.props;
   console.log(username.username);
   //{}
 return(
   <nav className="bg-slate-200">
    <div className="relative flex  justify-center items-center">
      
       <Link href={`/users/${username.username}/`} className="text-3xl px-5 mx-5 py-4 my-3">Home</Link>
       <Link href={`/users/${username.username}/listofbooks`} className="text-3xl px-5 mx-5 py-4 my-3">BookLists</Link>
       

       <Link href="/" className="text-3xl px-5 mx-5 py-4 my-3">Logout</Link>
       
     </div>  
    
    </nav>
 );
}