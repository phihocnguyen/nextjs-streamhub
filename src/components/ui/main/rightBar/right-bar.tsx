import Message from "@/components/ui/main/rightBar/message";
import Suggestion from "@/components/ui/main/rightBar/suggestion";

const RightSideBar = () => {
    return ( 
        <div className="px-6 py-2">
            <div>
                <Suggestion/>
            </div>
            <div className="mt-6">
                <Message/>
            </div>
        </div>
     );
}
 
export default RightSideBar;