import React from 'react'

import './Typers.css'

const Typers = (props) => {
  const { typers } = props;

  return (
      <div className='typers'>
        { typers.length ?
            (typers.length === 1 ? `${typers[0]} is typing...` : 'People are typing...')
        : '' }
      </div>
  )
};

export default Typers