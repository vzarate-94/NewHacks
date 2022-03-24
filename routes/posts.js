import { Router } from 'express'
import * as postCtrl from '../controllers/posts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Public Routes ========= 
router.get('/:page', postCtrl.paginatedIndex)
router.get('/details/:id', postCtrl.show)


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)

// Posts
router.post('/', checkAuth, postCtrl.create)


export {
    router
}