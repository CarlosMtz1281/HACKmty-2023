import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage(`Holaa, soy Banorte Coach, ¿en qué puedo ayudarte?`),
  ],
  botName: "BanCoach",
  placeholderText: "Escribe tu duda aquí...",
  headerText: "Banorte Coach",
};

export default config;
