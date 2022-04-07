import React from 'react'

// Components
import PostList from '../Post/PostList'
import Pagination from './Pagination'

const Feed = (props) => {
  return (
    <>
        <Pagination {...props} />
        <div className="spacing-block" />
        <PostList
            {...props}
        />
        <Pagination {...props} />
    </>
  )
}

export default Feed