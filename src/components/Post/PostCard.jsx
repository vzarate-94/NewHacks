import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
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
            <p>{props.post.title}</p>
            <p>{props.post.hackDescription}</p>
            <p>Created by: {props.post._id}</p>
        </div>
        <div>
            <ReactPlayer url={props.post.videoUrl} />
        </div>

        <div className="comment-link">

                <Link to={`/post/${props.post._id}`}>View Comments</Link>

            </div>

    </div>
    )
}

export default PostCard