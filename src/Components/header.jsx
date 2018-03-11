import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import AccountCircle from 'material-ui-icons/AccountCircle'
import Menu, { MenuItem } from 'material-ui/Menu'

export default class extends Component {
  state = { anchorEl: null, open: false }
  render() {
    const { anchorEl } = this.state
    return (
      <div style={styles.display}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              {/* Company Logo */}
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" style={styles.flex}>
              {/* Company name */}
              Title
            </Typography>
            {/* When authenticated show profile */}
            <IconButton
              aria-owns='menu-appbar'
              aria-haspopup="true"
              onClick={() => console.log('clicked')}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              anchorEl={anchorEl}
              open={anchorEl}
              onClose={() => console.log('close')} >
              <MenuItem onClick={() => console.log('menu')}>Profile</MenuItem>
              <MenuItem onClick={() => console.log('account')}>My Account</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const styles = {
  display: {
    display: 'flex'
  },
  flex: {
    flex: 1
  }
}
