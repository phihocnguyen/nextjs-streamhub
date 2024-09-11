'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";


const PersonalStoryForm = ({ id } : { id : string }) => {
    
    return ( 
        <div className="flex flex-col p-4 w-[20%] border-right border">
            <div className="mb-4 cursor-pointer">
                <Link href ='/'><FaTimes className="text-[32px] opacity-50 hover:opacity-100 transition-all duration-150"/></Link>
            </div>
            <div className="mb-4">
                <p className="text-[24px] font-bold">Tin</p>
            </div>
            <div className="my-4 py-4">
                <div className="flex items-center mt-4 hover:bg-slate-200 duration-150 px-4 py-2 rounded-md cursor-pointer">
                    <div>
                        <Avatar className="w-[45px] h-[45px]">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/85166295?v=4" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="ml-4">
                        <p className="text-[16px]">Nguyễn Phi Học</p>
                    </div>
                </div>
                <div className="flex items-center mt-4 hover:bg-slate-200 duration-150 px-4 py-2 rounded-md cursor-pointer">
                    <div>
                        <Avatar className="w-[45px] h-[45px]">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/85166295?v=4" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="ml-4">
                        <p className="text-[16px]">Nguyễn Phi Học</p>
                    </div>
                </div>
                <div className="flex items-center mt-4 hover:bg-slate-200 duration-150 px-4 py-2 rounded-md cursor-pointer">
                    <div>
                        <Avatar className="w-[45px] h-[45px]">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/85166295?v=4" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="ml-4">
                        <p className="text-[16px]">Nguyễn Phi Học</p>
                    </div>
                </div>
                <div className="flex items-center mt-4 hover:bg-slate-200 duration-150 px-4 py-2 rounded-md cursor-pointer">
                    <div>
                        <Avatar className="w-[45px] h-[45px]">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/85166295?v=4" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="ml-4">
                        <p className="text-[16px]">Nguyễn Phi Học</p>
                    </div>
                </div>
                <div className="flex items-center mt-4 hover:bg-slate-200 duration-150 px-4 py-2 rounded-md cursor-pointer">
                    <div>
                        <Avatar className="w-[45px] h-[45px]">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/85166295?v=4" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="ml-4">
                        <p className="text-[16px]">Nguyễn Phi Học</p>
                    </div>
                </div>
                <div className="flex items-center mt-4 hover:bg-slate-200 duration-150 px-4 py-2 rounded-md cursor-pointer">
                    <div>
                        <Avatar className="w-[45px] h-[45px]">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/85166295?v=4" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="ml-4">
                        <p className="text-[16px]">Nguyễn Phi Học</p>
                    </div>
                </div>
                
                
            </div>
        </div>
     );
}
 
export default PersonalStoryForm;