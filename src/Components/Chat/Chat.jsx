import React from 'react';

import './Chat.css';
import useChat from '../../useChat';
import Sender from '../Sender/Sender';
import Messages from '../../Controls/Messages/Messages';
import Typers from '../../Controls/Typers/Typers';

const Chat = (props) => {
  const { username } = props.match.params;
  // const username = 'test!'
  const { typers, sendTypingStatus } = useChat(username);
  const { messages, sendTextMessage } = useChat(username);
  const [newMessage, setNewMessage] = React.useState('');

  const handleMessageChange = (event) => {
    console.log('handleMessageChange > event.target.value > ', event.target.value);
    sendTypingStatus(true);
    setNewMessage(event.target.value);

    setTimeout(() => {
      sendTypingStatus(false);
    }, 3000);
  };

  const handleSendMessage = () => {
    sendTextMessage(newMessage);
    setNewMessage('');
  };

  const getTypers = () => Object.keys(typers).filter(typer => typers[typer] === true);

  console.log('getTypers > ', getTypers());
  console.log('getTypers > ', typeof getTypers);

  return (
      <div className='container chat'>
        <Messages
            messages={messages}
        />
        <Sender
            newMessage={newMessage}
            handleMessageChange={handleMessageChange}
            handleSendMessage={handleSendMessage}
        />
        <Typers typers={getTypers()} />
      </div>
  );
};

export default Chat;