import config from './config';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css'


export default function ChatBot(activeButton){

  console.log(activeButton);
  return (
    <div style={{marginLeft:'16vw'}}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};