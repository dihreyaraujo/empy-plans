import { PurchaseRepository } from '../repositories/PurchaseRepository'

export class UserService {
  private purchaseRepo = new PurchaseRepository()

  async getPurchases(userId: string) {
    return this.purchaseRepo.findByUser(userId)
  }

  async getCurrentPlan(userId: string) {
    return this.purchaseRepo.findLastPaid(userId)
  }
}
