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
import { registerSchema } from "@/schemas"
import { register } from "@/actions/register"
import { useState, useTransition } from "react"
import PopupVerification from "@/components/ui/auth/popup-verification"

const RegisterForm = () => {
    const [isPending, startTransition] = useTransition()
    const [openModal, setOpenModal] = useState<Boolean>(false)
    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            displayName: ""
        },
    })
 
  // 2. Define a submit handler.
    const onSubmit =  (values: z.infer<typeof registerSchema>) => {
        startTransition(() => {
          register(values)
          .then(data => {
            if (data?.error) alert(data.error)
            if (data?.success) setOpenModal(prevState => !prevState)
          })
        })
    }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 ">
        <FormField
          control={form.control}
          name="displayName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Display name</FormLabel>
              <FormControl>
                <Input disabled = {isPending} placeholder="shadcn" {...field} className="text-black" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Confirm password</FormLabel>
              <FormControl>
                <Input disabled = {isPending} placeholder="shadcn" {...field} className="text-black" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled = {isPending} className="w-full bg-black text-white hover:bg-black" type="submit">Submit</Button>
      </form>
      {
        openModal &&
        <>
          <div className="fixed top-0 left-0  h-screen w-screen z-10 bg-black opacity-50">
        
          </div>
          <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[11]">
            <PopupVerification setOpenModal = {setOpenModal} email={form.getValues("email")}/>
          </div>
        </>
      }
    </Form>
  )
}

export default RegisterForm