import { PurchaseRepository } from '../repositories/PurchaseRepository'
import { PlanRepository } from '../repositories/PlanRepository'
import { UserRepository } from '../repositories/UserRepository'
import { randomOutcome } from '../utils/randomOutcome'

export class PurchaseService {
  private purchaseRepo = new PurchaseRepository()
  private planRepo = new PlanRepository()
  private userRepo = new UserRepository()

  async purchase(data: any) {
    const user = await this.userRepo.findOrCreate('empy@empytest.com', data.name)
    const plan = await this.planRepo.findById(data.planId)

    const outcome = randomOutcome()
    const purchase = await this.purchaseRepo.create({
      userId: user.id,
      planId: plan!.id,
      status: outcome
    })

    return {
      status: outcome,
      plan: plan!.name,
      price: plan!.price,
      purchaseId: purchase.id,
      userId: user.id
    }
  }
}
