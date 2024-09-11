import { db } from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, { params } : { params : { conversationID: string } } ) {
    try {
        const {conversationID} = params
        const existingConversation = await db.conversation.findUnique({
            where: {
                id: conversationID
            },
            include: {
                users: true,
                messages: true
            }
        })
        return NextResponse.json(existingConversation)

        
    } catch (err) {
        console.log(err)
        return NextResponse.json('Internal error', { status: 500 })
    }
}