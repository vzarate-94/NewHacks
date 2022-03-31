import React, { useState } from 'react'

import { createComment, deleteComment } from '../../services/commentService'

import CommentList from './CommentList'
import CreateComment from '../CreateComponents/CreateComment/CreateComment'

const CommentSection = (props) => {
  const [toggleNewComment, setToggleNewComment] = useState(false)
  
  const handleCreateComment = async (formData) => {
    try {
      const newComment = await createComment(props.post._id, formData)
      newComment.commenter = props.currentUser
      props.setCommentArray([...props.CommentArray, newComment])
    } catch (error) {
      throw error
    }
  }

  const handleDeleteComment = async (commentId) => {
    try {
        await deleteComment(props.post._id, commentId)
        props.setCommentArray(props.commentArray.filter(comment => comment._id !== commentId))
    } catch (error) {
        throw error
    }
}

  return (
    <div className='comment-section'>
      
      <div className='header'>
        <h3>Comment Section</h3>
        <div className='header-buttons'></div>
          {props.currentUser && 
          
          <button
            onClick={() => 
            setToggleNewComment(!toggleNewComment)
            }
            >New Comment</button>
          }
      </div>
      {toggleNewComment &&
        <CreateComment
          {...props}
          handleCreateComment={handleCreateComment}
          setToggleNewComment={setToggleNewComment}
      />
      }
      <CommentList {...props}
      handleDeleteComment={handleDeleteComment}
      />

    </div>
  )
}

export default CommentSection