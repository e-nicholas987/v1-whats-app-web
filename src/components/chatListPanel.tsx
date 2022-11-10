import { useState } from "react";
import { useChatContext } from "context/chatContext";
import { ReactComponent as DefaultAvatar } from "assets/images/default-avatar.svg";
import { ReactComponent as NewChat } from "assets/images/new-chat.svg";
import { ReactComponent as Options } from "assets/images/options.svg";
import { ReactComponent as Status } from "assets/images/status.svg";
import ChatPanelMessage from "components/chatPanelMessage";

const ChatListPanel = () => {
  const [chatFocus, setChatFocus] = useState(null);
  const { chats } = useChatContext();
  // console.log(chats);
  return (
    <aside className="w-[40%] bg-[color:var(--background-default)] h-full">
      <header className="flex items-center justify-between px-4 py-[10px] dark:bg-[color:var(--panel-header-background)]">
        <button>
          <DefaultAvatar className="w-10 h-10 text-[color:var(--primary)]" />
        </button>
        <div className="flex gap-4 items-center">
          <button className="w-10 h-10 rounded-full -2 flex justify-center items-center">
            <Status className="text-[color:var(--panel-header-icon)]" />
          </button>
          <button className="w-10 h-10 rounded-full -2 flex justify-center items-center">
            <NewChat className="text-[color:var(--panel-header-icon)]" />
          </button>
          <button className="w-10 h-10 rounded-full p-2 flex justify-center items-center">
            <Options className="text-[color:var(--panel-header-icon)]" />
          </button>
        </div>
      </header>
      {chats?.map((chat) => (
        <ChatPanelMessage
          key={chat.id}
          chat={chat}
          onChatFocus={(chatId) => setChatFocus(chatId)}
          chatFocus={chatFocus}
        />
      ))}
    </aside>
  );
};

export default ChatListPanel;
