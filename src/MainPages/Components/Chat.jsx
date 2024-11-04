import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Chat.css';
import { MdClose } from 'react-icons/md';
import { IoMdSend } from "react-icons/io";
import { MdChat } from "react-icons/md";
import chat from '../../Assets/chat.svg';
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import bothead from '../../Assets/bothead.png'

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [visible, setVisible] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const setWelcomeMessage = () => {
    const welcomeMessages = [
      "Welcome to Suhana Beulah Hotels & Resorts!",
      "Contact us: +91 7793979849, arthi@tradesyndicate.in",
      "How can I assist you?",
    ];
    setMessages(welcomeMessages.map(msg => ({ botResponse: msg })));
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get('https://sbhr-back-1.onrender.com/api/v1/messages');
      const fetchedMessages = response.data;

      if (fetchedMessages.length === 0) {
        setWelcomeMessage();
      } else {
        setMessages(fetchedMessages);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async () => {
    if (!input) return;

    setMessages([...messages, { userMessage: input }]);
    setIsTyping(true);

    try {
      const response = await axios.post('https://sbhr-back-1.onrender.com/api/v1/message', { message: input });
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prevMessages => [
          ...prevMessages,
          { botResponse: response.data.response },
        ]);
        scrollToBottom();
      }, 2000);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setInput('');
  };

  const clearChat = async () => {
    try {
      await axios.delete('https://sbhr-back-1.onrender.com/api/v1/clear');
      setWelcomeMessage();
    } catch (error) {
      console.error("Error clearing chat:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleClick = () => {
    setVisible(!visible);
    if (!visible) {
      clearChat();
    }
  };

  const phoneNumber = '917793979849';
  const message = 'Hello!';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bot-container">
      <div className="bot-shortcut" onClick={handleClick}>{!visible ? <MdChat /> : <MdClose />}</div>
      <div className={visible ? "chat-container" : 'chat-container-inactive'}>
        <div className="chat-header">
          <div className='head-heading'><img  src={bothead} alt="" /><h1>SBHR</h1></div>
          <p className="typing-indicator">{isTyping ? "Typing..." : "Active now"}</p>
          <div onClick={() => { setVisible(false) }} className="clear-button"><MdClose /></div>
        </div>
        <img className='bot-bgm' src={chat} alt="" />
        <div className="messages-container">
          {messages.map((msg, index) => (
            <div key={index} className="message-container">
              {msg.userMessage && (
                <div className="message user-message">
                  <p className="message-text">{`${msg.userMessage}`}</p>
                </div>
              )}
              {msg.botResponse && (
                <div className="message bot-message">
                  <p className="message-text">{`${msg.botResponse}`}</p>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} /> 
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="chat-input"
          />
          <button onClick={sendMessage} className="send-button"><IoMdSend /></button>
        </div>
      </div>
      <div className={!visible ? "icon-chat-inactive" : "icon-chat"}>
        <a style={{ color: 'blue' }} href='tel:+91-7793979849'>
          <IoMdCall />
        </a>
        <a style={{ color: 'green' }} href={whatsappUrl} target='_blank' rel='noopener noreferrer'>
          <IoLogoWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default Chat;
