import React from 'react'
import ConversationContainer from '../../container/conversationContainer'
import { getConversationList } from '../../action/conversationAction'
import axios from 'axios'
import { connect } from 'react-redux'

class ConversationList extends React.Component {
  constructor () {
    super()
    this.state = {
      token: window.localStorage.getItem('token'),
      suggestUser: []
    }
  }

  componentDidMount () {
    axios.get('https://api.paywith.click/conversation/', {
      params: {
        token: this.state.token
      }
    })
      .then((response) => {
        console.log('111', response)
        this.props.dispatch(getConversationList(response.data.data.conversation_details))
      })
      .catch(function (error) {
        console.log(error)
      })
      .then(function () {
      // always executed
      })
  }

  handleSearch (event) {
    // const data = {
    //   token: this.state.token,
    //   query: event.target.value,
    //   size: 4
    // }
    const fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('query', event.target.value)
    fdata.append('size', 4)
    axios.post('https://api.paywith.click/explore/search/contacts/', fdata
    )
      .then((response) => {
        this.setState({ suggestUser: response.data.data.users })
        console.log(response)
        console.log('22211', this.state.suggestUser)
        // response.data.data.users.id
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  createConversationRequest (uid) {
    const fodata = new FormData()
    fodata.append('token', this.state.token)
    fodata.append('user_id', uid)
    axios.post('https://api.paywith.click/conversation/', fodata
    )
      .then((response) => {
        console.log('2222', response)
        console.log('545454', response.data.data.conversation_id)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    console.log('props', this.props)
    return (
      <div className='conversationList'>
        <input className='search'
          type='search'
          placeholder='searching...'
          onChange={(event) => this.handleSearch(event)}
        />
        { this.state.suggestUser.map((user, index) => {
          return (
            <p
              key={index}
              onClick={() => this.createConversationRequest(user.id)}
            >
              {user.email}
            </p>
          )
        })
        }
        <div className='d1'>
          <span>
            you can find your chats here!
          </span>
        </div>
        {/* <div className='addConv'
          // onClick={() => this.props.dispatch(addConversation(this.props.name))}
        >
          <span>
            +
          </span>
        </div> */}
        <div>
          {/* <ConversationContainer name='Aida' date='1/1' text='hi there!' num='5' />
          <ConversationContainer name='masi' date='2/3' text='lol' num='10' />
          <ConversationContainer name='arash' date='5/5' text='Hahaha' num='15' />
          <ConversationContainer name='Delaram' date='11/11' text='bye' num='18' /> */}
        </div>
        <div>
          {this.props.conversationList.map((item, index) => (
            <ConversationContainer
              key={index}
              name={item.id}
              lastName={item.lastName}
              text={item.latestMessage}
              num={item.unseenMessage}
            />
          )
          )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  conversationList: state.conversationList
})
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})
export default connect(mapStateToProps, mapDispatchToProps)(ConversationList)
