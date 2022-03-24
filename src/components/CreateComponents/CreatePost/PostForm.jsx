import React from 'react'
import '../Create.css'

const PostForm = (props) => {

    return (
        <div className="create-form-container">
            <form className="create-form">
                <div className="question-prompt">
                    <label>Enter your Hack</label>
                </div>
                <input
                    required
                    autoComplete='off'
                    placeholder="Title"
                    name="title"
                />

                <div className="border"></div>

                <div className="border"></div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PostForm