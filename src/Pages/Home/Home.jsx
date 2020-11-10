import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

const Home = () => {
  const [username, setUserName] = React.useState('')

  const handleUserNameChange = (event) => {
    setUserName(event.target.value)
  }

  return (
      <div className='home-container'>
        <input
            type='text'
            placeholder='User'
            value={username}
            onChange={handleUserNameChange}
            className='text-input-field'
        />
        <Link to={`/${username}`} className='enter-room-button'>
          Join room
        </Link>
      </div>
  )
}

export default Home