import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
declare module "next-auth" {
  interface User {
    role: "ADMIN" | "USER";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: "ADMIN" | "USER";
  }
}