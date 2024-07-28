import { Input } from "@/components/ui/input";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CiSearch } from "react-icons/ci";
const Header = () => {
    return ( 
        <>
            <div className="flex items-center justify-between">
                <h2 className="text-black text-center text-[18px] font-bold dark:text-white">Stream<span className="text-[#CB71E1]">Hub</span></h2>
                <div className="bg-[#FAFAFA] flex items-center flex-1 mx-4 border focus-within:border-black rounded-md px-4">
                    <CiSearch className=" text-[24px]"/>
                    <Input className="bg-transparent  border-none w-full" placeholder="Search something..."/>
                </div>
                <div className="p-1 bg-[#FAFAFA] round-md cursor-pointer overflow-hidden">
                    <IoIosNotificationsOutline className="text-[28px] text-black"/>
                </div>
                <div className="ml-6 cursor-pointer">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar>
                                <AvatarImage src="https://avatars.githubusercontent.com/u/85166295?v=4" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-20">
                            <DropdownMenuSeparator />
                            <Button className="w-full">Thoát</Button>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </>
     );
}
 
export default Header;