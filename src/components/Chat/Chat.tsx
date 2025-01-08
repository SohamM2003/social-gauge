import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { API_BASE_URL } from "..";
import { toast } from "react-toastify";

export const Chat = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messageEndRef: any = useRef(null);

  // Simulated bot response (replace with your API call)
  const getBotResponse = async (input_value: any) => {
    try {
      const response: any = await axios.post(
        `${API_BASE_URL}api/recommendations`,
        {
          input_value,
        }
      );
      return response.data.data;
    } catch (error) {
      toast.warning(
        "Due to reaching the maximum number of API requests, we are currently unable to process additional data. Please try again later."
      );
      console.error("Error fetching chatbot response:", error);
      return "Oops! Something went wrong. Please try again.";
    }
  };

  // const getBotResponse = (message: any) => {
  //   // Replace this with an API call to your chatbot
  //   const botReplies: any = {
  //     hello: "Hi there! How can I assist you?",
  //     help: "Sure! Let me know what you need help with.",
  //     bye: "Goodbye! Have a great day!",
  //     default: "Sorry, I didn't understand that. Can you rephrase?",
  //   };
  //   return botReplies[message.toLowerCase()] || botReplies.default;
  // };

  const sendMessage = () => {
    if (isTyping) {
      return;
    }
    if (userInput.trim()) {
      const userMessage = { sender: "user", text: userInput };
      setMessages((prev) => [...prev, userMessage]);

      // Show typing indicator
      setIsTyping(true);

      // Simulate bot response
      setTimeout(async () => {
        const botMessage = {
          sender: "bot",
          text: await getBotResponse(userInput),
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false); // Hide typing indicator
      }, 1500);

      setUserInput("");
    }
  };

  // Auto-scroll to the latest message
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="h-screen flex flex-col bg-white text-black border-2 border-black">
      {/* Chat Header */}
      <div className="bg-white text-black p-5 text-lg font-manga text-center tracking-wider border-b-2 border-black">
        Chat Box
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`${
                msg.sender === "user"
                  ? "bg-white text-black border-2 border-black"
                  : "bg-white text-black border-2 border-gray-600"
              } p-4 rounded-lg max-w-[80%] shadow-md`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start animate-pulse">
            <div className="bg-white text-black p-4 rounded-lg max-w-[80%] flex items-center border-2 border-gray-600">
              <div className="flex space-x-1">
                <span className="animate-bounce text-xl">•</span>
                <span className="animate-bounce delay-150 text-xl">•</span>
                <span className="animate-bounce delay-300 text-xl">•</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messageEndRef} />
      </div>

      {/* User Input */}
      <div className="p-4 bg-white border-t-2 border-black flex items-center gap-4">
        <input
          type="text"
          placeholder="Type a message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="border border-black rounded-full p-3 flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-black"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-white text-black border-2 border-black px-6 py-3 rounded-full shadow-md hover:scale-105 transition-all duration-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};
