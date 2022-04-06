import React from 'react'
import Users from '../Users/Users'
import './Profile.css'

function Profile(props) {
  return (
    <div>
    <Users {...props}/>
    </div>
  )
}

export default Profile