import { prisma } from '../database/client'

export class PurchaseRepository {
  async create(data: any) {
    return prisma.purchase.create({ data })
  }

  async findByUser(userId: string) {
    return prisma.purchase.findMany({
      where: { userId },
      include: { plan: true }
    })
  }

  async findLastPaid(userId: string) {
    return prisma.purchase.findFirst({
      where: { userId, status: 'pago' },
      orderBy: { createdAt: 'desc' },
      include: { plan: true }
    })
  }
}
