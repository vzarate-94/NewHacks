import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import {
  getPostById,
  updatePost, 
  deletePost
} from '../../services/postService'

import PostCard from '../../components/Post/PostCard'
import Layout from '../../components/Layout/Layout'
import CommentSection from '../../components/Comment/CommentSection'

const PostDetails = (props) => {
  const { id } = props.match.params 
  const [post, setPost] = useState()
  const [commentArray, setCommentArray] = useState([])

  const handleDeletePost = async (postId) => {
    try {
      await deletePost(postId)
      props.history.push('/')
    } catch (error) {
      throw error
    }
  }

  return (
    <Layout {...props}>
      <div className='layout'>
        <div className='post-details'>
          {post? 
          <>
            <PostCard
              post={post}
              current={props.current.user}
              handleDeletePost={handleDeletePost}
            />
            <CommentSection
              post={post}
              setPost={setPost}
              currentUser={props.currentUser}
              commentArray={commentArray}
              setCommentArray={setCommentArray}
            />
          </>
          :
          <div className='loading-container'>
            <h1>Loading</h1>
          </div>
          }

        </div>
      </div>
    </Layout>
  )
}

export default PostDetails