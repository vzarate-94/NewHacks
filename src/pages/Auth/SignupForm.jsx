import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Auth.css'
import * as authService from '../../services/authService'

const SignupForm = (props) => {
  const [popup, setPopup] = useState(false)
  const history = useHistory()
  const [authError, setAuthError] = useState(false)
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  const handlePopup = () => {
    setPopup(!popup)
}

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    authService.signup(formData)
    .then(() => {
      props.handleSignupOrLogin()
      history.push('/')
    })
    .catch(err => {
      props.updateMessage(err.message)
    })
  }

  useEffect(() => {
    const { name, email, password, passwordConf } = formData
    const isFormInvalid = !(name && email && password === passwordConf)
		setValidForm(isFormInvalid)
	}, [formData])

  return (
    <div className='signup-page'>
      <div className='left-container'>
        <div className='form-container'>
          <div className="title-container">
            <h1>Create an Account</h1>
              {authError
                ? <h3>{authError}</h3>
                : <h3>Life Hacks for all</h3>}
          </div>
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className='container'
          >
            <div className='inputContainer'>
              <label htmlFor="name" className='label'>
                Name
              </label>
              <input
                type="text"
                autoComplete="off"
                id="name"
                value={formData.name}
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className='inputContainer'>
              <label htmlFor="email-input" className='label'>Email</label>
              <input
                type="text"
                autoComplete="off"
                id="email"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className='inputContainer'>
              <label htmlFor="password-input" className='label'>
                Password
              </label>
              <input
                type="password"
                autoComplete="off"
                id="password"
                value={formData.password}
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className='inputContainer'>
              <label htmlFor="confirm-input" className='label'>
                Confirm Password
              </label>
              <input
                type="password"
                autoComplete="off"
                id="confirm-input"
                value={formData.passwordConf}
                name="passwordConf"
                onChange={handleChange}
              />
            </div>
            <div className='inputContainer'>
              <button disabled={validForm} className='button'>Sign Up</button>
              <Link to="/">
                <button>Cancel</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
 
export default SignupForm
