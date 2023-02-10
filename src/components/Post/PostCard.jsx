import React from 'react'
import ReactPlayer from 'react-player'
import { TikTok } from 'react-tiktok'

import '../../styles/Card.css'

// Components
import PostActions from './PostActions'
import UserCard from '../misc/UserCard/UserCard'
import CommentButton from '../Comment/CommentButton'


const PostCard = (props) => {


return (
    
    <div className="post-card">
        <div className="card-header">
            <PostActions {...props} />
        </div>
        <div className="question-container stack-top">
            
            <UserCard user={props.post.added_by} />
            <p className='category-id'>Category:<strong id='categeory-name'> {props.post.postCategory}</strong></p>
            <h3 id='title-id'>{props.post.title}</h3>
            <p>{props.post.hackDescription}</p>
        </div>
            {props.post.videoUrl? 
            <div>
                <ReactPlayer controls url={props.post.videoUrl} width="100%"/>
            </div>: <p></p>}
            {props.post.tiktokUrl?
            <span className='tiktok'>
                <TikTok url={props.post.tiktokUrl} />
            </span>: <p></p>}
            {props.post.imageUrl?
            <div> <img className='post-img' src={props.post.imageUrl} alt="" /></div> : <p></p>}
        
            <div className="comment-link">
                <CommentButton {...props}/>
                
            </div>
    </div>
    )
}

export default PostCard