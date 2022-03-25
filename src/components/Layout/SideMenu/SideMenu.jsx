import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './SideMenu.css'

const SideMenu = ({ toggleFeed, setToggleFeed, currentUser, handleLogout }) => {
    const history = useHistory()

    const handleRedirect = () => {
        setToggleFeed(!toggleFeed)
        history.push('/home')
    }

    return (
        <div className="side-panel">
            <div className="menu">

                <div className="menu-header">
                    <h3>Menu</h3>
                </div>

                <div className="menu-items">
                    {currentUser ?
                        <>
                            <Link to="/profile"><button>Profile</button></Link>
                            <button onClick={() => handleRedirect()}>
															  {toggleFeed ? 'Create Post' : 'Feed'}
														</button>
                            <button onClick={handleLogout}>Sign Out</button>
                        </>
                        :
                        <Link to="/login"><button>Login</button></Link>
                    }

                </div>

            </div>
        </div>
    )
}

export default SideMenu