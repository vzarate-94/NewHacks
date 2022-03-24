import React from 'react'

// Components
import PostCard from './PostCard'

const PostList = (props) => {
		console.log(props)//make sure this gets the data it needs!
    return (
        <div className="post-list">
          {props.posts?.map((post) => (
            <PostCard
              key={post._id}
              post={post}
            />
          ))}
          <h1>"hello"</h1>
        </div>
    )
}

export default PostList