import { marked } from "marked";
import botImage from "../assets/chat_bot_avatar.png";
import userAvatar from "../assets/user_avatar.png";

function ChatBubble({ type, content }) {
  if (type == 0) {
    content = marked(content);
  }
  
  return (
    <>
      {type == 0 ? (
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src={botImage} />
            </div>
          </div>
          <div
            className="chat-bubble [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5"
            dangerouslySetInnerHTML={{ __html: content }}
            style={{
              backgroundColor: "#125774",
              color: "#edfffe"
            }}
          ></div>
        </div>
      ) : (
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src={userAvatar} />
            </div>
          </div>
          <div
            className="chat-bubble"
            style={{
              backgroundColor: "#20ddce",
            }}
          >
            {content}
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBubble;