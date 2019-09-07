import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import logo from './logo.svg'
import Messenger from './component/Conversation/Messenger'
import './App.css'
import SignUp from './component/authentication/SignUp'
// import SignUpTest from './component/authentication/SignUpTest'
import Login from './component/authentication/login'
import Profile from '../src/component/authentication/Profile'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import conversation from './reducer/conversationReducer'
import logger from 'redux-logger'

const store = createStore(conversation,
  applyMiddleware(logger)
)

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Route path='/' exact component={Login} />
          <Route path='/signup/' exact component={SignUp} />
          <Route path='/messenger/' component={Messenger} />
          <Route path='/Profile/' component={Profile} />
        </Router>
      </Provider>
    )
  }
}
export default App
