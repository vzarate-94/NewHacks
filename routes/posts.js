import { Router } from 'express'
import * as postCtrl from '../controllers/posts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Public Routes ========= 
router.get('/:page', postCtrl.paginatedIndex)


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)

// Posts
router.post('/', checkAuth, postCtrl.create)


export {
    router
}