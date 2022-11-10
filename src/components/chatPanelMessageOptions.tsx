import useDetectClickOut from "hooks/useDectectClickOut";
import { FaChevronDown } from "react-icons/fa";
import { useChatContext } from "context/chatContext";

interface IProps {
  chatId: number;
  activeChatHover: string;
  onButtonClick: () => void;
}

const ChatPanelMessageOptions = ({
  activeChatHover,
  chatId,
  onButtonClick,
}: IProps) => {
  const { show, setShow, triggerRef, nodeRef } = useDetectClickOut();
  const { chats, dispatch } = useChatContext();
  const isActive = (chatId) =>
    chats.find((chat) => chat.id === chatId && chat?.isActive);

  const options = [
    {
      label: "Archive Chat",
      value: "archiveChat",
    },
    {
      label: "Pin Chat",
      value: "pinChat",
    },
    {
      label: "Mark as unread",
      value: "markAsUnread",
      dispatch: "MARK_AS_UNREAD",
    },
  ];
  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          dispatch({ type: "MARK_AS_ACTIVE", id: chatId });
          setShow(isActive(chatId) ? false : true);
        }}
        ref={triggerRef}
        className="focus:outline-none"
      >
        <FaChevronDown
          className={`transition-all text-[color:var(--chat-meta)] h-[15px] ${
            activeChatHover ? "w-[15px]" : "w-0"
          }`}
        />
      </button>
      {isActive(chatId) && show && (
        <ul
          ref={nodeRef}
          className="absolute top-full left-[calc(100%-15px)] py-[9px] bg-[color:var(--dropdown-background)] z-40 rounded-[3px]"
        >
          {options.map((option) => (
            <li
              key={option.value}
              className="hover:bg-[color:var(--dropdown-background-hover)]"
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch({ type: "MARK_AS_UNREAD", id: chatId });
                }}
                className="h-10 whitespace-nowrap pr-[58px] text-[color:var(--primary)] pl-6 flex items-center"
                key={option.value}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ChatPanelMessageOptions;
