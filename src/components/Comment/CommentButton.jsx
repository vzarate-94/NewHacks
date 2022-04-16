import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Card.css'

function CommentButton(props) {
  return (
    <Link to={`/post/${props.post._id}`}>
      View Comments
    </Link>
  )
}

export default CommentButton