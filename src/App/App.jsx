import React, { useState, useEffect } from 'react'
import { Switch, Route, } from 'react-router-dom'
import './App.css'

// services
import { getUser, logout } from '../services/authService'

// pages + components
import NavBar from '../components/NavBar/NavBar'
import Signup from '../pages/Auth/Signup'
import Login from '../pages/Auth/Login'
import Landing from '../pages/Landing'
import PostDetails from '../pages/PostsDetails/PostDetails'

import Profile from '../pages/Profile/Profile'
import ProtectedRoute from '../components/misc/ProtectedRouter'




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
				  currentUser={currentUser} 
					handleLogout={handleLogout}
					toggleFeed={toggleFeed}
					setToggleFeed={setToggleFeed}
					/>
			</Route>

			<Route path='/signup'>
				
					<Signup handleSignupOrLogin={handleSignupOrLogin}/>
				
			</Route>

			<Route path='/login'>
					<Login handleSignupOrLogin={handleSignupOrLogin}/>
			</Route>
			<ProtectedRoute authenticated={authenticated} path="/profile">
          <Profile
            currentUser={currentUser}
            handleLogout={handleLogout}
            setToggleFeed={setToggleFeed}
          />
        </ProtectedRoute>

				<Route path="/post/:id">
          <PostDetails
            currentUser={currentUser}
            handleLogout={handleLogout}

            toggleFeed={toggleFeed}
            setToggleFeed={setToggleFeed}
          />
        </Route>
			
			</Switch>
		</div>
	)
}

export default App
