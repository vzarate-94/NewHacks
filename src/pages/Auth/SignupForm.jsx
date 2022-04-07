import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Auth.css'
import { signup} from '../../services/authService'

import Animation from '../../components/misc/Animation'
import signupLottie from '../../assets/animation/signupLottie.json'

const SignupForm = (props) => {
  const history = useHistory()
  const [authError, setAuthError] = useState(false)
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    handle: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await signup(formData)
      props.handleSignupOrLogin()
      history.push('/')
    } catch (error) {
      setAuthError(error.message)
      setFormData({
        handle: '',
        email: '',
        password: '',
        passwordConf: ''
      })
    }
  }

  useEffect(() => {
    const { name, email, handle, password, passwordConf } = formData
    const isFormInvalid = !(name && email && handle && password === passwordConf)
		setValidForm(isFormInvalid)
	}, [formData])

  return (
    <>
      <div className='left-container'>
        <div className='form-container'>
          <div className="title-container">
            <h1>Create an Account</h1>
              {authError
                ? <h3>{authError}</h3>
                : <h3>Life Hacks for all</h3>}
          </div>
          <form
              onSubmit={handleSubmit}
              className='register-form'
            >
              <input
                onChange={handleChange}
                value={formData.handle}
                autoComplete="off"
                required
                name="handle"
                type="text"
                placeholder="Username"
                />
              <input
                onChange={handleChange}
                value={formData.name}
                autoComplete="off"
                required
                name="name"
                type="text"
                placeholder="Name"
              />
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
                required
                name="password"
                type="password"
                placeholder="Password"
              />
              <input
                onChange={handleChange}
                value={formData.passwordConf}
                autoComplete="off"
                required
                name="passwordConf"
                type="password"
                placeholder="Confirm Password"
              />
            <div className='inputContainer'>
              <button disabled={validForm} className='button'>Sign Up</button>
              <Link to="/">
                <button>Cancel</button>
              </Link>
            </div>
          </form>
          <div className="redirect-container">
              <p>Already have an account?</p>
              <Link className="redirect-link" to="/login">
                  <p>Login</p>
              </Link>

          </div>
        </div>
      </div>
      <div className="right-container">
                <Animation animData={signupLottie}/>
            </div>
    </>
  )
}
 
export default SignupForm
