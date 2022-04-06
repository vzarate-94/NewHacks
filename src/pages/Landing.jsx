import React, { useState, useEffect } from 'react'
import { usePrevious } from '../hooks/usePrevious'

import {
    getPaginatedPosts,
    createPost,
    updatePost,
    deletePost
} from '../services/postService'


import Feed from '../components/Feed/Feed'
import CreatePost from '../components/CreateComponents/CreatePost/CreatePost'
import Layout from '../components/Layout/Layout'

const Landing = (props) => {
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(0)

    const prevPostState = usePrevious(posts)
    const [keyword, setKeyword] = useState('')
    const [hasSearchRun, setHasSearchRun] = useState(false)


    const clearSearch = () => {
    setKeyword('')
    setHasSearchRun(false)
    setPosts(prevPostState)
    }

    const changePage = (e) => {
            e.preventDefault()
            setCurrentPage(currentPage + parseInt(e.target.value))
    }   

    const handleCreatePost = async (formData) => {
            try {
                const newPost = await createPost(formData)
                newPost.added_by = props.currentUser

                if (posts.length < 8) {
                    setPosts([newPost, ...posts])
                } else {
                    const duplicate = [...posts]
                    duplicate.splice(duplicate.length - 1, 1)
                    setPosts(() => [newPost, ...duplicate])
                }
                props.setToggleFeed(true)
            } catch (error) {
                throw error
            }
        }


    const handleDeletePost = async (postId) => {
        try {
            await deletePost(postId)
            setPosts(posts.filter((post) => post._id !== postId))
        } catch (error) {
            throw error
        }
    }   

    useEffect(() => {
    const fetchPaginatedPosts = async () => {
        const paginatedPosts = await getPaginatedPosts(currentPage)
        setPosts(paginatedPosts)
    }
    fetchPaginatedPosts()
    return () => { setPosts([]) }
    }, [currentPage])


    return (
    <Layout {...props}>
        <div className="layout">
            {props.toggleFeed ?
                <Feed
                    posts={posts}
                    setPosts={setPosts}
                    changePage={changePage}
                    currentPage={currentPage}
                    currentUser={props.currentUser}
                    toggleFeed={props.toggleFeed}
                    setToggleFeed={props.setToggleFeed}
                    handleDeletePost={handleDeletePost}

                    keyword={keyword}
                    setKeyword={setKeyword}
                    clearSearch={clearSearch}
                    hasSearchRun={hasSearchRun}
                    setHasSearchRun={setHasSearchRun}
                />
                :
                <CreatePost
                    currentUser={props.currentUser}
                    handleCreatePost={handleCreatePost}
                    setToggleFeed={props.setToggleFeed}
                />
            }
        </div>
    </Layout>
    )
    }

export default Landing