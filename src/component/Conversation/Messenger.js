import React from 'react'
import ConversationList from './ConversationList'
// import ConversationListContainer from '../../container/ConversationListContainer'
import ChatScreen from './ChatScreen'

class Messenger extends React.Component {
  render () {
    return (
      <div className='chat'>
        <ConversationList />
        <ChatScreen />
      </div>
    )
  }
}
export default Messenger
