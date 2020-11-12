import React from 'react'

import './Login.css'
import Input from '../../Controls/Input/Input'
import Button from '../../Controls/Button/Button'

const Login = () => {
  const [username, setUserName] = React.useState('')

  const handleUserNameChange = (event) => {
    setUserName(event.target.value)
  }

  return (
      <div className='container login'>
        <h1 className='login-title'>Join Chat</h1>
        <label htmlFor='username' className='login-label'>
          Please enter you username
        </label>
        <Input
            className='login-input'
            id='username'
            name='username'
            value={username}
            onChange={handleUserNameChange}
        />
        <Button
            className='login-btn'
            path={`/${username}`}
        />
      </div>
  )
}

export default Login