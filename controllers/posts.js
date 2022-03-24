import { User } from '../models/user.js'
import { Post } from '../models/post.js'

const create = async (req, res) => {
  try {
      const post = await new Post(req.body)
      await post.save()
      await User.updateOne(
          { _id: req.user._id },
          { $push: { posts: post } }
      )
      return res.status(201).json(post)
  } catch (err) {
      return res.status(500).json({ err: err.message })
  }
}

const paginatedIndex = async (req, res) => {
  const limitNum = 16
  const skipCount = parseInt(req.params.page) * parseInt(limitNum)
  try {
    const posts = await Post.find({})
    .populate('added_by')
    .limit(limitNum)
    .skip(skipCount)
    .sort({ createdAt: 'desc' })
    return res.status(200).json(posts)
  } catch (error) {
    throw error
  }
}

const show = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('added_by')
      .populate('comments.commenter')
    return res.status(200).json(post) 
  } catch (error) {
    return res.status(500).send(error.message, 'Could not locate post')
  }
}

export {
  create,
  paginatedIndex,
  show,
}