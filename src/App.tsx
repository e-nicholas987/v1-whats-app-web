import Messages from "components/messages";
import ChatListPanel from "components/chatListPanel";

function App() {
  return (
    <section className="w-[100vw] h-[100vh]">
      <div className="w-full h-full flex">
        <ChatListPanel />
        <Messages />
      </div>
    </section>
  );
}

export default App;
