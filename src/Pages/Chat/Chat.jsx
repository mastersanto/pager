import React from 'react';

import './Chat.css';
import useChat from '../../useChat';

const Chat = (props) => {
  const { username } = props.match.params;
  const { typers, sendTypingStatus } = useChat(username);
  const { messages, sendTextMessage } = useChat(username);
  const [newMessage, setNewMessage] = React.useState('');

  console.log('>>>>>>>> CHAT')
  console.log({ typers })
  console.log({ messages })

  const handleNewMessageChange = (event) => {
    sendTypingStatus(true);
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendTextMessage(newMessage);
    setNewMessage('');
  };

  return (
      <div className='chat-room-container'>
        <h1 className='room-name'>Room: {username}</h1>
        <div className='messages-container'>
          <ol className='messages-list'>
            {messages.map((message, i) => (
                <li
                    key={i}
                    className={`message-item ${
                        message.ownedByCurrentUser ? 'my-message' : 'received-message'
                    }`}
                >
                  {message.username}<br />
                  {message.text}
                </li>
            ))}
          </ol>
        </div>
        <textarea
            value={newMessage}
            onChange={handleNewMessageChange}
            placeholder='Write message...'
            className='new-message-input-field'
        />
        <button onClick={handleSendMessage} className='send-message-button'>
          Send
        </button>
      </div>
  );
};

export default Chat;