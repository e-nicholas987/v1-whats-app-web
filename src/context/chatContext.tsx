import { useReducer, useEffect, createContext, useContext } from "react";
import { dummyChatData } from "utils/dummyChatData";

const ChatContext = createContext(null);
export const useChatContext = () => useContext(ChatContext);

const initialChats = JSON.parse(localStorage.getItem("chats")) || dummyChatData;

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "MARK_AS_READ":
      return state.map((chat) => {
        if (chat.id === action.id) {
          return { ...chat, read: true, isActive: true };
        } else {
          return { ...chat, isActive: false };
        }
      });
    case "MARK_AS_UNREAD":
      return state.map((chat) => {
        if (chat.id === action.id) {
          return { ...chat, read: false, isActive: false };
        } else {
          return { ...chat, isActive: false };
        }
      });
    case "MARK_AS_ACTIVE":
      return state.map((chat) => {
        return chat.id === action.id
          ? { ...chat, isActive: !chat.isActive }
          : { ...chat, isActive: false };
      });
    default:
      return state;
  }
};
const ChatProvider = ({ children }) => {
  const [chats, dispatch] = useReducer(reducer, initialChats);

  //update local storage on every change to chat state
  useEffect(() => {
    // test dark mode
    document.documentElement.classList.add("dark");
    //store dummy chat in local storage
    localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);

  return (
    <ChatContext.Provider value={{ chats, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
