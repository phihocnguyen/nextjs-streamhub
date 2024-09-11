'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { FaImage } from "react-icons/fa6";
import { FaRegTimesCircle } from "react-icons/fa";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { getData, postData } from "@/utils/api";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useRef, useState } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";

interface messageType {
    id?: string,
    body: string,
    senderId: string,
    createdAt?: string
}

const Chat = ({ conversationID } : { conversationID : number }) => {
    const [messages, setMessages] = useState<messageType[]>([])
    const messageRef = useRef<null | HTMLDivElement>(null); 
    const { register, handleSubmit, setValue, formState: {
        errors
    } } = useForm<FieldValues>({
        defaultValues: {
            message: ''
        }
    })
    const currentUser = useCurrentUser()
    const getMessages = useCallback(async () => {
        const result = await getData(`/conversation/${conversationID}`)
        if (result) setMessages(result.messages)
    }, [conversationID])

    useEffect(() => {
        getMessages()
    }, [getMessages])
    const scrollToBottom = () => {
        if (messageRef.current !== null) {
            messageRef.current.scrollIntoView({
            behavior: "smooth",
        })
        }
    }
    useEffect(() => {
        if (messageRef.current) scrollToBottom()
    }, [messages])

    const onSubmit : SubmitHandler<FieldValues> = async (data) => {
        setValue('message', '', { shouldValidate: true })
        const newMessage = await postData('/messages', {
            ...data,
            conversationID
        })
        setMessages((prevState) => [...prevState, newMessage] )
    }
    return ( 
        <div className="overflow-hidden w-[50vw] h-[50vh] bg-white rounded-md z-[9999] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col">
            <div className="p-4 border-b border flex items-center">
                <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/85166295?v=4" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="ml-4">Le Thi Thanh Truc</p>
                <FaRegTimesCircle className="block ml-auto text-[24px] duration-150 opacity-50 hover:opacity-100 cursor-pointer"/>
            </div>
            <div className="flex-1 p-4 overflow-y-scroll">
                {
                    messages.map((message, index) => {
                        if (message.senderId === currentUser?.id ) {
                            return (
                                    <div key = {index} className="ml-auto mt-4 w-[fit-content] max-w-[40%] ">
                                        <p className="w-[fit-content] mr-4 p-2 rounded-md bg-blue-500 text-white break-words">{message.body}</p>
                                    </div>)
                        } else {
                            return (
                                    <div key={index} className="w-1/3">
                                        <p className="ml-4 p-2 rounded-md bg-slate-200">{message.body}</p>
                                    </div>
                            )
                        }
                    })
                }
                <div ref = {messageRef}></div>
            </div>
            <div className="border border-t p-4 flex items-center">
                <FaImage className="text-[18px] cursor-pointer"/>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex items-center">
                    <Input className="flex-1 ml-4 rounded-full" placeholder="Write something..."  {...register("message", { required: true } )} />
                    <Button className="ml-4" type = 'submit'>Submit</Button>
                </form>
            </div>
        </div>  
     );
}
 
export default Chat;