import React from 'react'
import './UserCard.css'

function UserCard(props) {
  const { user } = props

  return (
    user &&
    <div className='user-info'>
      
        <h4>Posted By: <strong id='userName'>{user.handle}</strong></h4>

    </div>
  )
}

export default UserCard