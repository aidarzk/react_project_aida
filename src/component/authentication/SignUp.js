import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'

class SignUp extends React.Component {
  constructor () {
    super()

    this.state = {
      fields: {
        email: '',
        confirmPassword: '',
        password: ''
      },
      errors: {
        email: '',
        confirmPassword: '',
        password: ''
      }
    }
  }

  handleChange (event) {
    const name = event.target.name
    this.setState({ [name]: event.target.value })
  }

  // changin email in fields object with spread technic
  handleEmail (event) {
    this.setState({ ...this.state, fields: { ...this.state.fields, email: event.target.value } })
  }

  handleRequest () {
    if (this.state.password === this.state.confirmPassword) {
      axios.post('https://api.paywith.click/auth/signup/', {
        email: this.state.email,
        password: this.state.password
      })
        .then((response) => {
          console.log('data:', response.data)
          window.localStorage.setItem('token', response.data.token)
          this.props.history.push('/messenger/')
        })
        .catch(function (error) {
          console.log(error)
        })
    } else {
      this.setState({ error: 'invalid password' })
    }
  }

  render () {
    var logoImg = require('../authentication/signUpLogo.jpg')
    return (
      <div className='signUpBody'>
        <div className='container'>
          <div>
            <img className='signUpLogo_img' src={logoImg} alt='signUpLogo' />
          </div>
          <div className='entryNote'>
            <span>For joining us enter your information and click on "creat account" button.</span>
          </div>
          <div className='entryInput'>
            <input className='entryInfo'
              type='text'
              placeholder='email'
              name='email'
              onChange={(event) => this.setState({ email: event.target.value })}
            />
            <input className='entryInfo'
              type='password'
              placeholder='password'
              name='password'
              onChange={event => this.handleChange(event)}
            />
            <input className='entryInfo'
              type='password'
              placeholder='confirm password'
              name='confirmPassword'
              onChange={event => this.handleChange(event)}
            />
          </div>
          <div className='registerButton'>
            <button className='submit'
              onClick={() => this.handleRequest()}
            >
              create account
            </button>
          </div>
          <div className='terms'>
            <p>by clicking on "creat account, you agree to <a className='termsLink' href='www.google.com'>terms and conditions</a>.</p>
          </div>
        </div>
      </div>

    )
  }
}

export default withRouter(SignUp)
