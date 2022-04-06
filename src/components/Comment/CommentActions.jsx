import React from 'react'
import '../../styles/Card.css'

const CommentActions = (props) => {
  return (
    <div className='interactions'>
      {
                props.currentUser &&
                props.currentUser._id === props.comment.commenter._id &&
                <button onClick={() => props.handleDeleteComment(props.comment._id)}>
                    Delete
                </button>
            }

    </div>
  )
}

export default CommentActions