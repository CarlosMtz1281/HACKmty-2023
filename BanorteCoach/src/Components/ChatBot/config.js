import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage(`Holaa, soy Banorte Coach, ¿en qué puedo ayudarte?`),
  ],
  botName: "BanCoach",
  placeholderText: "Escribe tu duda aquí...",
  headerText: "Banorte Coach",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#ec0029",
    },
    chatButton: {
      backgroundColor: "#ec0029",
    },
    //change width to 100%
    reactChatbotKitChatContainer: {
      width: 800,

    }

  },
};

export default config;
