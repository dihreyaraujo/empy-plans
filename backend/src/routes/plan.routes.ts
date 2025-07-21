import { Router } from 'express'
import { PlanController } from '../controllers/PlanController'
import { validate } from '../middlewares/validate'
import { createPlanSchema } from '../validations/plan.schema'

const router = Router()
const planController = new PlanController()

router.post('/', validate(createPlanSchema), planController.create)
router.get('/', planController.listAll)
router.get('/custom/:id', planController.getCustomPlan)

export { router as planRoutes }
