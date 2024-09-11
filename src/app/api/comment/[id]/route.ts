import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET (req : Request, { params : { id }  } : { params : { id: string }}) {
    try {
        const commentsOfPost = await db.comment.findMany({
            where: {
                postId: id
            },
            include: {
                user: true
            }
        })
        return NextResponse.json(
            {
                data: commentsOfPost
            },
            {
                status: 200
            }
        )
    } catch (err) {
        return NextResponse.json(
            {
                message: err
            },
            {
                status: 404
            }
    )
    }
}

