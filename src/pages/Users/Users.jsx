import React from 'react';


const Users = (props) => {
  const {_id, name} = props.currentUser || {}

  return (
    <>
      <h1>Hello {name}</h1>
      
    </>
  )
}

export default Users