import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { TikTok } from 'react-tiktok'

import '../../styles/Card.css'

// Components
import PostActions from './PostActions'


const PostCard = (props) => {

    

return (
    
    <div className="post-card">
        <div className="card-header">
            <PostActions {...props} />
        </div>
        <div className="question-container stack-top">
            <h3>{props.post.title}</h3>
            <p>{props.post.hackDescription}</p>
        </div>
            {props.post.videoUrl? 
            <div>
                <ReactPlayer controls url={props.post.videoUrl} width="100%"/>
            </div>: <p></p>}
            {props.post.tiktokUrl?
            <span className='tiktok'>
                <TikTok url={props.post.tiktokUrl} />
            </span>: <p>.</p>}
        
        <div className="comment-link">
                <Link to={`/post/${props.post._id}`}>View Comments</Link>
        </div>
    </div>
    )
}

export default PostCard