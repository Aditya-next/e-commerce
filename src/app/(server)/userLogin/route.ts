import { createSession } from "@/app/lib/session";
import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";
import bycrpt from "bcrypt";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  // if user exist
  const user = await prisma.signup.findUnique({
    where: { email: email },
  });
  if (user) {
    const result = await bycrpt.compare(password, user.password);
    if (result) {
      // if user is valid then create session
      await createSession(user.id);
      return NextResponse.json({message : "logged in" } , {status : 200})
    //  return Response.json({ "msg": "Valid user" });
    } else {
    return NextResponse.json(
      {message : "wrong credentials"},
      { status: 401 },
    );
    }
  } else {
    return NextResponse.json(
      {message : "user not found"},
      { status: 404 },
    );
  }
}
