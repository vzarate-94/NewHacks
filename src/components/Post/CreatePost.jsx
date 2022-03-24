import React from 'react'

function CreatePost(props) {
  return (
    <div>
      <h3>Add a Hack</h3>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label>Hack Title</label>
        </div>
        <input
          required
          autoComplete='off'
          placeholder='Title'
          name='title'
          
          />
      </form>
    </div>
  )
}

export default CreatePost