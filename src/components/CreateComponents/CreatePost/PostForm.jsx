import React from 'react'
import '../Create.css'

const PostForm = (props) => {

    return (
        <div className="create-form-container">
            <form className="create-form" onSubmit={props.handleSubmit} >
                <div className="question-prompt">
                    <label>Enter your Hack</label>
                </div>

                <input
                    required
                    autoComplete='off'
                    placeholder="Title"
                    name="title"
                    value={props.title}
                    onChange={e => props.setTitle(e.target.value)}
                />

                <div className="border"></div>

                <div className='code-promt'>
                  <label>Discription</label>
                  <input 
                    type="text"
                    placeholder='Discription'
                    name='hackDiscription' />
                </div>

                <div className="border"></div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PostForm