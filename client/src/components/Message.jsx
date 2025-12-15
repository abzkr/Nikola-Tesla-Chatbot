import React from "react";

function Message({ message }) {
    const isUser = message.sender === 'User';
    
    // Render avatar and message bubble with icon on left (Tesla) or right (User)

    return (
        <div style={{
            display: 'flex',
           // justifyContent: isUser ? 'flex-end' : 'flex-start',
            flexDirection: isUser ? 'row-reverse' : 'row',
            alignItems: 'flex-end',
            marginBottom: '15px',
            gap: '10px',
            padding: '0 10px'
        }}>
            {/* Avatar */}
            <div className="message-avatar" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: isUser ? '#6B7B9E' : '#e0e0e0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                overflow: 'hidden'
            }}>
                {isUser ? (
                    // Default user icon (simple circle with user initials or icon)
                    <img
                        src="/user_icon.jpeg"
                        alt="Nikola Tesla"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                ) : (
                    // Nikola Tesla icon using his image
                    <img
                        src="/nikola_head.png"
                        alt="Nikola Tesla"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                )}
            </div>

            {/* Message Bubble */}
            <div style={{
                maxWidth: '70%',
                padding: '12px 16px',
                borderRadius: '12px',
                backgroundColor: isUser ? '#6B7B9E' : '#f0f0f0',
                color: isUser ? 'white' : 'black',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}>
                <p style={{ margin: 0, marginBottom: '5px' }}>
                    {message.text}
                </p>
                <small style={{ 
                    fontSize: '11px', 
                    opacity: 0.7 
                }}>
                    {new Date(message.timestamp).toLocaleTimeString()}
                </small>
            </div>
        </div>
    );
}

export default Message;



export const createUserMessage = (text) => ({
    id: Date.now(),
    text: text,
    sender: 'User',
    timestamp: Date.now(),
});

export const createTeslaMessage = (text) => ({
    id: Date.now() + 1,
    text: text,
    sender: 'Nikola Tesla',
    timestamp: Date.now(),
});