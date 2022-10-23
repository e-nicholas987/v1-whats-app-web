import { useState } from "react";
import ChatPanelMessage from "components/chatPanelMessage";
import { useChatContext } from "context/chatContext";

const ChatListPanel = () => {
  const [chatFocus, setChatFocus] = useState(null);
  const { chats } = useChatContext();
  return (
    <aside className="w-[40%] bg-[color:var(--background-default)] h-full">
      {chats.map((chat) => (
        <ChatPanelMessage
          chat={chat}
          onChatFocus={(chatId) => setChatFocus(chatId)}
          chatFocus={chatFocus}
        />
      ))}
    </aside>
  );
};

export default ChatListPanel;
