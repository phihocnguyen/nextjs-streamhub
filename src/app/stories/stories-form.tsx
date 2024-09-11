'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useCurrentUser } from "@/hooks/use-current-user";
import { postData } from "@/utils/api";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { FaTimes } from "react-icons/fa";
const StoriesForm = ({ value, setValue } : { value: string, setValue: Dispatch<SetStateAction<string>> }) => {
    const currentUser = useCurrentUser()
    const handleUploadStory = async () => {
        const newStory = await postData('/story', {
            userId: currentUser?.id,
            content: value
        })
        if (newStory.status === 201) {
            alert('Uploaded story succesfully')
            redirect('/')
        }
    }
    return ( 
        <div className="flex flex-col">
            <div className="mb-4 cursor-pointer">
                <Link href ='/'><FaTimes className="text-[32px] opacity-50 hover:opacity-100 transition-all duration-150"/></Link>
            </div>
            <div className="mb-4">
                <p className="text-[24px] font-bold">Tin của bạn</p>
            </div>
            <div className="my-4 py-4">
                <div className="flex items-center">
                    <div>
                        <Avatar className="w-[75px] h-[75px]">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/85166295?v=4" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="ml-4">
                        <p className="text-[20px]">Nguyễn Phi Họcc</p>
                    </div>
                </div>
            </div>
            <div className="my-4 h-[200px]">
                <Textarea className="h-full" placeholder="Bắt đầu nhập..." onChange={(e) => setValue(e.target.value)}/>
            </div>
            <div className="mt-4 mb-4 border rounded-md p-4">
                <p className="text-[14px]">Phông nền</p>
                <div className="mt-4 flex flex-wrap">
                    <div className="rounded-full h-[25px] w-[25px] bg-black mr-2 mb-4"></div>
                    <div className="rounded-full h-[25px] w-[25px] bg-red-200 mr-2 mb-4"></div>
                    <div className="rounded-full h-[25px] w-[25px] bg-black mr-2 mb-4"></div>
                    <div className="rounded-full h-[25px] w-[25px] bg-red-200 mr-2 mb-4"></div>
                    <div className="rounded-full h-[25px] w-[25px] bg-black mr-2 mb-4"></div>
                    <div className="rounded-full h-[25px] w-[25px] bg-red-200 mr-2 mb-4"></div>
                    <div className="rounded-full h-[25px] w-[25px] bg-black mr-2 mb-4"></div>
                    <div className="rounded-full h-[25px] w-[25px] bg-red-200 mr-2 mb-4"></div>
                    <div className="rounded-full h-[25px] w-[25px] bg-black mr-2 mb-4"></div>
                    <div className="rounded-full h-[25px] w-[25px] bg-red-200 mr-2 mb-4"></div>
                    <div className="rounded-full h-[25px] w-[25px] bg-black mr-2 mb-4"></div>
                    <div className="rounded-full h-[25px] w-[25px] bg-red-200 mr-2 mb-4"></div>
                </div>
            </div>
            <div className="flex mt-auto">
                <Button onClick={() => handleUploadStory()} className="w-full">Chia sẻ lên tin</Button>
            </div>
        </div>
     );
}
 
export default StoriesForm;