import React, {useState, useEffect} from 'react'

const CreateLike = (props) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await fetch(`/api/post/${props.postId}/likes`);
        const data = await response.json();
        setLikes(data.likes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLikes();
  }, [props.postId]);
  

  const handleLike = async () => {
    try {
      const response = await fetch("/api/post/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: "user1", postId: props.postId }),
      });
      const data = await response.json();
      if (data.success) {
        setLikes(likes + 1);
        setLiked(true);
      } else {
        console.error("Failed to like post");
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <button onClick={handleLike}>{likes} Likes</button>
    </div>
  )
};

export default CreateLike