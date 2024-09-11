import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function PUT(req: Request, { params : { id } } : { params: { id: string } }) {
    try {
        const { isLiked } = await req.json()
        if(isLiked === false) {
            await db.post.update({
                where: {
                    id: id
                }, 
                data: {
                    isLiked: true,
                    totalLike: { increment: 1 }
                }
            })
        } else {
            await db.post.update({
                where: {
                    id: id
                }, 
                data: {
                    isLiked: false,
                    totalLike: { decrement: 1 }
                }
            })
        }
        return NextResponse.json(
        {
            data: !isLiked
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