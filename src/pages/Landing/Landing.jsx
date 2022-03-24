import React, { useState, useEffect } from 'react'
import { getPaginatedPosts } from '../../services/postService'
import styles from './Landing.module.css'
import Profile from '../../components/Profile/Profile'
import DarkMode from '../../components/DarkMode/DarkMode'
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

  return (
    <main className={styles.container}>
      <h1>
        Todays Top Hacks
      </h1>
      <Profile />
      <DarkMode />
      <Feed />
    </main>
  )
}
 
export default Landing