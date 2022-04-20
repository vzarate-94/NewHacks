import React from 'react'
import { Link } from 'react-router-dom'
import Hacks from '../../assets/logos/Hacks.png'
import './NavBar.css'

const NavBar = (props) => {
	return (
		<nav className='nav-bar'>
			<Link className='logo' to='/'><img src={Hacks} alt="" /></Link>
		</nav>
	)
}

export default NavBar
