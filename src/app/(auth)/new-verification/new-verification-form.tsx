'use client'
import { newVerification } from "@/actions/auth/new-verification";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const NewVerificationCard = () => {
    const searchParams = useSearchParams()
    const token = searchParams.get("token")
    const onSubmit = useCallback(() => {
        if (!token) return
        newVerification(token)
        // lam them error va success
    }, [token])

    useEffect(() => {
        onSubmit()
    }, [onSubmit])
    return ( 
        <>
            <div className="bg-white flex flex-col items-center justify-center w-full h-screen">
                <FaCheckCircle className="text-[96px] text-[#41AE39]"/>
                <p className="my-6 font-bold text-[24px] text-black">ĐÃ XÁC THỰC</p>
                <p className="mb-6 text-[16px] text-[#A6A8A9]">Bạn đã xác thực thành công</p>
                <Button className="bg-[#41AE39] text-white font-bold hover:bg-[#41AE39]"><a href = "/login">Quay trở về trang đăng nhập</a></Button>
            </div>
        </>
     );
}
 
export default NewVerificationCard;