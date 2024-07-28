
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
const PopupVerification = ({ email, setOpenModal } : {email: string, setOpenModal: Dispatch<SetStateAction<Boolean>>}) => {
    return ( 
        <Card className="w-[500px] min-h-[350px] bg-white ">
            <CardHeader className="items-end">
                <FaRegTimesCircle onClick={() => setOpenModal(prevState => !prevState)} className="text-black opacity-50 hover:opacity-100 duration-150 text-[22px] cursor-pointer" />
            </CardHeader>
            <CardContent>
                <Image className="object-cover h-full " width = {500} height = {250} src="https://img.freepik.com/free-vector/email-campaign-concept-illustration_114360-1633.jpg?w=900&t=st=1722012623~exp=1722013223~hmac=aad2caf9413445ebe81fd1d56a2ecb95efdc8ce29c2fa3d6b4967aba111f79a1" alt ="asd"/>
                <p className="text-center text-[#FE4F5C] font-bold">EMAIL VERIFICATION</p>
                <p className="text-center text-black">Chúng tôi đã gửi đường dẫn xác thực vào email <span className="font-bold">{email}</span> của bạn, hãy truy cập và xác thực ngay</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
     );
}
 
export default PopupVerification;