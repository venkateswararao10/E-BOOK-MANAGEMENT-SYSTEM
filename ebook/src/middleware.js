import { NextResponse } from "next/server";
import { session } from "./lib/data/datasession";
export function middleware(req){
    console.log(req.url)
    
    if (session.admin===false){
    return NextResponse.redirect(new URL("/loginadmin",req.url))}
    
    }
    
    export const config={
        matcher:'/admin/:path*',
    }