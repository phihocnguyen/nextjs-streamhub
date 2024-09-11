'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useCurrentUser } from "@/hooks/use-current-user";
import { getData } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

interface storyType {
    id: number,
    userId: string,
    dateTime: string,
    content: string
}

const Story = () => {
    const [data, setData] = useState<storyType[]>([])
    const currentUser = useCurrentUser()
    const getStories = async () => {
        const result = await getData('/story')
        if (result.status === 200) {
            console.log(result.data)
            setData(result.data)
        }
    }

    useEffect(() => {
        getStories()
    }, [])

    return ( 
        <div className="bg-white rounded-md flex justify-center p-4">
            <Link href ='/stories' className="h-[200px] w-[150px] rounded-md shadow-md overflow-hidden relative duration-150 hover:opacity-80 cursor-pointer">
                <Image width={150} height={200} alt="story-image" src ='https://avatars.githubusercontent.com/u/85166295?v=4' />
                <p className="text-center mt-4 text-[14px]">Tạo tin</p>
                <div className="absolute top-[63%] left-1/2 text-blue-500 translate-x-[-50%] text-[20px]"><IoMdAddCircle/></div>
            </Link> 
            <Carousel
                opts={{
                    
                }}
                className="w-[90%] flex items-center ml-4"
            >
                <CarouselContent className="">
                    {data.map((item, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
                        <Link href ={`/stories/${item.userId}`}>
                            <div className={`p-[2px] rounded-full border w-[70px] h-[70px] cursor-pointer ` + (item.userId !== currentUser?.id ? 'border-[#D58EE7]' : 'border-green-400')}>
                                <Avatar className="w-full h-full">
                                        <AvatarImage src="https://avatars.githubusercontent.com/u/85166295?v=4" />
                                        <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                        </Link>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className="mr-8" />
            </Carousel>
        </div>
     );
}
 
export default Story;