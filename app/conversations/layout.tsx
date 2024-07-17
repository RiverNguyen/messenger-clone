import SideBar from "../components/sidebar/SideBar";
import ConversationList from "./components/ConversationList";
import getConversations from "@/app/actions/getConversations";

const ConversationsLayout = async ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const conversations = await getConversations();

    return (
        <SideBar>
            <ConversationList initialItems={conversations} />
            <div className="h-full">{children}</div>
        </SideBar>
    );
};

export default ConversationsLayout;
