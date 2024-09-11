'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SingleImageDropzone } from "@/components/ui/main/content/single-image-upload";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useEdgeStore } from "@/lib/edgestore";
import { postData } from "@/utils/api";
import { Dispatch, useState } from "react";
import { FaImage } from "react-icons/fa6";

const Status = ({ setData } : {setData: Dispatch<any>}) => {
    const [file, setFile] = useState<File>();
    const [value, setValue] = useState<string>('')
    const { edgestore } = useEdgeStore();
    const [finished, setFinished] = useState<boolean>(false)
    const currentUser = useCurrentUser()
    return ( 
        <div className="bg-white my-12 rounded-md px-4 py-2">
            <div className="flex items-center border-b py-2">
                <Avatar className="mr-4">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/85166295?v=4" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Input placeholder="What do you want to share?..." onChange={(e) => setValue(e.target.value)} value={value} />
            </div>
            <div className="flex items-center justify-center mt-4">
                <SingleImageDropzone
                    width={200}
                    height={200}
                    value={file}
                    onChange={(file) => {
                    setFile(file);
                    }}
                />
                <Button
                    className="self-end  ml-[auto] "
                    disabled = {!value && !file}
                    onClick={async () => {
                    if (file) {
                        const res = await edgestore.publicFiles.upload({
                        file,
                        onProgressChange: (progress) => {
                            // you can use this to show a progress bar
                            if(progress === 100) {
                                setFinished(true)
                            }
                        },
                        });
                        // you can run some server action or api here
                        // to add the necessary data to your database
                        const result = await postData('/post', {
                            content: value,
                            imagePath: res.url,
                            authorId: currentUser?.id as string,
                            date: new Date()
                        })
                        if ((finished && result.success) || result.success) {
                            setData((prevState: any) => [result.data, ...prevState])
                        }
                    } else if (value) {
                        const result = await postData('/post', {
                            content: value,
                            imagePath: '',
                            authorId: currentUser?.id as string,
                            date: new Date()
                        })
                        if (result.message) {
                            setData((prevState: any) => [result.data, ...prevState])
                        }}
                    
                        setValue('')
                    }
                }
                >
                    Upload
                </Button>
            </div>
        </div>
     );
}
 
export default Status;