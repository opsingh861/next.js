import { NextResponse } from "next/server";

export async function GET(req,res)
{
    console.log(res.params.student)
    const student = res.params.student
    // return new Response("Hello World");
    return NextResponse.json({result:student}, {status: 200})
}