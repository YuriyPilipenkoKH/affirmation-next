
import { connectMongoDB } from "@/lib/mongoDB";
import { NextRequest, NextResponse } from "next/server";

import Topic from "@/models/topicSchema";

connectMongoDB()

export async function PATCH(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { content, title, id } = reqBody;
        // console.log(reqBody)

        // Find the collection by ID
        const topic = await Topic.findById(id);
        // console.log(topic)

        if (!topic) {
            // If collection not found, return 404 response
            return NextResponse.json(
                { message: "Topic not found" },
                { status: 404 }
            );
        }

        // Update using the spread operator
        topic.content = content;
        topic.title = title;

        // Save the updated collection
       const updatedTopic = await topic.save();

        return NextResponse.json({
            message: `Topic edited successfully`,
            success: true,
            updatedTopic
        });
    } catch (error) {
        return NextResponse.json(
            { message: "Error occurred while editing topic" },
            { status: 500 }
        );
    }
}