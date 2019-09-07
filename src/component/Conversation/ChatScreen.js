import React from 'react'
// import HeadInfo from './HeadInfo'
// import HeaderContainer from '../../container/HeaderContainer'
import HeaderContainer from '../../component/Conversation/HeadInfo'
// import ChatWindow from './ChatWindow'
// import ChatWindowContainer from '../../container/ChatWindowContainer'
import ChatWindowContainer from '../Conversation/ChatWindow'
// import TypingArea from './TypingArea'
import FooterContainer from '../../container/FooterContainer'

class ChatScreen extends React.Component {
  render () {
    return (
      <div className='chat-screen'>
        <HeaderContainer />
        <ChatWindowContainer />
        <FooterContainer />
      </div>
    )
  }
}

export default ChatScreen
