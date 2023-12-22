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

export async function DELETE(req, res) {
    const productID = res.params.productID;
    const filter = { _id: productID };
    await mongoose.connect(db);
    const data = await Product.deleteOne(filter);
    if (data.deletedCount == 0)
        return NextResponse.json({ result: "Product not found", success: false }, { status: 200 })
    else
        return NextResponse.json({ result: data, success: true }, { status: 200 })
}