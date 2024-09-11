import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params: { id } } : { params : { id: string } }) {
    try {
        const story = await db.story.findFirst({
            where: {
                userId: id
            }
        })
        return NextResponse.json(
            {
                data: story,
                status: 200
            }
        )
    } catch (err) {
        return NextResponse.json(
            {
                message: 'Error ' + err
            },
            {
                status: 500
            }
        )
    }
}