import mongoose from 'mongoose'

const Schema = mongoose.Schema

const dislikeSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  commentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }
}, {timestamps: true})

const Dislike = mongoose.model('Dislike', dislikeSchema)

export {
  Dislike
}