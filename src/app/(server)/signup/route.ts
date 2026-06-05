
import prisma from "../../../../lib/prisma";
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'






export async function POST(request: Request){
    const {fname, lname, email, password} = await request.json();
    // if user exist 
    const isUser = await prisma.signup.findUnique({
  where: { email: email }
});
if(isUser?.email){
    return  NextResponse.json({ message: 'User already exist' }, { status: 409 })
}
else{

    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.signup.create({
        data:{
            firstname:fname,
            lastname: lname,
            email:email,
            password: hashedPassword    
        }
    })   
    return  NextResponse.json({ message: 'new user added' }, { status: 201 })
}
}