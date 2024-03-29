/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import useApiHook from '../../hooks/useApiHook';

// const API_KEY = import.meta.env.VITE_CHAT_GPT_APIKEY;
// "Explain things like you would to a 10 year old learning how to code."
const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
    "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
}

function ChatBoat() {
    const { apiKey, loading, } = useApiHook('chatGptApi');

    const [messages, setMessages] = useState(() => {

        const storedMessages = localStorage.getItem('chatHistory');
        return storedMessages ? JSON.parse(storedMessages) : [
            {
                message: "Hello, I'm Tools Master Ai based on ChatGPT! Ask me anything!",
                sentTime: "just now",
                sender: "ChatGPT"
            }
        ];
    });

    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        // Save messages to local storage whenever messages are updated
        localStorage.setItem('chatHistory', JSON.stringify(messages));
    }, [messages]);

    const handleSend = async (message) => {
        const newMessage = {
            message,
            direction: 'outgoing',
            sender: "user"
        };

        const newMessages = [...messages, newMessage];

        setMessages(newMessages);

        // Initial system message to determine ChatGPT functionality
        // How it responds, how it talks, etc.
        setIsTyping(true);
        await processMessageToChatGPT(newMessages);
    };

    async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
        // Format messages for chatGPT API
        // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
        // So we need to reformat

        let apiMessages = chatMessages.map((messageObject) => {
            let role = "";
            if (messageObject.sender === "ChatGPT") {
                role = "assistant";
            } else {
                role = "user";
            }
            return { role: role, content: messageObject.message }
        });


        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,  // The system message DEFINES the logic of our chatGPT
                ...apiMessages // The messages from our chat with ChatGPT
            ]
        }

        await fetch("https://api.openai.com/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + apiKey,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(apiRequestBody)
            }).then((data) => {
                return data.json();
            }).then((data) => {
                console.log(data);
                setMessages([...chatMessages, {
                    message: data.choices[0]?.message?.content || "ChatGPT couldn't generate a response",
                    sender: "ChatGPT"
                }]);

                setIsTyping(false);
            });
    }

    return (
        <div className="position-relative">
            <div style={{ bottom: "20px", right: "20px", height: "400px", width: "300px", zIndex: "999" }} >
                <MainContainer>
                    <ChatContainer>
                        <MessageList
                            scrollBehavior="smooth"
                            typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
                        >
                            {messages.map((message, i) => {
                                return <Message key={i} model={message} />
                            })}
                        </MessageList>
                        <MessageInput placeholder="Type message here" onSend={handleSend} />
                    </ChatContainer>
                </MainContainer>
            </div>
        </div>
    )
}

export default ChatBoat
