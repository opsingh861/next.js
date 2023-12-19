import { NextResponse } from "next/server";
import { UserData } from "@/util/db";
export async function GET() {
    const users = UserData;
    return NextResponse.json(users, { status: 200 })
}

export async function POST(req, res) {
    let payload = await req.json();
    console.log(payload);
    
    console.log(payload);
    if(!payload.name || !payload.age) {
        return NextResponse.json({result:"name and age are required",success:false}, { status: 400})
    }
    return NextResponse.json({result:"new user added",success:true}, { status: 200})
}