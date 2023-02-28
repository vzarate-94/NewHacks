import React from 'react'

import LikeCard from './LikeCard.jsx'

const LikeList = (props) => {

  return (
		props.likeArray.map((like) => (
				<LikeCard
						like={like}
						{...props}
				/>
		))
)
}


export default LikeList