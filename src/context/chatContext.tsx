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
          return { ...chat, read: true };
        } else {
          return chat;
        }
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
    // 
    localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);

  return (
    <ChatContext.Provider value={{ chats, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
