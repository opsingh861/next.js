import { db } from '@/lib/db'
import { Product } from '@/lib/model/product';
import mongoose from 'mongoose'
import { NextResponse } from 'next/server'

export async function GET(req, res) {
    try {
        await mongoose.connect(db);
        console.log("Connected to database");
        const products = await Product.find();
        console.log(products);

    }
    catch (err) {
        console.log(err);
    }

    return NextResponse.json({ result: 'Hello World' }, { status: 200 })
}

export async function POST(req, res) {
    const payload = await req.json();
    console.log(payload);
    if (!payload.name || !payload.price || !payload.company || !payload.color || !payload.category) {
        return NextResponse.json({ result: 'name, price, company, color and category are required', success: false }, { status: 400 })
    }
    await mongoose.connect(db);
    console.log("Connected to database");
    const product = new Product({
        name: payload.name,
        price: payload.price,
        company: payload.company,
        color: payload.color,
        category: payload.category,
    });
    await product.save();
    return NextResponse.json({ result: 'added successfully' }, { status: 200 })
}