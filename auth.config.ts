import credentials from "next-auth/providers/credentials";
import { loginSchema } from "@/schemas";
import type { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs"
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
export default {
    providers: [
        Github({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        Google,
        credentials({
            async authorize(credentials) {
                const validatedFields = loginSchema.safeParse(credentials)

                if (validatedFields.success) {
                    const { email, password } = validatedFields.data 
                    const user = await getUserByEmail(email)
                    if (!user || !user.password) return null 

                    const passwordMatch = await bcrypt.compare(
                        password,
                        user.password
                    )

                    if (passwordMatch) return user 
                }
                return null
            },
        })
    ],
} satisfies NextAuthConfig