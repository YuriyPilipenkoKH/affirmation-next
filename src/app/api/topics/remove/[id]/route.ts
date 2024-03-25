import { connectMongoDB } from "@/lib/mongoDB";
import Topic from "@/models/topicSchema";
import { NextRequest, NextResponse } from "next/server";


connectMongoDB()

export async function DELETE(req:NextRequest,  {params}: {params: {id: string}} ) {
    try {
        const {id} = params
        const response = await Topic.findByIdAndDelete(id)
 
        return NextResponse.json({
            message: `Collection  deleted`,
            success: true,
        })
    } 
    catch (error) {
        return NextResponse.json(
            { message: "Error occured while deleting"},
             {status: 500})
         }
}