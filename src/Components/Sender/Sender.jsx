import React from 'react';

import './Sender.css';
import Input from '../../Controls/Input/Input';

const Sender = (props) => {
  const {
    newMessage,
    handleMessageChange,
    handleSendMessage
  } = props;

  return (
      <div className='sender'>
        <Input
            className='sender-input'
            id='sender-input'
            name='sender-input'
            placeholder='Message'
            value={newMessage}
            onChange={handleMessageChange}
        />
        <button
            onClick={handleSendMessage}
            className='sender-btn'>
          Send
        </button>
      </div>
  );
};

export default Sender;