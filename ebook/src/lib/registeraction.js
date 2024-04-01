'use server'
import { redirect } from 'next/navigation'
import connectDB from './model/connectdb'
import User from './model/user'
export default async function  RegisterFormData(data){
  console.log("hi")
  console.log(data);
  try{
  await connectDB();
  const user = new User(data);  
  console.log(user)
}
  catch(e){
  console.log("error")
  }
  //redirect("/login")
}