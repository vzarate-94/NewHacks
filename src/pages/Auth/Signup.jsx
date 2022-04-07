import React, { useState } from 'react'
import SignupForm from '../Auth/SignupForm'
import './Auth.css'

const Signup = (props) => {
  const [message, setMessage] = useState()

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <div className='signup-page'>
      {message && <p>{message}</p> }
      <SignupForm 
        updateMessage={updateMessage}
        handleSignupOrLogin={props.handleSignupOrLogin}
      />
    </div>
  )
}

export default Signup