import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Card.css'

function CommentButton(props) {
  return (
    <button id='comment-button'>
      <Link to={`/post/${props.post._id}`}>View Comments</Link>
    </button>
  )
}

export default CommentButton