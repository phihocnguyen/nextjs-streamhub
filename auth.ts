import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from '@auth/prisma-adapter' 
import { db } from '@/lib/db'
import { getUserById } from "@/data/user"
import { Adapter } from "next-auth/adapters"



export const { auth, handlers: {GET, POST}, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/login",
    error: "/error"
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: {
          id: user.id
        },
        data: {
          emailVerified: new Date()
        }
      })
    }
  },
  callbacks: {
    async signIn({ user, account }){
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") return true
      const existingUser = await getUserById(user.id as string)

      // prevent sign in without email verification

      if (!existingUser?.emailVerified) return false

      // Todo:  add 2FA check

      return true
    }, 
    async session({ token, session }) {
      if (session.user && token.sub) {
        session.user.id = token.sub
      }
      if (token.role && session.user) {
        session.user.role = token.role
      }
      return session
    },
    async jwt({ token }) {
      if (!token.sub) return token 
      const existingUser = await getUserById(token.sub)
      if (!existingUser) return token
      token.role = existingUser.role
      return token
    }
  },
  adapter: PrismaAdapter(db) as Adapter ,
  session: {strategy: 'jwt'},
  ...authConfig
})