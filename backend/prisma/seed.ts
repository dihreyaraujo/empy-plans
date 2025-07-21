import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.plan.createMany({
    data: [
      { name: 'Light', price: 189.90, type: 'light', annualPrice: 1899.90, isCustom: false },
      { name: 'Standard', price: 279.90, type: 'standard', annualPrice: 2799, isCustom: false },
      { name: 'Pro', price: 590.90, type: 'pro', annualPrice: 5909, isCustom: false }
    ],
    skipDuplicates: true
  })

  await prisma.user.create({
    data: {
      name: 'Empy Admin',
      email: 'empy@admin.com'
    }
  })
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e)
    prisma.$disconnect()
  })
