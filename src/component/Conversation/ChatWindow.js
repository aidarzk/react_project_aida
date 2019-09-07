import React from 'react'
import { connect } from 'react-redux'

class ChatWindow extends React.Component {
  render () {
    console.log('jjj', this.props.messageList[0].text)
    return (
      <div className='chat-window'>
        {
          this.props.messageList.map((item, index) => {
            if (item.sender === 1) {
              return (
                <div
                  className='sender'
                  key={index}
                >
                  <span>
                    {item.text}
                  </span>
                </div>
              )
            } else {
              return (
                <div
                  className='receiver'
                  key={index}
                >
                  <span>
                    {item.text}
                  </span>
                </div>
              )
            }
          }
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  messageList: state.messageList
})

const ChatWindowContainer = connect(mapStateToProps)(ChatWindow)

export default ChatWindowContainer
