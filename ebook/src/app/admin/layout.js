

import AdminNavbar from "@/components/navbar/adminnavbar";





export default function Layout({ children,params }) {
  console.log(params)
  return (
   
      <div className=" p-0 m-0 bg-gradient-to-br from-purple-500 to-blue-500 ">
      
      <AdminNavbar/>
      
      {children}
      </div>
    
  );
}
