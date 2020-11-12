import React from 'react'

import './Messages.css'
import Message from '../Message/Message';

const Messages = (props) => {
  return (
      <div className='messages-container'>
        <ol className='messages'>
          {props.messages.map((message, i) => (
              <Message
                  key={i}
                  message={message}
              />
          ))}
        </ol>
      </div>
  )
}

export default Messages