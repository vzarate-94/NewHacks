import React from 'react'

import CommentCard from './CommentCard'

const CommentList = (props) => {

  return (
		props.commentArray.map((comment) => (
				<CommentCard
						key={comment._id}
						comment={comment}
						{...props}
						h1
						
				/>
		))
)
}


export default CommentList