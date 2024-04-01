/*'use server'
 
import { signIn } from '@/auth'
 
export async function authenticate(_currentState, formData) {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}*/
'use server'
import { redirect } from 'next/navigation'
import { account } from './data/data'
import connectDB from './model/connectdb'
export default async function  login(data){
  const username=data.get("username")

  const password=data.get("password")

  /*if (account.find(user=>user.username===username && user.password===password)){
    redirect("/")}
  else{
     redirect("/")
  }*/
   
}