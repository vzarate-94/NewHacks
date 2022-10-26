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
                    <Link id='category-link' to="/finance">
                    <h5>Finance</h5></Link>
                    <Link id='category-link' to="/finance"><h5>Cleaning</h5></Link>
                    <Link id='category-link' to="/DIY"><h5>DIY</h5></Link>
                    <Link id='category-link' to="/PersonalHealth"><h5>Personal Health</h5></Link>
                    <Link id='category-link' to="/MentalHealth"><h5>Mental Health</h5></Link>
                    <Link id='category-link' to="/Tech"><h5>Tech</h5></Link>
                    <Link id='category-link' to="/Travel"><h5>Travel</h5></Link>
                    <Link id='category-link' to="/Funny"><h5>Funny</h5></Link>
                    <Link id='category-link' to="/Other"><h5>Other</h5></Link>
                </div>
                
            </div>
        </div>
    )
}

export default Leaderboard