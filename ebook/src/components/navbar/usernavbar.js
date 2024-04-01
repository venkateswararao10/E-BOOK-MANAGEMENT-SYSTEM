
import Link from "next/link";
export default function  UserNavbar(props){
   // /users/[username]/listofbooks
   const username=props.props;
   console.log(username.username);
   //{}
 return(
   <nav>
    <div className="relative flex  justify-center items-center">
      
       <Link href={`/users/${username.username}/`} className="text-3xl p-5 m-5">home</Link>
       <Link href={`/users/${username.username}/listofbooks`} className="text-3xl p-5 m-5">BookLists</Link>
       

       <Link href="/" className="text-3xl p-5 m-5">logout</Link>
       
     </div>  
    
    </nav>
 );
}