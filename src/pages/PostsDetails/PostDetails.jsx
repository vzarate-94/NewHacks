import React, { useState, useEffect } from 'react'
import { withRouter, useParams} from 'react-router-dom'

import {
  getPostById,
  deletePost
} from '../../services/postService'

import PostCard from '../../components/Post/PostCard'
import Layout from '../../components/Layout/Layout'
import CommentSection from '../../components/Comment/CommentSection'
import PostDetailsHeader from './PostDetailsHeader'

const PostDetails = (props) => {
  const { id } = useParams()
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

  useEffect(() => {
    const fetchPost = async () => {
        try {
            const post = await getPostById(id)
            setTimeout(() => {
                setPost(post)
                setCommentArray(post.comments)
            }, 1000)
        } catch (error) {
            throw error
        }
    }
    fetchPost()
    return () => { setPost(null) }
}, [id])

  return (
    <Layout {...props}>
      <div className='layout'>
      <PostDetailsHeader {...props} />
        <div className='post-details'>
          {post? 
          <>
            <PostCard
              post={post}
              currentUser={props.currentUser}
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