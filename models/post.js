import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  comment_text: {
    type: String,
    Required: true
  },
  commenter: { type: mongoose.Schema.ObjectId, ref: 'User' },
}, { timestamps: true })

const likesSchema = new Schema({
  liker: { type: mongoose.Schema.ObjectId, ref: 'User' },
}, { timestamps: true })

const postSchema = new Schema({
  title: {
    type: String, 
    required: true
  },
  hackDescription: {
    type: String,
  },
  postCategory: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
  tiktokUrl: {
    type: String,
  },
  added_by: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' },
  comments: [commentSchema],
  likes:[likesSchema],
  }, { timestamps: true })


const Post = mongoose.model('Post', postSchema)

export {
  Post
}