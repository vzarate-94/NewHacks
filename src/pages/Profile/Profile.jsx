import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Profile.css'


// Services
import { getUserPosts, deletePost, } from '../../services/postService'

import PostList from '../../components/Post/PostList'
import SettingsComponent from '../../components/SettingsComponent/SettingsComponent'

function Profile(props) {
  const {_id, name, handle, avatar} = props.currentUser || {}

  const history = useHistory()
  const [userPosts, setUserPosts] = useState([])
  const [popup, setPopup] = useState(false)

  const redirectToCreatePost = () => {
    props.setToggleFeed(false)
    history.push('/')
  }

  const handleDeletePost = async (postId) => {
    try {
        await deletePost(postId)
        setUserPosts(userPosts.filter((post) => post._id !== postId))
    } catch (error) {
        throw error
    }
}

const handlePopup = () => {
    setPopup(!popup)
}

useEffect(() => {
  const fetchUserPosts = async () => {
      const posts = await getUserPosts(_id)
      console.log(posts)

      setUserPosts(posts)
  }
  fetchUserPosts()
  return () => { setUserPosts(null) }
}, [_id])

return (
    <>
        {popup &&
                <SettingsComponent
                    handlePopup={handlePopup}
                />
            }
        <div className="profile-page">
            <div className="profile-left">
                <div className="profile-user-info">
                    
                    <h3>{name}</h3>
                    <img src={avatar} alt="user avatar"></img>
                    <h3>{handle}</h3>

                    <button><Link to="/">Home</Link></button>

                    <button onClick={() => redirectToCreatePost()}>Create Post</button>


                    <button onClick={props.handleLogout}>Sign Out</button>

                    <button onClick={handlePopup}>Settings</button>
                </div>
            </div>
            <div className="profile-right">
                <div className="profile-post-container">
                    <div className="sub-container">
                        <div className="profile-posts-header">
                            <h3>Your Posts</h3>
                        </div>
                    </div>

                    <div className="user-posts">

                        {userPosts &&
                            <PostList
                                posts={userPosts}
                                currentUser={props.currentUser}
                                handleDeletePost={handleDeletePost}
                            />
                        }

                    </div>

                </div>
            </div>
            
        </div>
    </>
)
}

export default Profile