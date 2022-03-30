import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = (props) => {
	return (
		<nav className='nav-bar'>
			<Link className='logo' to='/'>Home</Link>
		</nav>
	)
}

export default NavBar
