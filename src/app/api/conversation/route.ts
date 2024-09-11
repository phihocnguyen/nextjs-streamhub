import { db } from "@/lib/db"
import { auth } from "../../../../auth"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: Request){
    try {
        const { otherUserId } = await req.json()

        const session = await auth()
        const currentUser = session?.user

        const existingConversation = await db.conversation.findMany({
            where: {
                OR: [
                    {
                        users: {
                            some: {
                                id: currentUser?.id
                            }
                        }
                    },
                    {
                        users: {
                            some: {
                                id: otherUserId
                            }
                        }
                    }
                ]
            },
            include: {
                users: true
            }
        })
        if (existingConversation.length != 0) return NextResponse.json(existingConversation)
        const newConversation = await db.conversation.create({
            data: {
                users: {
                    connect: [
                        {
                            id: currentUser?.id
                        },
                        {
                            id: otherUserId
                        }
                    ]
                }
            },
            include: {
                users: true
            }
        })
        return NextResponse.json(newConversation)
    }
    catch (err){
        console.log(err)
        return NextResponse.json('Internal Error', {status: 500})
    }
}

