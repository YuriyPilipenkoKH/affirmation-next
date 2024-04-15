import { connectMongoDB } from "@/lib/mongoDB";
import Topic from "@/models/topicSchema";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest) {
    try {
        const reqBody = await req.json()
        const {title , content,  userId} = reqBody
        console.log(reqBody)

        await connectMongoDB()
        const topic = await Topic.findOne({title})
        if(topic) {
            return NextResponse.json(
                {error: "Topik already exists"},
                {status: 500})
        }
       
      const newTopic =  await Topic.create({ 
        title, 
        content,  
        userId 
        });


        return NextResponse.json({
            message: `Topic created successfully`,
            success: true,
            newTopic
        })
    } 
    catch (error) {
        return NextResponse.json(
            { message: "Error occured while creating new"},
             {status: 500})
         }
}