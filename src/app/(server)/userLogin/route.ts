import { createSession } from "@/app/lib/session";
import prisma from "../../../../lib/prisma";
import bycrpt from "bcrypt";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  // if user exist
  console.log(email, password);
  const user = await prisma.signup.findUnique({
    where: { email: email },
  });
  if (user) {
    const result1 = await bycrpt.compare(password, user.password);
    if (result1) {
      console.log("valid user");
      // if user is valid then create session
      await createSession(user.id);
      redirect('/')
    //  return Response.json({ "msg": "Valid user" });
    } else {
      console.log("wrong credentialls");
     return Response.json({ msg: "Invalid credentials" });
    }
  } else {
    return Response.json({ msg: "user not found" });
  }
}
