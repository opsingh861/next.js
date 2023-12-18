import { NextResponse } from "next/server";
import { UserData } from "@/util/db";
export async function GET() {
    const users = UserData;
    return NextResponse.json(users, { status: 200 })
}