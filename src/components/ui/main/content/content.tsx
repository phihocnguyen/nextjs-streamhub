'use client'
import AllPosts from "@/components/ui/main/content/allposts";
import Post from "@/components/ui/main/content/post";
import Status from "@/components/ui/main/content/status";
import Story from "@/components/ui/main/content/story";
import { useState } from "react";

const Content = () => {
    const [data, setData] = useState<any>([])
    return ( 
        <div className="">
            <div>
                <Story/>
            </div>
            <div>
                <Status setData = {setData}/>
            </div>
            <div>
                <AllPosts data = {data} setData = {setData}/>
            </div>
        </div>
     );
}
 
export default Content;