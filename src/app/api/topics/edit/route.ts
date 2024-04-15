
import { connectMongoDB } from "@/lib/mongoDB";
import { NextRequest, NextResponse } from "next/server";

import Topic from "@/models/topicSchema";

connectMongoDB()

export async function PATCH(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { content, title, id } = reqBody;

        const topic = await Topic.findById(id);

        if (!topic) {
            return NextResponse.json(
                { message: "Topic not found" },
                { status: 404 }
            );
        }
        topic.content = content;
        topic.title = title;

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