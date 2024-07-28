import Navigation from "@/components/ui/main/leftBar/navigation";
import Profile from "@/components/ui/main/leftBar/profile";

const LeftSideBar = () => {
    return ( 
        <div className="h-[620px]">
            <div className="bg-white rounded-md">
                <Profile/>
            </div>
            <div className="mt-4 p-4 bg-white rounded-md">
                <Navigation/>
            </div>
        </div>
     );
}
 
export default LeftSideBar;