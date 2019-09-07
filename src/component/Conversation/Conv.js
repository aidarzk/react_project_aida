import React from 'react'
import { getUserName } from '../../action/conversationAction'
import Avatar from '@material-ui/core/Avatar'
import axios from 'axios'

class Conv extends React.Component {
  constructor () {
    super()
    this.state = {
      token: window.localStorage.getItem('token')
    }
  }

  clickHandler () {
    console.log('uuuuuu')
    this.props.dispatch(getUserName(this.props.name, this.props.lastName))
    this.getMessageList()
  }

  getMessageList () {
    console.log('hiiiii')
    const fordata = new FormData()
    fordata.append('token', this.state.token)
    fordata.append('conversation_id', 450)
    fordata.append('size', 4)
    fordata.append('date', 1)
    axios.post('https://api.paywith.click/conversation/details/', fordata
    )
      .then((response) => {
        this.setState({ suggestUser: response.data.data.users })
        console.log(response)
        console.log('222', this.state.suggestUser)
        // response.data.data.users.id
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    const pic = require('../../pic3.jpg')
    // console.log('prrrr', this.props)
    return (
      <div
        className='conversation'
        onClick={() => this.clickHandler()}
      >
        {/* <img className='pic' src={pic} alt='pic' /> */}
        <Avatar alt='pic' src={pic} className='picipic' />
        <div
          className='info'
        >
          <div className='name-date'>
            <div className='name'>
              <span>
                {this.props.name}
              </span>
            </div>
            <div className='date'>
              <span>
                {this.props.date}
              </span>
            </div>
          </div>
          <div className='text-num'>
            <div className='text'>
              <span>
                {this.props.text}...
              </span>
            </div>
            <div className='num'>
              <span>
                {this.props.num}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Conv
