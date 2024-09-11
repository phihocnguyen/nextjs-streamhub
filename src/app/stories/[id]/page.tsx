import PersonalStoryForm from "@/app/stories/[id]/personal-story";
import PersonalStoryView from "@/app/stories/[id]/personal-story-view";

const PersonalStory = ({ params } : {params: any}) => {
    return ( 
        <div className="flex h-screen">
            <PersonalStoryForm id = {params.id}/>
            <div className="bg-black w-full flex justify-center">
                <PersonalStoryView/>
            </div>
        </div> 
     );
}
 
export default PersonalStory;