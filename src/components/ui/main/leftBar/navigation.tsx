import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
const Navigation = () => {
    return ( 
        <>
            <div className="border-b">
                <Link href ='/' className="flex items-center rounded-md bg-[#D58EE7] text-white p-2 mb-2">
                    <IoHomeOutline className="font-bold text-[20px]"/>
                    <p className="ml-6 text-[14px]">Home</p>
                </Link>
                <Link href ='/' className="flex items-center rounded-md  text-black p-2 mb-2">
                    <IoHomeOutline className="font-bold text-[20px]"/>
                    <p className="ml-6 text-[14px]">Home</p>
                </Link>
                <Link href ='/' className="flex items-center rounded-md  text-black p-2 mb-2">
                    <IoHomeOutline className="font-bold text-[20px]"/>
                    <p className="ml-6 text-[14px]">Home</p>
                </Link>
                <Link href ='/' className="flex items-center rounded-md  text-black p-2 mb-2">
                    <IoHomeOutline className="font-bold text-[20px]"/>
                    <p className="ml-6 text-[14px]">Home</p>
                </Link>
                <Link href ='/' className="flex items-center rounded-md  text-black p-2 mb-2">
                    <IoHomeOutline className="font-bold text-[20px]"/>
                    <p className="ml-6 text-[14px]">Home</p>
                </Link>
                <Link href ='/' className="flex items-center rounded-md  text-black p-2 mb-2">
                    <IoHomeOutline className="font-bold text-[20px]"/>
                    <p className="ml-6 text-[14px]">Home</p>
                </Link>
                <Link href ='/' className="flex items-center rounded-md  text-black p-2 mb-2">
                    <IoHomeOutline className="font-bold text-[20px]"/>
                    <p className="ml-6 text-[14px]">Home</p>
                </Link>
            </div>
            <div className="mt-4">
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