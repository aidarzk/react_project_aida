import React from 'react'
import Button from '@material-ui/core/Button'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import validate from '../../Validation/ValidateFunction'
import Avatar from '@material-ui/core/Avatar'
import { withRouter } from 'react-router'

class login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fields: {
        email: '',
        password: ''
      },
      errors: {
        email: '',
        password: ''
      }
    }
  }

  handleChange (event) {
    const name = event.target.name
    const changeFields = this.state.fields
    changeFields[name] = event.target.value
    this.setState({ fields: changeFields })
    // const name = event.target.name
    // this.setState({ [name]: event.target.value })
    // console.log(this.state.email)
  }

  handleError () {
    const errors = {
      email: validate('email', this.state.fields.email),
      password: validate('password', this.state.fields.password)
    }
    console.log('errorrr', errors)
    this.setState({ errors })
  }

  handleRequest () {
    axios.post('https://api.paywith.click/auth/signin/', {
      email: this.state.fields.email,
      password: this.state.fields.password
    })
      .then((response) => {
        console.log('data:', response.data)
        window.localStorage.setItem('token', response.data.data.token)
        window.localStorage.setItem('id', response.data.data.profile.id)
        this.props.history.push('/messenger/')
      })
      .catch(function (errors) {
        console.log(errors)
      })
  }

  render () {
    return (
      <div className='bodyContainer'>
        <div>
          {/* <img className='loginLogo_img' src='login_logo.jpg' alt='' /> */}
          <Avatar alt='pic' src='signUpLogo.jpg' className='loginLogo_img' />
        </div>
        <div className='loginNote'>
          <span>
            Please enter your account's information and click on "login" button.
          </span>
        </div>
        <div className='entryInput'>
          <input className='entryInfo'
            type='text'
            placeholder='email'
            name='email'
            onChange={(event) => this.handleChange(event)}
          />
          {/* <input className='entryInfo'
            type='text'
            placeholder='username'
            name='username'
            onChange={event => this.handleChange(event)}
          /> */}
          <input className='entryInfo'
            type='password'
            placeholder='password'
            name='password'
            onChange={(event) => this.handleChange(event)}
          />
        </div>
        <div className='loginButton'>
          <Button
            onClick={() => this.handleRequest()}
          >
            Login
            {/* <Link to='/Messenger/'>Login</Link> */}
          </Button>
        </div>
      </div>
    )
  }
}

export default withRouter(login)
