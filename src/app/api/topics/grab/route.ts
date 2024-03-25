import { connectMongoDB, db, } from "@/lib/mongoDB";
import { NextRequest, NextResponse } from "next/server";


connectMongoDB()

export async function GET(request:NextRequest, response:NextResponse) {
    try {
      
        const topics = await db.collection("topics")
        .find()
        .toArray();
        // Assuming you have a collections collection in your MongoDB

        return NextResponse.json({
            message: `Topics found`,
            success: true,
            topics
        });
    } 
    catch (error) {
        return NextResponse.json(
            { message: "Topics not found"},
             {status: 500})
         }
}