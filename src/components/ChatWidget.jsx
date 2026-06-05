import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hey! Welcome to Its Digital House. How can I help you scale your business today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    try {
      // Yeh aapke backend local python port par request hit karega
      const response = await fetch('http://127.0.0.1:8000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Connection lost with server.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[99999] font-sans">
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-slate-950 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#ee3444] transition-all transform active:scale-95"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="absolute bottom-18 right-0 w-[340px] sm:w-[380px] h-[480px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-slate-950 text-white flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
              <div>
                <h4 className="font-black text-xs uppercase tracking-wider">HouseBot</h4>
                <p className="text-[10px] text-slate-400">Digital Architecture Assistant</p>
              </div>
            </div>

            {/* Chat Messages Logs */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 text-[13px] font-semibold rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-[#ee3444] text-white rounded-tr-none' 
                      : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white text-slate-400 px-3 py-2 text-xs rounded-2xl shadow-sm italic animate-pulse">
                    Typing...
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Form Input Bar */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-100 flex gap-2 bg-white">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our services or portfolio..."
                className="flex-1 px-4 py-2 bg-slate-50 text-[13px] font-medium rounded-xl outline-none border border-transparent focus:border-slate-200 transition-colors"
              />
              <button type="submit" className="px-4 py-2 bg-slate-950 text-white rounded-xl font-bold text-xs uppercase hover:bg-[#ee3444] transition-colors">
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;