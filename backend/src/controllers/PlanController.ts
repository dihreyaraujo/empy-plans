import { Request, Response } from 'express'
import { PlanService } from '../services/PlanService'

export class PlanController {
  private service = new PlanService()

  constructor() {
    this.create = this.create.bind(this)
    this.listAll = this.listAll.bind(this)
    this.getCustomPlan = this.getCustomPlan.bind(this)
  }

  async create(req: Request, res: Response) {
    const result = await this.service.create(req.body)
    return res.status(201).json(result)
  }

  async listAll(req: Request, res: Response) {
    const result = await this.service.listAll()
    return res.json(result)
  }

  async getCustomPlan(req: Request, res: Response) {
    const { id } = req.params
    const result = await this.service.getCustomPlan(id)
    return res.json(result)
  }
}
