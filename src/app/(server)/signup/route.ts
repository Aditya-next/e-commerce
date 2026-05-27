
import prisma from "../../../../lib/prisma";
import bcrypt from 'bcrypt'






export async function POST(request: Request){
    const {fname, lname, email, password} = await request.json();
    // if user exist 
    const isUser = await prisma.signup.findUnique({
  where: { email: email }
});
if(isUser?.email){
    return Response.json({"msg" : "user is already register"});
}
else{

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const user = await prisma.signup.create({
        data:{
            firstname:fname,
            lastname: lname,
            email:email,
            password: hashedPassword    
        }
    })   
    return Response.json({ "msg": "working fine" })
}
}