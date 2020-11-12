import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css'
import Login from './Components/Login/Login'
import ChatRoom from './Components/Chat/Chat'

function App () {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/:username' component={ChatRoom} />
        </Switch>
      </Router>
  )
}

export default App
