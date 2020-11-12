import React from 'react'

import './Message.css'

const Message = (props) => {
  const {
    message: {
      type,
      time,
      username,
      text,
      url,
      alt
    }
  } = props;
  const hour = new Date(time).toLocaleTimeString('en-US');

  return (
      <li className='message'>
        <img
            className='message-avatar'
            src={`https://ui-avatars.com/api/?name=${username}`}
        />
        <div className='message-container'>
          <div className='message-header'>
            <span className='message-user'>{username}</span>
            <span className='message-time'>{hour}</span>
          </div>
          <div className='message-body'>
            { type === 'text' ? text :
                <img className='message-image' src={url} alt={alt} />
            }
          </div>
        </div>
      </li>
  )
};

export default Message