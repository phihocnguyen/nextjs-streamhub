import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST (req: Request) {
    try {
        const { userId, postId, content } = await req.json()
        const result = await db.comment.create({
            data: {
                userId: userId,
                postId: postId,
                content: content
            }
        })
        return NextResponse.json(
            {
                message: 'Comment created succesfully',
                data: result
            },
            {
                status: 201
            }
        )
    } catch (err) {
        return NextResponse.json(
            {
                message: err
            },
            {
                status: 500
            }
        )
    }
}