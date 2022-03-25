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
                    required
                    autoComplete='off'
                    placeholder='Description'
                    name='hackDescription'
                    value={props.hackDescription}
                    onChange={e => props.setHackDescription(e.target.value)} />
                </div>

                <div className="border"></div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PostForm