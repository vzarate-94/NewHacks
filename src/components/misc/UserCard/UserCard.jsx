import React from 'react'
import './UserCard.css'

function UserCard(props) {
  const { user } = props

  return (
    user &&
    <div className='user-card'>
      <div className='user-info'>
        <h4>{user.name}</h4>

      </div>

    </div>
  )
}

export default UserCard