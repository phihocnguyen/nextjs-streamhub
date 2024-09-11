'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useCurrentUser } from "@/hooks/use-current-user";
const Profile = () => {
    const currentUser = useCurrentUser()
    return ( 
        <div className="rounded-md flex flex-col items-center py-4">
            <div className="flex items-center">
                <div>
                    <Avatar>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/85166295?v=4" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className="ml-4">
                    <p className="text-[16px]">{currentUser?.name}</p>
                    <p className="text-[#A9A2AA] text-[12px]">{currentUser?.email}</p>
                </div>
            </div>
            <div className="flex mt-4">
                <div className="text-center">
                    <p className="text-[16px] font-bold">1.4K</p>
                    <p className="text-[#A9A2AA] text-[12px]">Followers</p>
                </div>
                <div className="mx-4 text-center">
                    <p className="text-[16px] font-bold">342</p>
                    <p className="text-[#A9A2AA] text-[12px]">Following</p>
                </div>
                <div className="text-center">
                    <p className="text-[16px] font-bold">65</p>
                    <p className="text-[#A9A2AA] text-[12px]">Post</p>
                </div>
            </div>
        </div>
     );
}
 
export default Profile;