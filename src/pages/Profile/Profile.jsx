import React from 'react'
import Users from '../Users/Users'

function Profile(props) {
  return (
    <div>
    <Users {...props}/>
    </div>
  )
}

export default Profile