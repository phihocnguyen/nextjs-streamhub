"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { loginSchema } from "@/schemas"
import { login } from "@/actions/login"
import { useTransition } from "react"
import { FaGithub } from "react-icons/fa";
import { signIn } from 'next-auth/react'
import { DEFAULT_LOGIN_REDIRECT } from "../../../../routes"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
const LoginForm = () => {
    const [isPending, startTransition] = useTransition()
    const searchParams = useSearchParams()
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked" ? "Email already in use with diffrent provider!" : ""
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })
 
  // 2. Define a submit handler.
    const onSubmit =  async (values: z.infer<typeof loginSchema>) => {
      startTransition(() => {
        login(values)
        .then(data => {
          if (data?.error) alert(data.error)
          if (data?.success) alert(data.success)
        })
      })
    }

    const socialLoginHandler = (provider : string) => {
      signIn(provider, {
        callbackUrl: DEFAULT_LOGIN_REDIRECT
      })
    }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Username</FormLabel>
              <FormControl>
                <Input disabled = {isPending} placeholder="shadcn" {...field} className="text-black" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Password</FormLabel>
              <FormControl>
                <Input disabled = {isPending} placeholder="shadcn" {...field} className="text-black" />
              </FormControl>
              <Button
                size="sm"
                variant="link"
                asChild
                className = 'px-0 font-normal text-black'  
              >
                <Link href = '/reset'>
                  Forgot password?
                </Link>
              </Button>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled = {isPending} className="w-full bg-black text-white hover:bg-black" type="submit">Submit</Button>
      </form>
      <Button onClick={() => socialLoginHandler("github")} className="mt-4  w-full"><FaGithub className="mr-4"/> <span>Login with github</span></Button>
    </Form>
  )
}

export default LoginForm