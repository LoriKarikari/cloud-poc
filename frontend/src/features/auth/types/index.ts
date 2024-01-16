import { registerInputSchema } from '@auth/schemas'
import z from 'zod'

export type RegisterInput = z.infer<typeof registerInputSchema>
