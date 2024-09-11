import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const allNonFollowers = await db.user.findMany()
        return NextResponse.json(
            {
                data: allNonFollowers,
                status: 200,
                message: 'succesfully'
            }
        )
    } catch (err) {
        return NextResponse.json(
            {
                error: 'Error ' + err,
                status: 404
            }
        )
    }
}