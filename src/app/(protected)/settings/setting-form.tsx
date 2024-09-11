'use client'
import * as z from 'zod'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { profileSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

const SettingForm = () => {

    const form = useForm<z.infer<typeof profileSchema>>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            displayName: ""
        },
    })
    return ( 
        <>
            <div className="flex items-center flex-col">
                <Avatar className="w-[60px] h-[60px]">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/85166295?v=4" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="mt-4 font-bold">Nguyễn Phi Học</p>
            </div>
            <Form {...form}>
                <form>
                    <FormField
                        control={form.control}
                        name='email'
                        render={({field}) => (
                            <FormItem className='mt-4'>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='email...' />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='displayName'
                        render={({field}) => (
                            <FormItem className='mt-4'>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='username...' />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='password'
                        render={({field}) => (
                            <FormItem className='mt-4'>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='password...' />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='confirmPassword'
                        render={({field}) => (
                            <FormItem className='mt-4'>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='confirm password...' />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button className='w-full mt-4'>Xác nhận</Button>
                </form>
            </Form>
        </>
     );
}
 
export default SettingForm;