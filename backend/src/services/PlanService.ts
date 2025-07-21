import { PlanRepository } from '../repositories/PlanRepository'

export class PlanService {
  private repo = new PlanRepository()

  async create(data: any) {
    const standard = await this.repo.findByType('standard')
    const discount = data.discount || 0

    return this.repo.create({
      name: data.name,
      price: Number((standard!.price - (standard!.price * (Number(discount) / 100))).toFixed(2)),
      type: 'custom',
      isCustom: true,
      discount,
      annualPrice: data.annualPrice
    })
  }

  async listAll() {
    return this.repo.findAll()
  }

  async getCustomPlan(id: string) {
    return this.repo.findById(id)
  }
}
