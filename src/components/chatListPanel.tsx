import ChatPanelMessage from "components/chatPanelMessage";
import { useChatContext } from "context/chatContext";

const ChatListPanel = () => {
  const { chats } = useChatContext();
  return (
    <aside className="w-[40%] bg-[color:var(--background-default)] h-full">
      {chats.map((chat) => (
        <ChatPanelMessage chat={chat} />
      ))}
    </aside>
  );
};

export default ChatListPanel;
