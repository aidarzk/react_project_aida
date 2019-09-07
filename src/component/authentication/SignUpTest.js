import React from 'react'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import { Box } from '@material-ui/core'
import Fab from '@material-ui/core/Fab'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import axios from 'axios'

function handleRequest () {
  if (this.state.password === this.state.confirmPassword) {
    axios.post('https://api.paywith.click/auth/signup/', {
      email: this.state.email,
      password: this.state.password
    })
      .then(function (response) {
        console.log('data:', response.data)
        window.localStorage.setItem('token', response.data.token)
      })
      .catch(function (error) {
        console.log(error)
      })
  } else {
    this.setState({ error: 'invalid password' })
  }
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.red
    }
  },
  paper: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    justifyContent: 'center',
    border: '1 px solid #bdbdbd',
    borderRadius: '3vh',
    alignSelf: 'center',
    backgroundColor: '#826adb',
    width: '45vh'
  },
  avatar: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  fab: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#f55385',
    color: '#fff'
  },
  Link: {
    margin: theme.spacing(1),
    color: '#fff'
  },
  Note: {
    color: '#524489',
    fontSize: 'small'
  }
}))

export default function SignUp () {
  const classes = useStyles()

  // this.state = {

  //   email: '',
  //   password: '',
  //   confirmPassword: ''
  // }

  function handleChange (event) {
    console.log('sss', event.target.value)
  }

  return (
    <Grid container
      className={classes.paper}
      maxWidth='xs'
      justify='center'
      alignItems='center'
      direction='column'
      alignSelf='center'
      border='1px black solid'
      margin-left='30vh'
    >
      <Avatar
        alt='SignUpLogo' src='./signUpLogo.jpg'
        className={classes.avatar}
      />
      <Box>
        <span>
          For joining us enter your information and click on "creat account" button.
        </span>
      </Box>
      <TextField
        onChange={(event) => handleChange(event)}
        id='standard-uncontrolled'
        label='email'
        margin='normal'
      />
      <TextField
        // onChange={(event) => handleChange(event)}
        id='standard-uncontrolled'
        label='password'
        margin='normal'
      />
      <TextField
        // onChange={(event) => handleChange(event)}
        id='standard-uncontrolled'
        label='confirm password'
        margin='normal'
      />
      <Fab variant='extended'
        aria-label='delete'
        className={classes.fab}
        onClick={() => handleRequest()}>
      Create account
      </Fab>
      <Box className={classes.Note}>
      by clicking on "creat account, you agree to
        <Link
          href='google.com'
          className={classes.Link}
        > terms and conditions</Link>
      </Box>
    </Grid>
  )
}
