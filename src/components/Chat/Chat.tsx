// // import axios from "axios";
// import { useEffect, useRef, useState } from "react";

// const Chat = () => {
//   const [messages, setMessages] = useState<any[]>([]);
//   const [userInput, setUserInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const messageEndRef: any = useRef(null);

//   // Simulated bot response (replace with your API call)
//   const getBotResponse = (message: any) => {
//     // Replace this with an API call to your chatbot
//     const botReplies: any = {
//       hello: "Hi there! How can I assist you?",
//       help: "Sure! Let me know what you need help with.",
//       bye: "Goodbye! Have a great day!",
//       default: "Sorry, I didn't understand that. Can you rephrase?",
//     };
//     return botReplies[message.toLowerCase()] || botReplies.default;
//   };

//   //   Also remove setTimeout() from sendMessage function when using this API

//   //   const getBotResponse = async (inputValue: any) => {
//   //     try {
//   //       const response: any = await axios.post(
//   //         `http://localhost:2200/public/proxy`,
//   //         {
//   //           inputValue,
//   //         }
//   //       );
//   //       return response.data.data; // Adjust based on your API response
//   //     } catch (error) {
//   //       console.error("Error fetching chatbot response:", error);
//   //       return "Oops! Something went wrong. Please try again.";
//   //     }
//   //   };

//   const sendMessage = () => {
//     if (isTyping) {
//       return;
//     }
//     if (userInput.trim()) {
//       const userMessage = { sender: "user", text: userInput };
//       setMessages((prev) => [...prev, userMessage]);

//       // Show typing indicator
//       setIsTyping(true);

//       // Simulate bot response
//       setTimeout(async () => {
//         const botMessage = {
//           sender: "bot",
//           text: await getBotResponse(userInput),
//         };
//         setMessages((prev) => [...prev, botMessage]);
//         setIsTyping(false); // Hide typing indicator
//       }, 1500);

//       setUserInput("");
//     }
//   };

//   // Auto-scroll to the latest message
//   useEffect(() => {
//     messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, isTyping]);

//   return (
//     <div className="h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-200">
//       {/* Chat Header */}
//       <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-5 text-lg font-bold text-center shadow-md rounded-b-lg">
//         Social Media Analysis Powered by Dev Dominators
//       </div>

//       {/* Messages Area */}
//       <div className="flex-1 overflow-y-auto p-5 space-y-4">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`flex ${
//               msg.sender === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             <div
//               className={`${
//                 msg.sender === "user"
//                   ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
//                   : "bg-gradient-to-r from-gray-300 to-gray-400 text-black"
//               } p-4 rounded-lg max-w-[80%] shadow-lg transition-all duration-300`}
//             >
//               {msg.text}
//             </div>
//           </div>
//         ))}

//         {isTyping && (
//           <div className="flex justify-start animate-pulse">
//             <div className="bg-gradient-to-r from-gray-300 to-gray-400 text-black p-4 rounded-lg max-w-[80%] flex items-center">
//               <div className="flex space-x-1">
//                 <span className="animate-bounce text-xl">•</span>
//                 <span className="animate-bounce delay-150 text-xl">•</span>
//                 <span className="animate-bounce delay-300 text-xl">•</span>
//               </div>
//               {/* <span className="ml-2 text-sm text-gray-600">
//                 AI is typing...
//               </span> */}
//             </div>
//           </div>
//         )}
//         <div ref={messageEndRef} />
//       </div>

//       {/* User Input */}
//       <div className="p-4 bg-white border-t border-gray-300 flex items-center gap-4 shadow-md">
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={userInput}
//           onChange={(e) => setUserInput(e.target.value)}
//           className="border rounded-full p-3 flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         />
//         <button
//           onClick={sendMessage}
//           className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-all duration-300"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chat;
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { API_BASE_URL } from "..";

export const Chat = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messageEndRef: any = useRef(null);

  // Simulated bot response (replace with your API call)
  // const getBotResponse = async (input_value: any) => {
  //   try {
  //     const response: any = await axios.post(
  //       `${API_BASE_URL}api/recommendations`,
  //       {
  //         input_value,
  //       }
  //     );
  //     return response.data.data; // Adjust based on your API response
  //   } catch (error) {
  //     console.error("Error fetching chatbot response:", error);
  //     return "Oops! Something went wrong. Please try again.";
  //   }
  // };

  const getBotResponse = (message: any) => {
    // Replace this with an API call to your chatbot
    const botReplies: any = {
      hello: "Hi there! How can I assist you?",
      help: "Sure! Let me know what you need help with.",
      bye: "Goodbye! Have a great day!",
      default: "Sorry, I didn't understand that. Can you rephrase?",
    };
    return botReplies[message.toLowerCase()] || botReplies.default;
  };

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
