import React from 'react'
import ConversationContainer from '../../container/conversationContainer'
import { getConversationList, getConversationId } from '../../action/conversationAction'
import axios from 'axios'
import { connect } from 'react-redux'

class ConversationList extends React.Component {
  constructor () {
    super()
    this.state = {
      token: window.localStorage.getItem('token'),
      suggestUser: [],
      myId: window.localStorage.getItem('id')
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

  createConversationRequest (id) {
    const fodata = new FormData()
    fodata.append('token', this.state.token)
    fodata.append('user_id', id)
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
    console.log('convL', this.props.conversationList)
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
          {/* {this.props.conversationList.map((item, index) => {
            if (item.id !== 299) {
              return (
                <ConversationContainer
                  key={index}
                  name={item.id}
                  date={item.latest_message_date}
                  text={item.latest_message}
                  num={item.unseen_messages[0]}
                />
              )
            }
          }
          )
          } */}

          {this.props.conversationList.map((item, index) => {
            return (
              item.users.map((user, indexss) => {
                if (user.id != this.state.myId) {
                  return (
                    <ConversationContainer
                      key={indexss}
                      name={user.email}
                      date={item.latest_message_date}
                      text={item.latest_message}
                      conversation_id={item.id}
                      num={item.unseen_messages[0]}
                    />
                  )
                } else return null
              })
            )
          }
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
