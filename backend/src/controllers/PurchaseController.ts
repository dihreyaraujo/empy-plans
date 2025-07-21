import { Request, Response } from 'express'
import { PurchaseService } from '../services/PurchaseService'

export class PurchaseController {
  private service = new PurchaseService()

  constructor() {
    this.purchasePlan = this.purchasePlan.bind(this)
  }

  async purchasePlan(req: Request, res: Response) {
    const result = await this.service.purchase(req.body)
    return res.status(201).json(result)
  }
}
