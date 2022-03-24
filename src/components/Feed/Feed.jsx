import React from 'react'
import PostList from '../Post/PostList.jsx'
import Pagination from './Pagination.jsx'

function Feed(props) {
  return (
    <>
        <Pagination
            {...props}
        />
        <div className="spacing-block" />
        <PostList
            posts={props.posts}
        />
    </>
  )
}

export default Feed