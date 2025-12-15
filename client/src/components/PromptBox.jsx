import React, {useState} from "react";
import './PromptBox.css';


// Uses a callback function "Onsubmit" to send the prompt input back to parent component


function PromptBox({ onSubmit }) {
  const [inputVal, setInputVal] = useState("");
 
  function sendPrompt(e) {
    e.preventDefault();
    const trimmed = inputVal.trim();
    if (trimmed !== "") {
      onSubmit(trimmed);
      setInputVal("");
    }
  }
 
  return (
    <form onSubmit={sendPrompt} className="prompt-form">
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Ask me anything..."
        className="prompt-input"
      />
     
      <button type="submit" className="prompt-arrow-btn" aria-label="Send message">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path d="M12 4 L12 20 M12 4 L6 10 M12 4 L18 10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </form>
  );
}
 
export default PromptBox;
 