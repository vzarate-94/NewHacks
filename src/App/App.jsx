import React, { useState, useEffect } from 'react'
import { Switch, Route, } from 'react-router-dom'
import './App.css'

// services
import { getUser, logout } from '../services/authService'

// pages + components
import NavBar from '../components/NavBar/NavBar'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import Landing from '../pages/Landing/Landing'
import Users from '../pages/Users/Users'




const App = () => {
	const [currentUser, setCurrentUser] = useState()
	const [authenticated, setAuthenticated] = useState(false)
  const [toggleFeed, setToggleFeed] = useState(true)

	const handleSignupOrLogin = async () => {
    const user = getUser()
    setCurrentUser(user)
    setAuthenticated(true)
  }
	
	const handleLogout = () => {
		logout()
		setCurrentUser(null)
		setAuthenticated(false)
		setToggleFeed(true)
	}


	useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token")
      if (token) {
        try {
          const user = getUser()
          setCurrentUser(user)
          setAuthenticated(true)
        } catch (error) {
          localStorage.clear()
        }
      }
    }
    verifyToken()
  }, [authenticated])

	return (
		<div className='App'>
			<NavBar handleLogout={handleLogout}/>

		<Switch>
			<Route exact path='/'>
				<Landing 
					handleLogout={handleLogout}
					toggleFeed={toggleFeed}
					setToggleFeed={setToggleFeed}
					/>
			</Route>

			<Route exact path='/signup'>
				
					<Signup handleSignupOrLogin={handleSignupOrLogin}/>
				
			</Route>

			<Route exact path='/login'>
					<Login handleSignupOrLogin={handleSignupOrLogin}/>
			</Route>

			<Route exact path='/users'>
				<Users /> 
			</Route>
			
			</Switch>
		</div>
	)
}

export default App
