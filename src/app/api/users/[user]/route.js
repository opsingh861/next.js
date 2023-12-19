import { NextResponse } from "next/server";
import { UserData } from "@/util/db";
export async function GET(req, res) {
    let user = UserData.filter(user => user.id == res.params.user)
    user = user[0];
    console.log(user)

    return NextResponse.json(user.length==0?{error:"User not found",success:false}:user,{success:true}, { status: 200 })
}

export async function PUT(req, res) {
    let payload = await req.json();
    payload.id = res.params.user;
    console.log(payload)
    if(!payload.id || !payload.name || !payload.age) return NextResponse.json({error:"given data are not valid",success:false}, { status: 404 })
    return NextResponse.json({success:true}, { status: 200 })
}   

export async function DELETE(req, res) {
    let user = res.params.user;
    console.log(user)
    if(!user) return NextResponse.json({error:"given data are not valid",success:false}, { status: 404 })
    return NextResponse.json({message:"Deleted successfully"}, { status: 200 })
}