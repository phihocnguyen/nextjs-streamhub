import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET( req: Request ) {
    try {
        const allStories = await db.story.findMany()
        return NextResponse.json(
            {
                data: allStories,
                message: 'Succesfully',
                status: 200
            }
        )
    } catch (err) {
        return NextResponse.json(
            {
                message: 'Error ' + err,
                status: 500
            }
    )
    }
}

export async function POST( req: Request ) {
    try {
        const { userId, content } = await req.json()
        const newStory = await db.story.create({
            data: {
                userId,
                content
            }
        })
        return NextResponse.json(
            {
                data: newStory,
                message: 'succesfully',
                status: 201
            }
        )
    }
    catch(err) {
        return NextResponse.json(
            {
                message: 'Error: ' + err
            },
            {
                status: 500
            }
        )
    }

}