import React, { useState, useEffect } from 'react'
import { getPaginatedPosts } from '../../services/postService'

import Feed from '../../components/Feed/Feed'

const Landing = () => {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    const fetchingPaginatedPost = async () => {
      const paginatedPosts = await getPaginatedPosts(currentPage)
      setPosts(paginatedPosts)
    }
    fetchingPaginatedPost()
    return () => { setPosts([]) }
  }, [currentPage])

  const changePage = (e) => {
    e.preventDefault()
    setCurrentPage(currentPage + parseInt(e.target.value))
  }

  return (
    <div className="layout"> 
        <Feed
            posts={posts}
            setPosts={setPosts}
            currentPage={currentPage}
            changePage={changePage}
        />

    </div>
)
}
 
export default Landing