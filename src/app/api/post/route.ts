import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function POST(req: Request) {
    const {content, imagePath, authorId, date} = await req.json()
        
    const data = await db.post.create({
        data: {
            content,
            image_path: imagePath,
            authorId,
            date,
            isLiked: false
        }
    })

    return NextResponse.json(
        {
            data,
            message: "Post created succesfully",
        },
        {
            status: 200
        }
    )
}

export async function GET() {
    try {
        const result = await db.post.findMany({
            orderBy: [
                {
                    date: 'desc'
                }
            ]
        })
        return NextResponse.json(
        {
            data: result
        },
        {
            status: 200
        }
    )
    } catch (err) {
        return NextResponse.json(
        {
            message: "Cannot find any data"
        },
        {
            status: 404
        }
    )
    }
}