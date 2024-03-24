
import {z} from 'zod'
export const createTopicSchema = z.object({
    title: z
    .string()
    .min(4, 'Title should be at least 4 characters long')
    .regex(/^[a-zA-Z]+$|^[0-9]+$|^[\w\s]+$|^[\w\s_]+$/, { 
        message: "Use letters and numbers only" 
    }),      
    content: z
    .string()
    .min(4, "Topik content should be at least 4 characters long"),
    
})

export type createTopicSchemaType = z.infer<typeof createTopicSchema>

