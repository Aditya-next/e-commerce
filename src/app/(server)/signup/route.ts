// import { Prisma, PrismaClient } from "../../../../generated/prisma";
import prisma from "../../../../lib/prisma";






export async function POST(request: Request){
        // const prisma = new PrismaClient();

    const {fname, lname, email, password} = await request.json();
    const user = await prisma.signup.create({
        data:{
            firstname:fname,
            lastname: lname,
            email:email,
            password: password
        
            
            
        }
    }
    )
    console.log("form data", fname, lname, email, password);    
    console.log('Congrates this route is working');
    return Response.json({ user })
}