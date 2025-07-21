import { prisma } from '../database/client'

export class PlanRepository {
  async create(data: any) {
    return prisma.plan.create({ data })
  }

  async findAll() {
    return prisma.plan.findMany()
  }

  async findById(id: string) {
    return prisma.plan.findUnique({ where: { id } })
  }

  async findByType(type: string) {
    return prisma.plan.findFirst({ where: { type } })
  }
}
