'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCurrentUser } from "@/hooks/use-current-user";
import { getDataWithId, postData, putData } from "@/utils/api";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

interface commentType {
    userId: string,
    postId: string,
    content: string,
    user: {
        name: string
    }
}

const Post = ({ id, text, imagePath, isLiked, totalLike } : { id: string, text?: string, imagePath?: string, isLiked: boolean, totalLike: number }) => {
    const [like, setLike] = useState<boolean>(isLiked)
    const [totalLiked, setTotalLiked] = useState<number>(totalLike)
    const [value, setValue] = useState<string>('')
    const [allComments, setAllComments] = useState<commentType[]>([])
    const inputRef = useRef<HTMLInputElement>(null)
    const currentUser = useCurrentUser()
    const handlePostLiked = async () => {
        const result = await putData('/post', id, 'post-liked', {
            isLiked: like
        })
        if (like === false) setTotalLiked(prevState => ++prevState)
        else setTotalLiked(prevState => --prevState)
        setLike(result.data)
    }

    const handleComment = async () => {
        const data = {
            userId: currentUser?.id,
            postId: id,
            content: value
        }
        const result = await postData('/comment', data)
        if (result) alert(result.message)
    }

    useEffect(() => {
        const getComments = async () => {
            const data = await getDataWithId('/comment', id)
            if (data) setAllComments(data.data)
        }
        getComments()
    }, [id])

    return ( 
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center mb-2">
                <Avatar className="mr-4">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/85166295?v=4" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-[14px]">Nguyễn Phi Học</p>
                    <p className="text-[#A9A2AA] text-[12px]">2 mar 13:32 PM</p>
                </div>
            </div>
            <div className="w-full h-[360px] rounded-md overflow-hidden mt-4">
                {
                    text && !imagePath && 
                    <div className="h-full text-white bg-black flex items-center justify-center">
                        <p className="text-[24px] font-bold w-1/2 break-words text-center">{text}</p>
                    </div>
                }
                <p className="mb-2">{text}</p>
                <Image className="w-full h-full" src = {imagePath as string || ''} width={1500} height={1000} alt="tokyo-img"/>
            </div>
            <div className="mt-4 flex">
                <FaHeart className={`mr-2 cursor-pointer ` + (like ? 'text-red-600' : '')} onClick={() => handlePostLiked()}/>
                <FaRegComment className="cursor-pointer" onClick={() => inputRef.current?.focus()} />
            </div>
            <div className="flex items-center mt-4">
                <Avatar className="h-[30px] w-[30px]">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/85166295?v=4" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="h-[30px] w-[30px] ml-[-6px]">
                    <AvatarImage src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/202094428_1452168418473097_759319712769039643_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_umnz8X2niwQ7kNvgHPoV9M&_nc_ht=scontent.fsgn8-3.fna&oh=00_AYATSwvsCierVVMPRsOBykwSGDLa0lxPSNNPqGxB3llSig&oe=66AC476A" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="h-[30px] w-[30px] mr-2 ml-[-6px]">
                    <AvatarImage src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/449076104_1007274974090154_8358081265475609965_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=DV5L4K4-GPYQ7kNvgFndR-x&_nc_ht=scontent.fsgn8-3.fna&oh=00_AYCuHtrO-Y8FB5yN0-4sTPUxHEHnOhaIqpwNYEbmRd48ug&oe=66AC2618" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-[14px] font-bold">{totalLiked} Likes</p>
            </div>
            <button className="mt-4 text-[#A9A2AA] text-[14px] ">View all comments</button>
            <div>
                {allComments.map((comment, index) => {
                    return (
                        <div className="mt-2" key={index}>
                            <span className="text-[14px] font-bold">{comment.user.name}: </span>
                            <span className="ml-4 text-[14px]">{comment.content}</span>
                        </div>
                    )
                })}
            </div>
            <div className="mt-4 flex">
                <Input placeholder="Leave a comment..." ref = {inputRef} value={value} onChange={(e) => setValue(e.target.value)}/>
                <Button className="ml-4" onClick={handleComment}>Send</Button>
            </div>
        </div>
     );
}
 
export default Post;