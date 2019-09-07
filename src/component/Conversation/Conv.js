import React from 'react'
import { getUserName } from '../../action/conversationAction'
import Avatar from '@material-ui/core/Avatar'
import axios from 'axios'

class Conv extends React.Component {
  render () {
    const pic = require('../../pic3.jpg')
    return (
      <div
        className='conversation'
        onClick={() => this.props.dispatch(getUserName(this.props.name, this.props.lastName))}
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
                {this.props.text}
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
