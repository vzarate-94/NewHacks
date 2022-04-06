import React from 'react'
import '../../styles/Card.css'
import UserCard from '../misc/UserCard/UserCard'

import CommentActions from './CommentActions'

function CommentCard(props) {
  
  return (
    <div className="comment-card">

            <div className="card-header"></div>

              <UserCard user={props.comment.commenter} />
              <CommentActions 
                {...props}/>
            <div className="question-container">
              <p>{props.comment.comment_text}</p>
            </div>

            <div className="code-container"></div>

        </div>

  )
}

export default CommentCard