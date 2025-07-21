import { Router } from 'express'
import { PurchaseController } from '../controllers/PurchaseController'
import { validate } from '../middlewares/validate'
import { purchaseSchema } from '../validations/purchase.schema'

const router = Router()
const purchaseController = new PurchaseController()

router.post('/', validate(purchaseSchema), purchaseController.purchasePlan)

export { router as purchaseRoutes }
