import Chat from "@/components/ui/main/rightBar/chat";

const Conversation = ({ params } : { params : { conversationID: number } }) => {
    return ( 
        <>
            <Chat conversationID={params.conversationID}/>
        </>
     );
}
 
export default Conversation;