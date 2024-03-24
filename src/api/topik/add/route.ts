
import { connectMongoDB } from "@/lib/mongoDB";
import Topik from "@/models/topikSchema";
import { NextRequest, NextResponse } from "next/server";


connectMongoDB()

export async function POST(req:NextRequest) {
    try {
        const reqBody = await req.json()
        const {title , content} = reqBody
        console.log(reqBody)

        // Topik exists
        const topik = await Topik.findOne({title})
        if(topik){
            return NextResponse.json(
               {error: "Topik already exists"},
               {status: 400})
        }
        const newTopik = new Topik({
            title,
            content,
           
        })
        const savedTopik  = await newTopik.save()
        console.log(savedTopik);


        return NextResponse.json({
            message: `Tpoik ${topik?.name} created successfully`,
            success: true,
            savedTopik
        })
    } 
    catch (error) {
        return NextResponse.json(
            { message: "Error occured while creating new"},
             {status: 500})
         }
}