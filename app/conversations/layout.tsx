import getUsers from "@/app/actions/getUsers";
import SideBar from "@/app/components/sidebar/SideBar";
import getConversations from "@/app/actions/getConversations";
import ConversationList from "./components/ConversationList";

const ConversationsLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <SideBar>
      <ConversationList users={users} initialItems={conversations} />
      <div className="h-full">{children}</div>
    </SideBar>
  );
};

export default ConversationsLayout;
