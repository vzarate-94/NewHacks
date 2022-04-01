import React, { useState} from 'react'

const CreateComment = (props) => {
	const [text, setText] = useState('')
	

	const handleSubmit = (e) => {
		e.preventDefault()
			const formData = {
				comment_text: text,
				post_id: props.post._id,
				commenter: props.currentUser._id
			}
			props.handleCreateComment(formData)
			props.setToggleNewComment(false)
	}

  return (
    <form onSubmit={handleSubmit} className="create-form">
		<div className="question-prompt">
				<label>Enter your Comment</label>
		</div>
		
		<input
				required
				autoComplete='off'
				placeholder="Comment"
				name="comment_text"
				value={text}
				onChange={(e) => setText(e.target.value)}
		></input>
		
		<div className="border"></div>
		
		<button type="submit">Submit</button>
		
</form>
  )
}

export default CreateComment