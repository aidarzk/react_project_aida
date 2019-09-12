import React from 'react'
import { addNewMessage } from '../../action/conversationAction'
import axios from 'axios'
import { connect } from 'react-redux'

class TypingArea extends React.Component {
  constructor () {
    super()

    this.state = {
      newMessage: '',
      token: window.localStorage.getItem('token')
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
    this.createMessage()
  }

  createMessage () {
    console.log('propshaha', this.props)
    const foodata = new FormData()
    foodata.append('token', this.state.token)
    foodata.append('conversation_id', this.props.conversationId)
    foodata.append('text', this.state.newMessage)
    axios.post('https://api.paywith.click/conversation/create/', foodata
    )
      .then((response) => {
        console.log('4587', response)
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

const mapStateToProps = (state) => ({
  conversationId: state.conversationId
})
export default connect(mapStateToProps)(TypingArea)
