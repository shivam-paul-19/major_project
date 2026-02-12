import ChatBubble from "./components/chatBubble";
import "./chatPage.css";
import { useState } from "react";
import axios from "axios";

function ChatPage() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        setChatArray(prev => [...prev, { type: 1, content: value }]);
        let prompt = value;
        setValue("");
        let response = await axios.post("http://localhost:5000/answer", {
            prompt: prompt
        });
        console.log(response.data.result);
        setChatArray(prev => [...prev, {type: 0, content: response.data.result}]);
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    let [value, setValue] = useState("");
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
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your query" value={value} onChange={handleChange}/>
                <button type="submit">Send</button>
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