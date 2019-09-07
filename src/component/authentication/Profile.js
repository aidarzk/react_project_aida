import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
// import validate from '../../Validation/ValidateFunction'
import axios from 'axios'

function Profile () {
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    country: ''
  })
  const [token] = useState(window.localStorage.getItem('token'))
  console.log('fff', fields)
  useEffect(() => {
    console.log('===')
    axios.post('https://api.paywith.click/auth/profile/', {
      token: token,
      description: 'my bio',
      user_type: 'organization',
      phone_number: '989381442322',
      avatar: '',
      location_lat: '43',
      location_long: '-79',
      mobile_number: '989381442322',
      name: 'Donald Trump',
      website: 'https://trump.gov.ir',
      country_code: 'CA',
      address: 'Whitehouse'
    })
      .then((response) => {
        console.log('data:', response.data)
        // window.localStorage.setItem('token', response.data.data.token)
      })
      .catch(function (errors) {
        console.log(errors)
      })
  })

  // const [errors, setErrors] = useState({
  //   email: '',
  //   password: ''
  // })

  return (
    <div
      className='profileInput'
    >
      <TextField
        id='standard-uncontrolled'
        label='firstName'
        margin='normal'
        onChange={(e) => setFields({
          ...fields,
          firstName: e.target.value
        })}
      />
      <TextField
        id='standard-uncontrolled'
        label='lastName'
        margin='normal'
        onChange={(e) => setFields({
          ...fields,
          lastName: e.target.value
        })}
      />
      <TextField
        id='standard-uncontrolled'
        label='email'
        margin='normal'
        onChange={(e) => setFields({
          ...fields,
          email: e.target.value
        })}
      />
      <TextField
        onChange={(e) => setFields({
          ...fields,
          password: e.target.value
        })}
        id='standard-uncontrolled'
        label='password'
        margin='normal'
      />
      <TextField
        onChange={(e) => setFields(e.target.value)}
        id='standard-uncontrolled'
        label='country'
        margin='normal'
      />
      <Fab variant='extended'
        aria-label='delete'
        // onClick={() => setErrors(
        //   ...errors,
        //   validate('error', errors)
        //   // validate('password', fields.password)
        // )}
      >
      Create account
      </Fab>
    </div>
  )
}

export default Profile
