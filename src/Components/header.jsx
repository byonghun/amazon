import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

export default class extends Component {
	render() {
		return (
			<AppBar position="static">
				<Toolbar>
					<IconButton color="blue" aria-label="Menu">
						{/* Company Logo */}
						<MenuIcon /> 
					</IconButton>
					<Typography variant="title" color="inherit">
					  {/* Company name */}
					  Title
					</Typography>
				</Toolbar>
			</AppBar>
		)
	}
}