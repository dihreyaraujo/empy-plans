import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

export class UserController {
  private service = new UserService()

  constructor() {
    this.getUserPurchases = this.getUserPurchases.bind(this)
    this.getCurrentPlan = this.getCurrentPlan.bind(this)
  }

  async getUserPurchases(req: Request, res: Response) {
    const result = await this.service.getPurchases(req.params.id)
    return res.json(result)
  }

  async getCurrentPlan(req: Request, res: Response) {
    const result = await this.service.getCurrentPlan(req.params.id)
    return res.json(result)
  }
}
