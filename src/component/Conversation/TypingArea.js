import React from 'react'
import { addNewMessage } from '../../action/conversationAction'
import axios from 'axios'

class TypingArea extends React.Component {
  constructor () {
    super()

    this.state = {
      newMessage: ''
    }
  }

  handleChange (event) {
    // const newMessage = event.target.value
    // this.setState(this.state.newMessage = event.target.value)
    this.setState({ newMessage: event.target.value })
    console.log('aaa', event.target.value)
  }

  handleSend () {
    this.props.dispatch(addNewMessage(this.state.newMessage))
    this.setState({ newMessage: '' })
  }

  createConversation (user) {
    axios.post('https://api.paywith.click/conversation/create/', {
      conversation_id: user.conversation_id,
      token: this.state.token
      // text
    })
      .then((response) => {
        console.log(response)
        // this.setState({ conversation_id: response.data.data.user.conversation_id })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    return (
      <div className='typing-area'>
        <div className='emoji'>
          <i className='fas fa-camera-retro' />
        </div>
        <input className='type'
          type='text'
          placeholder='type whatever you want ...'
          onChange={(event) => this.handleChange(event)}
        />
        <button className='send-icon'
          type='button'
          onClick={() => this.handleSend()}
        >
             Send
        </button>
      </div>
    )
  }
}

export default TypingArea
