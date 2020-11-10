import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import './index.css'
import Home from './Pages/Home/Home'
import ChatRoom from './Pages/Chat/Chat'

function App () {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:username' component={ChatRoom} />
        </Switch>
      </Router>
  )
}

export default App
