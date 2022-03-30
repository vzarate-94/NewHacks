import React, { useState } from 'react'

import CommentList from './CommentList'
import CreateComment from '../CreateComponents/CreateComment/CreateComment'
const CommentSection = (props) => {
  return (
    <div className='comment-section'>
      
      <div className='header'>
        <h3>Comment Section</h3>
        <div className='header-buttons'></div>
      </div>

      <CreateComment />

      <CommentList {...props}/>

    </div>
  )
}

export default CommentSection