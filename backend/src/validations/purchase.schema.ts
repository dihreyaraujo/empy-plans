import { z } from 'zod'

export const purchaseSchema = z.object({
  name: z.string().min(3),
  planId: z.string().uuid()
})

export type PurchaseDTO = z.infer<typeof purchaseSchema>
