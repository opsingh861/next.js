import { db } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function PUT(req, res) {
    const payload = await req.json();
    const productID = res.params.productID;
    const filter = { _id: productID };
    await mongoose.connect(db);
    console.log("Connected to database");
    const data = await Product.findOneAndUpdate(filter, payload);
    return NextResponse.json({ result: data, success: true }, { status: 200 })
}