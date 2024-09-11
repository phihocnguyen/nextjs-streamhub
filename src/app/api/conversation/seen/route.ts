import { db } from "@/lib/db"
import { NextResponse } from "next/server"
import { auth } from "../../../../../auth"

export async function POST(req : Request, { params } : { params : { conversationID: string } } ){
    try {
        const session = await auth()
        const currentUser = session?.user
        const { conversationID } = params 
        const existingConversation = await db.conversation.findUnique({
            where: {
                id: conversationID
            },
            include: {
                messages: {
                    include: {
                        seen: true
                    }
                },
                users: true
            }
        })

        const lastMessage = existingConversation?.messages[existingConversation?.messages.length - 1]
        if (!lastMessage){
            return NextResponse.json(existingConversation)
        }
        const updatedMessage = await db.message.update(
            {
                where: {
                    id: lastMessage.id
                },
                include: {
                    sender: true,
                    seen: true 
                },
                data: {
                    seen: {
                        connect: {
                            id: currentUser?.id 
                        }
                    }
                }
            }
        )
        return NextResponse.json(updatedMessage)
    } catch (err) {
        console.log(err)
        return NextResponse.json('Internal error', { status: 500 })
    }
}