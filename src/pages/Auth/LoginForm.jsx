import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Auth.css'
import * as authService from '../../services/authService'

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
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="container"
    >
      <div className="inputContainer">
        <label htmlFor="email-input" className="label">
          Email
        </label>
        <input
          type="text"
          autoComplete="off"
          id="email-input"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="password-input" className="label">
          Password
        </label>
        <input
          type="password"
          autoComplete="off"
          id="password-input"
          value={formData.password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <button className="button">Log In</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}
 
export default LoginForm
