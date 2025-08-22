import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server";


export const middleware=async(req)=>{
 const token= await getToken({req});
 const isTokenOk= Boolean(token);
 if(token){
    console.log("middleware",token)}
 
 if(!isTokenOk){
    return NextResponse.redirect(new URL('/login/page.js'),req.url)
 }
 return NextResponse.next();
}