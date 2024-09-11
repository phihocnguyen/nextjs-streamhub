import { useCurrentUser } from "@/hooks/use-current-user"
import { db } from "@/lib/db"
import { NextResponse } from "next/server"
import { auth } from "../../../../auth"

export async function POST(req: Request) {
    try {

        const session = await auth()
        const currentUser = session?.user
        const body = await req.json()
        const { message, conversationID } = body

        if (!currentUser?.id) return NextResponse.json('Unauthorized', { status: 401 })
        
        const newMessage = await db.message.create({
            data: {
                body: message,
                Conversation: {
                    connect: {
                        id: conversationID
                    }
                },
                senderId: currentUser.id,
                seen: {
                    connect: {
                        id: currentUser.id
                    }
                }
            },
            include: {
                seen: true,
                sender: true 
            }
        })

        const updatedConversation = await db.conversation.update({
            where: {
                id: conversationID
            },
            data: {
                lastMessageAt: new Date(),
                messages: {
                    connect: {
                        id: newMessage.id
                    }
                }
            },
            include: {
                users: true,
                messages: {
                    include: {
                        seen: true
                    }
                }
            }
        })

        return NextResponse.json(newMessage)
        
    } catch (err) { 
        console.log(err)
        return NextResponse.json('Internal Error', { status: 500 })
    }
}