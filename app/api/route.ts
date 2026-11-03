import { NextRequest, NextResponse } from "next/server";

export  function GET(){
  console.log("Get request received");   
  return NextResponse.json({
    message:"Successfully received the data to direct",
   }); 
}

export  async function POST(req: NextRequest){
    const body = await req.json();
    const message = "Good morning "+body.student;
  console.log(message);  
  return NextResponse.json({
    message:"Successfully received the data",
   });  
}
