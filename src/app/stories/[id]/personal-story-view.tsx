import { Input } from "@/components/ui/input";
import { AiFillLike } from "react-icons/ai";
import { IoIosHappy } from "react-icons/io";
import { FaFaceSadCry } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const PersonalStoryView = () => {
    return ( 
        <div className="w-1/4 py-2 h-screen flex flex-col">
            <div className="my-2 flex items-center">
                <Avatar className="w-[45px] h-[45px]">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/85166295?v=4" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="ml-4 text-white text-[16px]">Nguyễn Phi Học</p>
            </div>
            <div className="py-2 rounded-md bg-red-300 flex-1 flex items-center justify-center">
                <p className="font-bold text-white">Đây là content</p>
            </div>
            <div className="text-white my-4 flex items-center">
                <Input placeholder="Trả lời..."/>
                <div className="flex ml-4">
                    <AiFillLike className="text-[32px] cursor-pointer opacity-50 hover:opacity-100 duration-150"/>
                    <IoIosHappy className="text-[32px] cursor-pointer opacity-50 hover:opacity-100 duration-150"/>
                </div>
            </div>
        </div>
     );
}
 
export default PersonalStoryView;