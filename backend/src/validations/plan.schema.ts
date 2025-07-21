import { z } from 'zod'

export const createPlanSchema = z.object({
  name: z.string().min(3, 'Nome do plano é obrigatório'),
  discount: z.number().min(0).max(100).optional()
})

export type CreatePlanDTO = z.infer<typeof createPlanSchema>
