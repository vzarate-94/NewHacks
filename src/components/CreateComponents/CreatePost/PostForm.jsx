import React from 'react'
import '../Create.css'

const PostForm = (props) => {

    return (
        <div className="create-form-container">
            <form className="create-form">
                <div className="question-prompt">
                    <label>Enter your question</label>
                </div>
                <input
                    required
                    autoComplete='off'
                    placeholder="Question"
                    name="question"
                />

                <div className="border"></div>

                <div className="code-prompt">
                    <label>Codeblock</label>
                    <button type="button" id="plus-button">+</button>
                </div>

                <div className="border"></div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PostForm