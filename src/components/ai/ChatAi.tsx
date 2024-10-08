"use client";
import { useState } from "react";
import Image from "next/image";
import styles from './Chat.module.css'; // Custom CSS for styling

const Chat = () => {
    const [messages, setMessages] = useState([
        { from: "AI", content: "Hello 👋, I'm your AI Assistant. How can I help you today?" },
    ]);

    const handleSend = (message: string) => {
        if (message.trim()) {
            setMessages([...messages, { from: "User", content: message }]);
        }
    };

    return (
        <div className={styles.chatContainer}>
            {/* Glowing logo */}
            <div className={styles.logoContainer}>
                <Image
                    src="/gemini.png" // Replace with your own logo
                    alt="AI Assistant Logo"
                    width={120}
                    height={120}
                    className={`styles.logo -z-20`}
                />
            </div>

            {/* Chat Box */}
            <div className={styles.chatBox}>
                {messages.map((msg, index) => (
                    <div key={index} className={msg.from === "AI" ? styles.aiMessage : styles.userMessage}>
                        {msg.content}
                    </div>
                ))}
            </div>

            {/* Input Area */}
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Ask a question..."
                    className={styles.input}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleSend((e.target as HTMLInputElement).value);
                    }}
                />
                <button className={styles.sendButton}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
