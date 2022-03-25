import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Card.css'

// Components
import PostActions from './PostActions'


const PostCard = (props) => {

return (
    <div className="post-card">

        <div className="card-header">
            
            <PostActions {...props} />
        </div>

        <div className="question-container">
            <p>console.log{props.posts._id}</p>
            <p>{props.posts.hackDiscription}</p>
            <p>can u</p>
        </div>

        <div className="comment-link">

                <Link to={`/post/${props.post._id}`}>View Comments</Link>

            </div>

    </div>
    )
}

export default PostCard