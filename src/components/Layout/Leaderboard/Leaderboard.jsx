import React, { useState, useEffect } from 'react'
import './Leaderboard.css'

// Services
import { getTopUsers } from '../../../services/userService'


const Leaderboard = (props) => {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await getTopUsers()
                setUserList(users)
            } catch (error) {
                throw error
            }
        }
        fetchUsers()
        return () => { setUserList([]) }
    }, [])

        console.log(userList)

    return (
        <div className="leaderboard">

            <div className="user-list-container">
                <div className="user-list-header">
                    <h3>Top Users</h3>
                </div>
                {userList?.map((user) => (
        <div className="leader-card" key={user._id}>
            {user.name}
        </div>
    ))}
            </div>

        </div>
    )
}

export default Leaderboard