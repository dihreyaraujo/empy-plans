import { Router } from 'express'
import { UserController } from '../controllers/UserController'

const router = Router()
const userController = new UserController()

router.get('/:id/purchases', userController.getUserPurchases)
router.get('/:id/current-plan', userController.getCurrentPlan)

export { router as userRoutes }
