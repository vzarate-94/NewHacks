import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Auth.css'
import * as authService from '../../services/authService'

import Animation from '../../components/misc/Animation'
import signupLottie from '../../assets/animation/signupLottie.json'

const LoginForm = (props) => {
  const history = useHistory()
  const [authError, setAuthError] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })


  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      await authService.login(formData)
    
      props.handleSignupOrLogin()
      history.push('/')
    } catch (error) {
      setAuthError(error.message)
      setFormData({
        email: '',
        password: '',
      })
    }
  } 

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  return (
    <div className='signup-page'>
      <div className='left-container'>
        <div className='form-container'>
          <div className="title-container">
            <h1>Login</h1>
            {authError ?
                <h3>{authError}</h3>
                :
                <h3>Please enter your login information</h3>
            }
          </div>
          <form className="register-form"
            onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={formData.email}
              autoComplete="off"
              required
              name="email"
              type="email"
              placeholder="Email"
            />
            <input
              onChange={handleChange}
              value={formData.password}
              autoComplete="off"
              required name="password"
              type="password"
              placeholder="Password"
            />
            <button 
              autoComplete='off'
              id='submit-button'
              type='submit'>
              SIGN IN
            </button>
          </form>
            <div className='redirect-container'>
              <p>Need an account?</p>
              <Link className='redirect-link' to="/signup">
                <p>Sign Up</p>
              </Link>
            </div>
        </div>
      </div>
      <div className='right-container'>
          <Animation animData={signupLottie}></Animation>

        </div>
    </div>
  )
}
 
export default LoginForm
