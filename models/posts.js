import mongoose from 'mongoose'

const Schema = mongoose.Schema

const postSchema = new Schema({
  hackPost: {
    type: String, 
    required: true
  }
})

const Post = mongoose.model('Post', postSchema)

export {
  Post
}