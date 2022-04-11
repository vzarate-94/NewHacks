import React, { useState } from 'react'
import '../Create.css'

// Components
import PostForm from './PostForm'
import CreatePostHeader from './CreatePostHeader'

const CreatePost = (props) => {
    const [toggleCode, setToggleCode] = useState(false)
    const [title, setTitle] = useState('')
    const [hackDescription, setHackDescription] = useState('')
    const [videoUrl, setVideoUrl] = useState('')
    const [tiktokUrl, setTiktokUrl] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    console.log(title)

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title: title, // question input
            hackDescription: hackDescription, // codeblock input
            added_by: props.currentUser._id, // who created the post
            videoUrl: videoUrl,
            tiktokUrl: tiktokUrl,
            imageUrl: imageUrl,
        }
        props.handleCreatePost(formData) // pass the formData up to Home.jsx
    }


    return (
        <>
            <CreatePostHeader setToggleFeed={props.setToggleFeed} />
            <PostForm 
                toggleCode={toggleCode}
                setToggleCode={setToggleCode}

                hackDescription={hackDescription}
                setHackDescription={setHackDescription}


                videoUrl={videoUrl}
                setVideoUrl={setVideoUrl}

                tiktokUrl={tiktokUrl}
                setTiktokUrl={setTiktokUrl}

                imgUrl={imageUrl}
                setImgUrl={setImageUrl}

                setTitle={setTitle}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default CreatePost