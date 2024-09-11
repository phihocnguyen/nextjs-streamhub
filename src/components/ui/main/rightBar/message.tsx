'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { postData } from "@/utils/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
const Message = () => {
    const [openSearch, setOpenSearch] = useState<boolean>(false)
    const router = useRouter()
    const handleStartConversation = async (otherUserId: string) => {
        const conversation = await postData('/conversation', {
            otherUserId
        })
        if (conversation[0]) router.push(`/conversation/${conversation[0].id}`)
        
    }

    return ( 
        <div className="bg-white rounded-md">
            <div className="flex items-center justify-between">
                <p className="text-[16px] font-bold">Messages</p>
                <CiSearch className="text-[24px] hover:opacity-100 opacity-50 transition-all cursor-pointer" onClick={() => setOpenSearch(prevState => !prevState)}/>
            </div>
            <div className={`mt-2 transition-all ` + (openSearch ? 'scale-100 visible' : 'scale-0 invisible')}>
                <Input placeholder="Search something..."/>
            </div>
            <div className="mt-4 flex items-center transition-all hover:bg-slate-100 rounded-md p-2 cursor-pointer" onClick={() => handleStartConversation('cm0p8z0630006er5avch40mqw')} >
                <div className="relative">
                    <Avatar>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/85166295?v=4" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <GoDotFill className="absolute right-[-6px] bottom-0 text-green-500 text-[18px] z-10"/>
                </div>
                <div className="ml-2">
                    <p>Sarah Brown</p>
                    <p className="text-[13px] text-[#A9A2AA]">Hey! long time no chat</p>
                </div>
            </div>
        </div>
     );
}
 
export default Message;