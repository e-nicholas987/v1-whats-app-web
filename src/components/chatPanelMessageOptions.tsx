import useDetectClickOut from "hooks/useDectectClickOut";
import { FaChevronDown } from "react-icons/fa";

const ChatPanelMessageOptions = ({
  activeChatHover,
}: {
  activeChatHover: string;
}) => {
  const { show, triggerRef, nodeRef } = useDetectClickOut();
  const options = [
    { label: "Archive Chat", value: "archiveChat" },
    { label: "Pin Chat", value: "pinChat" },
    { label: "Mark as unread", value: "markAsUnread" },
  ];
  return (
    <>
      <button ref={triggerRef} className="focus:outline-none">
        <FaChevronDown
          className={`transition-all text-[color:var(--chat-meta)] h-[15px] ${
            activeChatHover ? "w-[15px]" : "w-0"
          }`}
        />
      </button>
      {show && (
        <ul
          ref={nodeRef}
          className="absolute top-full left-[calc(100%-15px)] py-[9px] bg-[color:var(--dropdown-background)] z-40"
        >
          {options.map((options) => (
            <li
              className="h-10 whitespace-nowrap pr-[58px] text-[color:var(--primary)] pl-6 flex items-center"
              key={options.value}
            >
              {options.label}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ChatPanelMessageOptions;
