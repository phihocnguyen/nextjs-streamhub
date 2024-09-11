'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { getData } from "@/utils/api";
import { useCallback, useEffect, useState } from "react";

interface userType {
    id: string,
    name: string,
    email: string,
    emailVerified: string,
    image: string,
    password: string,
    role: string
}

const Suggestion = () => {
    const [data, setData] = useState<userType[]>([])
    const currentUser = useCurrentUser()
    const getUsers = useCallback(async () => {
        const result = await getData('/follower')
        if (result.status === 200) {
            result.data = result.data.filter(( item:userType ) => item.id !== currentUser?.id)
            setData(result.data)
        } else console.log(result.error)
    }, [currentUser?.id])

    useEffect(() => {
        getUsers()
    }, [getUsers])
    return ( 
        <div className="bg-white rounded-md">
            <div className="flex justify-between">
                <p className="text-[16px] font-bold">Suggested for you</p>
                <p className="cursor-pointer text-[14px] text-[#A9A2AA]">See all</p>
            </div>
            <div>
                {
                    data.map((item : userType, index: number) => (
                        <div key={index} className="mt-4 flex items-center">
                            <Avatar>
                                <AvatarImage src="https://avatars.githubusercontent.com/u/85166295?v=4" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="ml-2">
                                <p>{item.name}</p>
                                <p className="text-[12px] text-[#A9A2AA]">Suggested for you</p>
                            </div>
                            <button className="text-[#D58EE7] text-[14px] font-bold block ml-auto">Follow</button>
                        </div>
                    ))
                }
            </div>
            
            
        </div>
     );
}
 
export default Suggestion;