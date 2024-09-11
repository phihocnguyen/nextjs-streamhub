'use client'
import StoriesForm from "@/app/stories/stories-form";
import StoriesPreview from "@/app/stories/stories-preview";
import { useState } from "react";

const StoriesWrraper = () => {
    const [value, setValue] = useState<string>('Bắt đầu nhập')
    return ( 
        <div className="flex w-full">
            <div className="w-1/4 p-4 bg-white shadow-md">
                <StoriesForm setValue = {setValue} value = {value}/>
            </div>
            <div className="w-3/4 bg-white rounded-md mx-[96px] my-[48px] p-4 shadow-md">
                <StoriesPreview value = {value}/>
            </div>
        </div>
     );
}
 
export default StoriesWrraper;