import React from 'react'
import '../../App/App.css'

//Components
import Leaderboard from './Leaderboard/Leaderboard'
import SideMenu from './SideMenu/SideMenu'

const Layout = (props) => {
		// children will refer to the Home and PostDetails components
    const { children } = props

    return (
        <div className="home-page">
            <SideMenu {...props} />
            {children}
            <Leaderboard />
        </div>
    )
}

export default Layout