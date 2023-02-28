import React, { useState, useEffect } from 'react'
import { withRouter, useParams} from 'react-router-dom'
import './PostDetails.css'

// services
import {
  getPostById,
  deletePost
} from '../../services/postService'

// Components
import PostCard from '../../components/Post/PostCard'
import Layout from '../../components/Layout/Layout'
import CommentSection from '../../components/Comment/CommentSection'
import PostDetailsHeader from './PostDetailsHeader'
import LikeCard from '../../components/Like/LikeCard'

// assets
import loading from '../../assets/animation/loading.json'
import Animation from '../../components/misc/Animation'

const PostDetails = (props) => {
  // the useParams hook will match the post id from the URL parameters of the current route
  const { id } = useParams()
  const [post, setPost] = useState()
  const [commentArray, setCommentArray] = useState([])
  const [likesArray, setLikesArray] = useState([])

  const handleDeletePost = async (postId) => {
    // async promise to delete the post
    try {
      await deletePost(postId)
      // In order for history.push('/') to work you must use withRouter from react-router-dom
      props.history.push('/')
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    const fetchPost = async () => {
      // async promise with try catch to retrieve the post and the comments.
        try {
            const post = await getPostById(id)
            // Use setTimeout for the Loading animation Lottie to show for a second before the post and comments render on the screen.
            setTimeout(() => {
                setPost(post )
                setCommentArray(post.comments)
                // setLikesArray(post.likes.length)
            }, 1000)
        } catch (error) {
            throw error
        }
    }
    fetchPost()
    // This return function 
    return () => { setPost(null) }
}, [id])

  return (
    <Layout {...props}>
      <div className='layout'>
      <PostDetailsHeader {...props} />
        <div className='post-details'>
           {/* Terneary function below works hand and hand with the setTimeout in the useEffect hook. While the post wait a second to render. The loading lottie animaiton will display on the screen */}
          {post? 
          <div>
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
            {/* <LikeCard
              post={post}
              setPost={setPost}
              currentUser={props.currentUser}
              likeArray={likesArray}
              setLikesArray={setLikesArray}/> */}
          </div>
          :
          <div className='loading-container'>
            {/* The Animaiton component has the styling and speed for the loading animation. Loading animation is lottie file that will play for 1 second while posts and comments are retrieved  */}
            <Animation animData={loading}></Animation>
          </div>
          }
        </div>
      </div>
    </Layout>
  )
}

// Export with withRouter to give the back button in the PostDetailsHeader component access to the historys object's properties
export default withRouter(PostDetails)