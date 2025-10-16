
import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";

const cardClass =
  "bg-white border border-gray-200 border-opacity-50 rounded-2xl shadow-lg shadow-purple-100/40 p-6 flex flex-col gap-2 min-h-[300px] max-w-2xl mx-auto transition hover:shadow-xl hover:border-purple-300";

const initialMessages = [
  {
    sender: "ai",
    text: "Hi! I’m Nova, your AI study assistant. How can I help you today?",
  },
];

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { sender: "user", text: input },
      // Simulate AI response
      { sender: "ai", text: "(AI response coming soon...)" },
    ]);
    setInput("");
  };

  return (
    <div className="min-h-[80vh] w-full px-4 py-8 max-w-4xl mx-auto bg-gradient-to-br from-purple-50 via-white to-blue-50 flex flex-col gap-8 items-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-purple-800 mb-2 tracking-tight drop-shadow-sm flex items-center gap-2">
        <FaRobot className="text-purple-700 text-3xl" /> AI Study Assistant
      </h1>
      <div className={cardClass}>
        <div className="flex-1 overflow-y-auto max-h-80 mb-4 pr-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-2xl shadow text-sm max-w-xs md:max-w-md break-words ${
                  msg.sender === "ai"
                    ? "bg-purple-50 border border-purple-100 text-purple-800 flex items-center gap-2"
                    : "bg-blue-100 border border-blue-200 text-blue-900"
                }`}
              >
                {msg.sender === "ai" && <FaRobot className="text-purple-400 mr-1" />}
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>
        <form className="flex items-center gap-2 mt-2" onSubmit={handleSend}>
          <input
            type="text"
            className="flex-1 px-4 py-2 border border-purple-200 rounded-full focus:ring-2 focus:ring-purple-200 focus:outline-none text-sm"
            placeholder="Type your message…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            className="bg-purple-700 text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-purple-800 transition flex items-center gap-2"
            title="Send"
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIAssistant;
