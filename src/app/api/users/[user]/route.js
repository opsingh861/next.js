import { NextResponse } from "next/server";
import { UserData } from "@/util/db";
export async function GET(req, res) {
    console.log(res.params.user)
    const user = UserData.filter(user => user.id == res.params.user)

    return NextResponse.json(user.length==0?{error:"User not found",success:false}:{user,success:true}, { status: 200 })
}