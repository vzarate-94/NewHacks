import React from 'react'
import LoginForm from './LoginForm'
import './Auth.css'

const LoginPage = (props) => {
  return (
    <div className='signup-page'>
      <LoginForm handleSignupOrLogin={props.handleSignupOrLogin}/>
    </div>
  )
}

export default LoginPage
