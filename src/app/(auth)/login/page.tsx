import LoginForm from "@/app/(auth)/login/login-form"
import Image from "next/image"

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
        <div className="bg-black w-[80%] h-[80%] flex rounded-lg overflow-hidden">
            <div className="bg-white flex flex-col justify-center p-12">
                <h2 className="text-black text-center mb-8 text-[18px] font-bold">Stream<span className="text-[#CB71E1]">Hub</span></h2>
                <LoginForm/>
                <p className="text-black text-[12px] text-center mt-4">You have not had a account ? <a href ='/register' className="font-bold text-[#CB71E1]">Register now</a></p>
            </div>
            <div className="flex-1 bg-black opacity-50">
                <Image src='https://wpcom.files.wordpress.com/2021/06/924330_featured-image-for-wordpress-com_121820.png' width={1920} height={1080} className="object-cover w-full h-full" alt ='login-image' />
            </div>
        </div>
    </div>
  )
}

export default Login