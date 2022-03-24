import React from 'react'
import '../../../styles/Header.css'

const CreatePostHeader = (props) => {

    return (
        <div className="hidden-container">
            <div className="header">
                <h3>Create Post</h3>
                <div className="header-buttons">
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePostHeader