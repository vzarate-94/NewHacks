import React from 'react'
import { Link} from 'react-router-dom'
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
                    <Link to="/finance"><h5>Finance</h5></Link>
                    <Link to="/finance"><h5>Cleaning</h5></Link>
                    <Link to="/DIY"><h5>DIY</h5></Link>
                    <Link to="/PersonalHealth"><h5>Personal Health</h5></Link>
                    <Link to="/MentalHealth"><h5>Mental Health</h5></Link>
                    <Link to="/Tech"><h5>Tech</h5></Link>
                    <Link to="/Travel"><h5>Travel</h5></Link>
                    <Link to="/Funny"><h5>Funny</h5></Link>
                    <Link to="/Other"><h5>Other</h5></Link>
                </div>
                
            </div>
        </div>
    )
}

export default Leaderboard