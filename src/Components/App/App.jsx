import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css'
import Login from '../Login/Login'
import ChatRoom from '../Chat/Chat'

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
