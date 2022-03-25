import React from "react"
import { useHistory } from 'react-router-dom'
import '../../styles/Header.css'

import Search from "./Search"

//Services
import { search } from '../../services/postService'

const Pagination = (props) => {
    const history = useHistory()
    const {
        posts,
        setPosts,

        changePage,
        currentPage,

        keyword,
        setKeyword,

        clearSearch,
        hasSearchRun,
        setHasSearchRun,

    } = props

    const handleSearch = async (e) => {
        e.preventDefault()
        try {
            setHasSearchRun(true)
            const posts = await search(keyword)
            setPosts(posts)
            history.push('/home')
        } catch (error) {
            throw error
        }
    }

    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    return (
        <div className="hidden-container">
            <div className="header">
                <h3>{!hasSearchRun ? 'Recent' : `Search Results: ${keyword}`}</h3>

                {!hasSearchRun &&
                    <Search
                        {...props}
                        handleSearch={handleSearch}
                        handleChange={handleChange}
                    />
                }

                <div className="header-buttons">
                    {!hasSearchRun ?
                        <>
                            {currentPage > 0 &&
                                <button value="-1" onClick={(e) => changePage(e)}>
                                    Back
                                </button>
                            }

                            {posts.length === 8 &&
                                <button value="1" onClick={(e) => changePage(e)}>
                                    Next
                                </button>
                            }
                        </>
                        :
                        <>
                            {hasSearchRun && 
                                <button onClick={clearSearch}>
                                    Clear Results
                                </button>}
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Pagination