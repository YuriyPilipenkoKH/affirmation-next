import { connectMongoDB,  } from "@/lib/mongoDB";
import Topic from "@/models/topicSchema";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req:NextRequest,  {params}: {params: {id: string | null}}) {
    try {
        await connectMongoDB()
        const {id:userId} = params
        // console.log('-ID-',userId)
        const topics = await Topic.find({userId})

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