import { Router } from 'express'
import * as usersCtrl from '../controllers/users.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'


const router = Router()

/*---------- Public Routes ----------*/

router.get('/top-users', usersCtrl.getTopUsers)
router.get('/all-users', usersCtrl.index)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)


export { router }