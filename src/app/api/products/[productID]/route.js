import { db } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    const productID = res.params.productID;
    try {
        await mongoose.connect(db);
        var product = await Product.findById(productID);
    } catch (err) {
        console.log(err);
    }
    return NextResponse.json({ result: product }, { status: 200 });
}

export async function PUT(req, res) {
    const payload = await req.json();
    const productID = res.params.productID;
    const filter = { _id: productID };
    await mongoose.connect(db);
    const data = await Product.findOneAndUpdate(filter, payload);
    return NextResponse.json({ result: "Product details updated", success: true }, { status: 200 })
}