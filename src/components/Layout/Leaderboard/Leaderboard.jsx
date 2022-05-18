import React from 'react'
import './Leaderboard.css'

// Services



const Leaderboard = (props) => {


    return (
        <div className="leaderboard">
            <div className="user-list-container">
                <div className="user-list-header">
                    <h3>Categories</h3>
                </div>
                <div className="leader-card" >
                    <h5>Cleaning</h5>
                    <h5>Finance</h5>
                    <h5>DIY</h5>
                    <h5>Mental Health</h5>
                    <h5>Technology</h5>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard