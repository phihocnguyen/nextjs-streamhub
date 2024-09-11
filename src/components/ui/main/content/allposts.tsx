'use client'

import Post from "@/components/ui/main/content/post";
import { getData } from "@/utils/api";
import { Dispatch, useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from 'framer-motion'
interface dataType {
    id: string
    date: Date 
    image_path: string | null 
    content: string | null
    totalLike: number
    authorId: string
    isLiked: boolean
}
const AllPosts = ({ data, setData } : { data: dataType[], setData: Dispatch<any> }) => {
    useEffect(() => {
        const requestData = async () => {
            const result = await getData('/post')
            setData(result.data)
        }
        requestData()
    } , [setData])
    return ( 
        <div>
            {
                data?.map((item, index) => {
                    return (
                        <Post  key={index} id = {item.id} text={item.content as string} imagePath={item.image_path as string} isLiked = {item.isLiked as boolean} totalLike = {item.totalLike} />
                    )
                })
            }
        </div>
     );
}
 
export default AllPosts;