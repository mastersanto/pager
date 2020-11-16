import React from 'react'

import './Chat.css';
import getData from '../../getData';
import useChat from '../../useChat';
import Sender from '../Sender/Sender';
import Messages from '../../Controls/Messages/Messages';
import Typers from '../../Controls/Typers/Typers';

const GIPHY_API_URL = 'https://api.giphy.com/v1/gifs/random';
const GIPHY_API_KEY = 'ktJkmpWs0jEhziOmJWLzDaQrJWOFmdCO';

const Chat = (props) => {
  // const { username } = props.match.params;
  const username = 'test!';
  const { typers, sendTypingStatus } = useChat(username);
  const { messages, sendTextMessage, sendImageMessage } = useChat(username);
  const [newMessage, setNewMessage] = React.useState('');

  const handleMessageChange = (event) => {
    sendTypingStatus(true);
    setNewMessage(event.target.value);

    setTimeout(() => {
      sendTypingStatus(false);
    }, 3000);
  };

  const handleSendMessage = async (event) => {
    console.log('>>>>>>> handleSendMessage');

    if (newMessage.includes('/giphy')) {
      const tag = newMessage.replace('/giphy ', '');
      const url = `${GIPHY_API_URL}?api_key=${GIPHY_API_KEY}&tag=${tag || ''}`;
      const response = await getData(url);
      sendImageMessage({
        url: response.data.image_url,
        alt: tag
      });

    } else {
      sendTextMessage(newMessage);
    }
    setNewMessage('');
  };

  const getTypers = () => Object.keys(typers).filter(typer => typers[typer] === true);

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