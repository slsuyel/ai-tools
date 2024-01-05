import React, { useState } from 'react';
import ChatBoat from './ChatBoat';
import chatgpt from '../../assets/images/chatgpt-logo.png';
import close from '../../assets/images/close-icon-png.webp';
const ChatControl = () => {
    const [chatOpen, setChatOpen] = useState(false)
    const handleChatBtn = () => {
        setChatOpen(!chatOpen)
    }
    /*  className="bg-gradient-orange   border-0 rounded text-white"
     */
    return (
        <>
            <div>
                <button
                    className={`bg-transparent border-0 chat-img`}
                    style={{ position: "fixed", bottom: 41, right: 24 }}
                    onClick={handleChatBtn}>
                    {
                        chatOpen ? <img src={close} style={{ width: 55, borderRadius: "50%" }} /> : <img src={chatgpt} alt="" style={{ width: 55, borderRadius: "50%" }} />
                    }

                </button>
            </div>
            <div className='chatBoat'>
                {
                    chatOpen &&

                    <div className='align-items-baseline d-flex position-relative'>

                        <ChatBoat />
                        <button

                            style={{
                                background: "red",
                                color: "white",
                                borderRadius: "50%",
                                padding: "4px 9px",
                                fontSize: 18
                            }}
                            onClick={handleChatBtn}>Close</button>
                    </div>
                }
            </div>
        </>
    );
};

export default ChatControl;