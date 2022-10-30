import { useState } from "react";
import { useChatContext } from "../context/chatContext";
import { BsPersonCircle } from "react-icons/bs";
import { mostRecentMessage } from "utils/helpers";
import ChatPanelMessageOptions from "components/chatPanelMessageOptions";

interface IProps {
  chat: {
    id: string;
    read: string;
    messages: [];
    userName: string;
  };
  chatFocus: string;
  onChatFocus: (chatId: string) => void;
}

const ChatPanelMessage = ({ chat, chatFocus, onChatFocus }: IProps) => {
  const [activeChatHover, setActiveChatHover] = useState(null);
  const { dispatch } = useChatContext();

  return (
    <div
      onClick={() => {
        onChatFocus(chat.id);
        dispatch({ type: "MARK_AS_READ", id: chat.id });
      }}
      onMouseOver={() => setActiveChatHover(chat.id)}
      onMouseLeave={() => setActiveChatHover(null)}
      className={`h-[72px] flex pl-[13px] items-center hover:bg-[color:var(--background-default-hover)] cursor-pointer ${
        chatFocus === chat.id
          ? "bg-[color:var(--background-default-active)]"
          : ""
      }`}
      key={chat.id}
    >
      <BsPersonCircle className="text-white h-[60px] w-[60px]" />
      <div
        className={`relative h-full w-full pr-[15px] ml-[15px] border-t-[1px] flex flex-col justify-center hover:border-[color:var(--background-default-hover)] ${
          chatFocus === chat.id
            ? "border-[color:var(--background-default-hover)]"
            : "border-[color:var(--border-list)]"
        }`}
        key={chat.id}
      >
        <div
          className={`flex items-center justify-between ${
            !chat.read ? "font-bold" : "font-normal"
          }`}
        >
          <span className="text-[color:var(--primary-strong)] ">
            {chat.userName}
          </span>
          <span
            className={` text-xs ${
              !chat.read
                ? "font-[600] text-[color:var(--unread-timestamp)] "
                : "font-normal text-[color:var(--chat-meta)]"
            }`}
          >
            {mostRecentMessage(chat.messages).createdAt.toLocaleTimeString(
              "en-US",
              { hour: "numeric", minute: "numeric", hour12: true }
            )}
          </span>
        </div>
        <div className="flex justify-between relative">
          <p
            className={`text-[color:var(--chat-meta)] text-sm ${
              !chat.read ? "font-bold" : "font-normal"
            }`}
          >
            {mostRecentMessage(chat.messages).message}
          </p>
          <ChatPanelMessageOptions
            activeChatHover={activeChatHover}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPanelMessage;
