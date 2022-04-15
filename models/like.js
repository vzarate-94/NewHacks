import mongoose from 'mongoose'

const Schema = mongoose.Schema

const likeSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  commentId: {
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }
}, {timestamps: true})

const Like = mongoose.model('Like', likeSchema)

export {
  Like
}