import React from 'react'
import PostList from '../Post/PostList.jsx'

function Feed(props) {
  return (
    <div>
      <PostList
        post={props.posts} />
    </div>
  )
}

export default Feed