import React from 'react'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'

class HeadInfo extends React.Component {
  render () {
    console.log('ppp', this.props)
    const pic = require('../../pic3.jpg')
    return (
      <div className='head-info'>
        <div className='head-pic'>
          <Avatar alt='pic' src={pic} className='picipic' />
        </div>
        <div className='name-mail'>
          <div className='head-name'>
            <span>{this.props.userName}</span>
          </div>
          <div className='email'>
            <span>start a conversation here ...</span>
          </div>
        </div>
        <i className='fa fa-volume-control-phone' style={{ alignSelf: 'flex-start' }} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userName: state.userName
})
const HeaderContainer = connect(mapStateToProps)(HeadInfo)
export default HeaderContainer

// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import { makeStyles } from '@material-ui/core/styles'
// import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
// import IconButton from '@material-ui/core/IconButton'

/** const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: '1'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: '1'
  }
}))
export default function HeadInfo () {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu' />
          <Typography variant='h6' className={classes.title}>
            <span>Aida</span>
          </Typography>
          <Typography >
            <span>Aida@yahoo.com</span>
          </Typography>
          <Button color='inherit'>log out</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}**/
