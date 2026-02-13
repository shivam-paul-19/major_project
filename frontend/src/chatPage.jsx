import ChatBubble from "./components/chatBubble";
import "./chatPage.css";
import { useState } from "react";
import axios from "axios";
import sendIcon from "./assets/send_icon.png";

function ChatPage() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        let prompt = value.trim();
        if(prompt.length == 0) return;
        
        setChatArray(prev => [...prev, { type: 1, content: value }]);
        setValue("");
        setIsLoad(true);
        let response = await axios.post("http://localhost:5000/answer", {
            prompt: prompt
        });
        console.log(response.data.result);
        setChatArray(prev => [...prev, {type: 0, content: response.data.result}]);
        setIsLoad(false);
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    let [value, setValue] = useState("");
    let [isLoad, setIsLoad] = useState(false);
    let [chatArray, setChatArray] = useState([
        {
            type: 0,
            content: "Hey! how can I help you?"
        }
    ]);

  return (
    <>
        <div className="chatpage">
            <div style={{
                height: "20px"
            }}>

            </div>
            <form action="" onSubmit={handleSubmit} className="medibot-prompt-area">
                <input type="text" placeholder="Enter your query" className="chat-text-box" value={value} onChange={handleChange}/>
                {
                    isLoad? (
                        <button type="submit" className="chat-submit-btn-disabled" disabled>
                            <span className="loading loading-dots loading-md"></span>
                        </button>
                    ) : (
                        <button type="submit" className="chat-submit-btn">
                            <img src={sendIcon} alt="" />
                        </button>
                    )
                }
                
            </form>
            <div style={{
                height: "20px"
            }}></div>
            <div className="chat-container">
                {
                    chatArray.map((c) => {
                        return <ChatBubble type={c.type} content={c.content} />
                    })
                }
            </div>
        </div>
    </>
  )
}

export default ChatPage;