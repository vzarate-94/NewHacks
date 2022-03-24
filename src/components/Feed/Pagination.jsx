import React from "react"
import "../../styles/Header.css"

const Pagination = ({ currentPage, posts, changePage }) => {
    return (
        <div className="hidden-container">
            <div className="header">
                <h3>Recent Posts</h3>
                <div className="header-buttons">

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

                </div>
            </div>
        </div>
    )
}

export default Pagination