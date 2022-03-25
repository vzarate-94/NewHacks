import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../services/userService'

const Users = (props) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getAllUsers()
        console.log(users)
        setUsers(users)
      } catch (error) {
        throw error
      }
    }
    fetchUsers()
    return () => {
      setUsers([])
    }

  }, [])

  console.log("these are ", users)
  return (
    <>
      <h1>Hello. This is a list of all the users.</h1>
      
      {users?.map((user) => (
        <p key={user._id}>{user.name}</p>
      ))}
    </>
  )
}
 
export default Users