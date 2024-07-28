import * as z from 'zod'

export const loginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    })
})

export const registerSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6, {
        message: "Minimum 6 characters required"
    }),
    confirmPassword: z.string().min(6, {
        message: "Minimum 6 characters required"
    }),
    displayName: z.string().min(1, {
        message: "Display name is required"
    })

})