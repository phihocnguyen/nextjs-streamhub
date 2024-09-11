import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function PUT(req: Request, { params : { id } } : { params: { id: string } }) {
    try {
        const isLiked = await req.json()
        const result = await db.post.update({
            where: {
                id: id
            }, 
            data: {
                isLiked: !isLiked
            }
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