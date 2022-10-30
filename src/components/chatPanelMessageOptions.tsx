import useDetectClickOut from "hooks/useDectectClickOut";
import { FaChevronDown } from "react-icons/fa";

const ChatPanelMessageOptions = ({
  activeChatHover,
}: {
  activeChatHover: string;
}) => {
  const { show, setShow, triggerRef, nodeRef } = useDetectClickOut();
  const options = [
    { label: "Archive Chat", value: "archiveChat" },
    { label: "Pin Chat", value: "pinChat" },
    { label: "Mark as unread", value: "markAsUnread" },
  ];
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setShow(!show);
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
      {show && (
        <ul
          ref={nodeRef}
          className="absolute top-full left-[calc(100%-15px)] py-[9px] bg-[color:var(--dropdown-background)] z-40 rounded-[3px]"
        >
          {options.map((options) => (
            <div className="hover:bg-[color:var(--dropdown-background-hover)]">
              <li
                className="h-10 whitespace-nowrap pr-[58px] text-[color:var(--primary)] pl-6 flex items-center"
                key={options.value}
              >
                {options.label}
              </li>
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default ChatPanelMessageOptions;
