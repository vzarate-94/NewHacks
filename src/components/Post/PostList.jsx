import React from 'react'

// Components
import PostCard from './PostCard'

const PostList = (props) => {
		console.log("this is ",props)//make sure this gets the data it needs!
    return (
        <div className="post-list">
          {props.posts?.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              {...props}
            />
          ))}
        </div>
    )
}

export default PostList