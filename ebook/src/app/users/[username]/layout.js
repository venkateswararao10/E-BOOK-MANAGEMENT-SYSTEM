

import UserNavbar from "@/components/navbar/usernavbar";




export default function Layout({ children,params }) {
  console.log(params)
  return (
      
      <div className="bg-gradient-to-r from-green-400 to-blue-500">
      
      <UserNavbar props={params} />{children}
      </div>
      
    
  );
}
