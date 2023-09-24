import React from "react";
import { askInputData, extractLastMessage } from "../../../public/backend/gptApi";


const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleQuestion = async (question) => {
    const botResponse = await askInputData(question);
    const botMessage = createChatBotMessage(extractLastMessage(botResponse));

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleQuestion,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
