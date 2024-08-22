import React, { useState } from 'react';
import PersonaSelection from './PersonaSelection';
import VoiceChat from './VoiceChat';
import { FaPaperclip, FaHeadset } from 'react-icons/fa';

const ChatInterface = () => {
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSelectPersona = (persona) => {
    setSelectedPersona(persona);
  };

  const fetchChatResponse = async (message) => {
    const url = 'https://cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com/v1/chat/completions';
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': 'bfc752120cmsh8332e41c4ea7dbdp1bd2c0jsnd1d0f4ed82bc',
        'x-rapidapi-host': 'cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content:`You are now acting as ${selectedPersona.name}. ${selectedPersona.description}`,
          },
          { role: 'user', content: message },
        ],
        model: 'gpt-4o',
        max_tokens: 100,
        temperature: 0.9,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result.choices[0].message.content; 
    } catch (error) {
      console.error(error);
      return 'Sorry, something went wrong. Please try again later.';
    }
  };

  const speakMessage = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
  };

  const handleSendMessage = async (message) => {
    if (message) {
      setMessages((prevMessages) => [...prevMessages, { text: message, from: 'user' }]);
      setLoading(true);

      const responseText = await fetchChatResponse(message);

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: responseText, from: 'bot' },
      ]);

      speakMessage(responseText); 
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col h-screen bg-gray-100 ">
      {!selectedPersona ? (
        <PersonaSelection onSelectPersona={handleSelectPersona} />
      ) : (
        <>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center opacity-50 p-4 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-700">{selectedPersona.name}</h2>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pt-24 px-6">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.from === 'user' ? 'text-right' : 'text-left'
                } mb-2`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    msg.from === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            {loading && <div className="text-center text-gray-600">Typing...</div>}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const message = e.target.message.value.trim();
              if (message) handleSendMessage(message);
              e.target.reset();
            }}
            className="p-4 bg-white flex items-center gap-2 shadow-md"
          >
            <button type="button">
              <FaPaperclip className="text-gray-500 hover:text-gray-700" />
            </button>
            <input
              type="text"
              name="message"
              placeholder="Type a message..."
              className="flex-1 border rounded-full px-4 py-2 focus:outline-none"
            />
            <VoiceChat onSendMessage={handleSendMessage} />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ChatInterface;
