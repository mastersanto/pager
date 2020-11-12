import React from 'react';
import { useParams } from 'react-router-dom';

import './Chat.css';
import useChat from '../../useChat';
import Sender from '../Sender/Sender';
import Messages from '../../Controls/Messages/Messages';

const Chat = (props) => {
  // const { username } = props.match.params;
  const { username } = useParams();
  // const username = 'test!'
  const { typers, sendTypingStatus } = useChat(username);
  const { messages, sendTextMessage } = useChat(username);
  const [newMessage, setNewMessage] = React.useState('');

  const handleNewMessageChange = (event) => {
    sendTypingStatus(true);
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendTextMessage(newMessage);
    setNewMessage('');
  };

  return (
      <div className='container chat'>
        <Messages
            messages={messages}
        />
        <Sender
            newMessage={newMessage}
            handleNewMessageChange={handleNewMessageChange}
            handleSendMessage={handleSendMessage}
        />
        <div className='chat-status'>
          People are typing... Paul is typing...
        </div>
      </div>
  );
};

export default Chat;