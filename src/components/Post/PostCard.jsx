import React from 'react'

const PostCard = (props) => {

  return (
      <div className="post-card">

          <div className="card-header"></div>

          <div className="question-container">
              <p>{props.post.title}</p>
          </div>


          <div className="comment-link"></div>

      </div>
  )
}

export default PostCard