import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { BiSolidVideos } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
const Navigation = () => {
    return ( 
        <>
            <div className="border-b px-8">
                <Link href ='/' className="flex items-center rounded-md bg-[#D58EE7] text-white p-2 mb-2">
                    <FaHome className="font-bold text-[20px]"/>
                    <p className="ml-6 text-[14px]">Home</p>
                </Link>
                <Link href ='/' className="flex items-center rounded-md  text-black p-2 mb-2">
                    <FaUserFriends className="font-bold text-[20px]"/>
                    <p className="ml-6 text-[14px]">Friends</p>
                </Link>
                <Link href ='/' className="flex items-center rounded-md  text-black p-2 mb-2">
                    <MdEvent className="font-bold text-[20px]"/>
                    <p className="ml-6 text-[14px]">Event</p>
                </Link>
                <Link href ='/' className="flex items-center rounded-md  text-black p-2 mb-2">
                    <IoMdPhotos className="font-bold text-[20px]"/>
                    <p className="ml-6 text-[14px]">Photos</p>
                </Link>
                <Link href ='/' className="flex items-center rounded-md  text-black p-2 mb-2">
                    <BiSolidVideos className="font-bold text-[20px]"/>
                    <p className="ml-6 text-[14px]">Watch Videos</p>
                </Link>
                <Link href ='/' className="flex items-center rounded-md  text-black p-2 mb-2">
                    <FaShoppingCart className="font-bold text-[20px]"/>
                    <p className="ml-6 text-[14px]">Marketplace</p>
                </Link>
                <Link href ='/' className="flex items-center rounded-md  text-black p-2 mb-2">
                    <IoIosSettings className="font-bold text-[20px]"/>
                    <p className="ml-6 text-[14px]">Setting</p>
                </Link>
            </div>
            <div className="mt-4 px-8">
                <p className="mb-2 text-[14px]">PAGES YOU LIKE</p>
                <div className="flex items-center">
                    <div>
                        <Avatar>
                            <AvatarImage src="https://avatars.githubusercontent.com/u/85166295?v=4" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="ml-4">
                        <p className="text-[16px]">Foodie Haven</p>
                    </div>
                </div>
                <div className="flex items-center mt-6">
                    <div>
                        <Avatar>
                            <AvatarImage src="https://avatars.githubusercontent.com/u/85166295?v=4" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="ml-4">
                        <p className="text-[16px]">Travel tables</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Navigation;