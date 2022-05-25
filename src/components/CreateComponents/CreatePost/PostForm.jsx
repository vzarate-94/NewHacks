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

                
                  <input 
                    required
                    autoComplete='off'
                    placeholder='Description'
                    name='hackDescription'
                    value={props.hackDescription}
                    onChange={e => props.setHackDescription(e.target.value)} />

                <select value={props.postCategory} onChange={e => props.setPostCategory(e.target.value)}>
                    <option value="Finacne">Finance</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="DIY">DIY</option>
                    <option value="Personal Hygene">Personal Hygene</option>
                    <option value="Mental Health">Mental Health</option>
                    <option value="Tech">Tech</option>
                    <option value="Travel">Travel</option>
                    <option value="Other">Other</option>
                </select>
                <div className='url-inputs'>
                <input 
                    autoComplete='off'
                    placeholder='Video URL'
                    name='videoUrl'
                    value={props.videoUrl}
                    onChange={e => props.setVideoUrl(e.target.value)} />
                <input 
                    autoComplete='off'
                    placeholder='TikTok URL'
                    name='tiktokUrl'
                    value={props.tiktokUrl}
                    onChange={e => props.setTiktokUrl(e.target.value)} />
                <input 
                    autoComplete='off'
                    placeholder='Image Source URL'
                    name='imageUrl'
                    value={props.imageUrl}
                    onChange={e => props.setImageUrl(e.target.value)} />
                </div>

                <div className="border"></div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PostForm