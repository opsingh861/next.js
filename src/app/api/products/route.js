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

    return NextResponse.json({ result: 'Hello World' }, { status: 200 })
}