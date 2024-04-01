import { redirect } from 'next/navigation'
'use server'
export default async function Logout(){
    redirect('/');
        
}