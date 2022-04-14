import React, { useState } from 'react'
import '../../styles/Card.css'

function Like() {
  const [likeCount, setLikeCount] = useState(1)

  const handleLikeCount = () => {
    setLikeCount(likeCount + 1)
  }
  return (
    <div className='like-div'>
      <button id='like-button' onClick={handleLikeCount}>Like</button>
      <p id='like-count' ><strong>{likeCount}</strong></p>
    </div>
  )
}

export default Like