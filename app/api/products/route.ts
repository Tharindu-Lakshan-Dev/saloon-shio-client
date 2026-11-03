import { NextRequest, NextResponse } from "next/server";

 export async function GET(req: NextRequest) {
    const name= req.nextUrl.searchParams.get("name");
    const message = "Good morning "+name;
  console.log(message);  
  return NextResponse.json({
    message:"Successfully received the data to ",
  });
}