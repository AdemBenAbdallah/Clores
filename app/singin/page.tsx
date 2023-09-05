'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import { signIn } from 'next-auth/react';
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";

import { FaFacebook } from 'react-icons/fa'
import { BiLogoGoogle } from 'react-icons/bi'
import { GrTwitter } from 'react-icons/gr'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Page = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const { email, password } = data
        setIsLoading(true)

        signIn('credentials', {
            ...{ email, password },
            redirect: false,
        })
        .then((callback) => {
            if (callback?.ok) {
                router.refresh();
            }
        })
        .finally(() => setIsLoading(false))
        
        router.push('/')
    }

    return (
        <div className='bg-gray_white px-6 md:px-20 py-36 flex gap-12 justify-center text-seconday'>
            <div className="hidden lg:block">
                <Image
                    className='object-cover'
                    src="/assests/img/home/singin.jpg"
                    alt="product"
                    width={496}
                    height={521}
                />
            </div>
            <div className="mt-12 flex flex-col gap-5">
                <h1 className='font-bold text-3xl'>Sign In</h1>
                <div className="flex flex-col gap-2">
                    <p className='text-[14px] text-primary'>Connect with</p>
                    <div className="flex items-center gap-3">
                        <div className="flex-center p-2 bg-white rounded-md cursor-pointer">
                            <FaFacebook
                                style={{ color: "#252525", fontSize: '1.5em' }}
                                onClick={() => signIn('facebook')}
                            />
                        </div>
                        <div className="flex-center p-2 bg-white rounded-md cursor-pointer">
                            <BiLogoGoogle
                                style={{ color: "#252525", fontSize: '1.5em' }}
                                onClick={() => signIn('google')}
                            />
                        </div>
                        <div className="flex-center p-2 bg-white rounded-md cursor-pointer">
                            <GrTwitter
                                style={{ color: "#252525", fontSize: '1.5em' }}
                                onClick={() => signIn('twitter')}
                            />
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-2">
                        <h3 className='max-md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                        <input
                            {...register("email", { required: true })}
                            className='mt-2 w-full px-2 py-3 bg-white text-black outline-none'
                            type='text'
                            placeholder='Enter your email'
                        />
                        {errors.email && <span className='text-[12px] text-red-400'>This field is required</span>}
                        <input
                            {...register("password", { required: true })}
                            className='mt-2 w-full px-2 py-3 bg-white text-black outline-none'
                            type='password'
                            placeholder='Enter your Password'
                        />
                        {errors.password && <span className='text-[12px] text-red-400'>This field is required</span>}
                        <div className="flex items-center gap-2 my-2">
                            <input
                                {...register("checkbox", { required: true })}
                                type="checkbox"
                                id="remember"
                                className="checkbox checkbox-xs border border-primary"
                            />
                            <label htmlFor="remember" className="text-black">
                                Remember me
                            </label>
                            {errors.checkbox && <span className='text-[12px] text-red-400'>This field is required</span>}
                        </div>
                        <button type="submit" className='w-full button py2 bg-black text-white'>Sign In</button>
                        <Link href="/singup">
                            <p className='text-light text-end'>Sign Up</p>
                        </Link>
                    </div>
                </form>
                <div className="flex flex-col gap-2">
                    <p className='text-light text-[13px]'>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quidem, recusandae repellat.
                    </p>
                    <p className='text-[13px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div >
    )
}

export default Page