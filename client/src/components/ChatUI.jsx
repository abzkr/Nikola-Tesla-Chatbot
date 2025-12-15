import React from 'react';
import MessageList from './MessageList.jsx';
import './ChatUI.css';

const ChatUI = ({ messages, isTyping }) => {
  return (
    <div className="chat-container">
      
      <div className="chat-header">
        <div className="header-content">
          <img
            src="/nikola_head.png"  
            alt="Nikola Tesla"
            className="header-logo"
          />

          <div className="header-text">
            <h1>Nikola Tesla</h1>
            <div className="online-text">
              <span className="online-status">●</span>
              Online
            </div>
          </div>
        </div>
      </div>


      <div className="chat-body">
        <MessageList messages={messages} />

        {isTyping && (
          <div className="typing-indicator">
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
          </div>
        )}
      </div>

    </div>
  );
};

export default ChatUI;