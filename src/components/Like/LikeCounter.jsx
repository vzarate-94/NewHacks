import React from 'react'

import CommentCard from './CommentCard'

const LikeList = (props) => {

  return (
		props.likeArray.map((comment) => (
				<CommentCard
						key={comment._id}
						comment={comment}
						{...props}
				/>
		))
)
}


export default LikeList