import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  comment_text: {
    type: String,
    Required: true
  },
  commenter: { type: mongoose.Schema.ObjectId, ref: 'User' },
}, { timestamps: true })

const postSchema = new Schema({
  title: {
    type: String, 
    required: true
  },
  hackDescription: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
  added_by: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' },
  comments: [commentSchema],
  }, { timestamps: true })


const Post = mongoose.model('Post', postSchema)

export {
  Post
}