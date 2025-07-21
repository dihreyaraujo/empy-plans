import { prisma } from '../database/client'

export class UserRepository {
  async findOrCreate(email: string, name: string) {
    let user = await prisma.user.findFirst({ where: { name } })
    if (!user) {
      user = await prisma.user.create({ data: { email, name } })
    }
    return user
  }
}
