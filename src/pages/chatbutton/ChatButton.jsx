
import React, { useState, useEffect, useRef } from "react";
import styles from "./ChatButton.module.css";
import { FaCommentDots } from "react-icons/fa";

const ChatButton = () => {
  const [showChat, setShowChat] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const speakText = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  const sendMessage = () => {
    if (!userInput.trim()) return;

    const userMsg = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, userMsg]);
    const input = userInput.toLowerCase();
    setUserInput("");

    // Simple frontend "AI"
    let botReply = "";

    const greetings = ["hi", "hello", "gm", "ge", "gn"];
    if (greetings.includes(input)) {
      botReply = "Hello! How can I help you today?";
    } else if (input.includes("membership") || input.includes("plan")) {
      botReply = (
        <>
          Here are our membership plans:
          <div className={styles.membershipBtn}>
            <a href="https://devconsoftware.com/membership/basic" target="_blank" rel="noopener noreferrer">
              Basic Plan
            </a>
          </div>
          <div className={styles.membershipBtn}>
            <a href="https://devconsoftware.com/membership/pro" target="_blank" rel="noopener noreferrer">
              Pro Plan
            </a>
          </div>
          <div className={styles.membershipBtn}>
            <a href="https://devconsoftware.com/membership/enterprise" target="_blank" rel="noopener noreferrer">
              Enterprise Plan
            </a>
          </div>
        </>
      );
    } else {
      botReply = (
        <>
          I’m here to help! For more information, check our membership plans or contact us at{" "}
          <a href="mailto:Akhilbharatiyakunbimandal12@gmail.com">Akhilbharatiyakunbimandal12@gmail.com</a>.
        </>
      );
    }

    setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    speakText(typeof botReply === "string" ? botReply : "Please check the membership plans or contact us.");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={styles.container}>
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className={styles.chatIcon}
          aria-label="Open chat"
        >
          <FaCommentDots size={28} />
        </button>
      )}

      {showChat && (
        <div className={`${styles.chatAi} ${minimized ? styles.minimized : ""}`}>
          <div className={styles.chatHeader}>
            <span>ChatBot Assistant</span>
            <div>
              <button
                onClick={() => setMinimized(!minimized)}
                className={styles.headerBtn}
                aria-label={minimized ? "Maximize chat" : "Minimize chat"}
              >
                {minimized ? "🔼" : "🔽"}
              </button>
              <button
                onClick={() => setShowChat(false)}
                className={styles.headerBtn}
                aria-label="Close chat"
              >
                ❌
              </button>
            </div>
          </div>

          {!minimized && (
            <>
              <div className={styles.chatBody}>
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`${styles.chatMessage} ${
                      msg.sender === "user" ? styles.user : styles.bot
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className={styles.chatFooter}>
                <textarea
                  rows={2}
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  className={styles.chatInput}
                />
                <button onClick={sendMessage} className={styles.sendBtn}>
                  Send
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatButton;
