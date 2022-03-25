import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './Auth.css'

const LoginPage = (props) => {
  return (
    <main className='container'>
      <h1>Log In</h1>
      <LoginForm handleSignupOrLogin={props.handleSignupOrLogin}/>
    </main>
  )
}
 
export default LoginPage
