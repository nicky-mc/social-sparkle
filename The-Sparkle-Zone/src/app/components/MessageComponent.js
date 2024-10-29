
// /src/app/components/MessageComponent.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MessageComponent({ userId, chatPartnerId }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get(`/api/messages/retrieve?userId=${userId}&chatPartnerId=${chatPartnerId}`);
        setMessages(data.messages);
      } catch (error) {
        console.error("Error retrieving messages:", error);
      }
    };
    fetchMessages();
  }, [userId, chatPartnerId]);

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;
    try {
      await axios.post('/api/messages/send', { senderId: userId, receiverId: chatPartnerId, content: newMessage });
      setMessages([...messages, { sender_id: userId, content: newMessage, timestamp: new Date() }]);
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="chat-container">
      <h2>Chat</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender_id === userId ? "sent" : "received"}>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
