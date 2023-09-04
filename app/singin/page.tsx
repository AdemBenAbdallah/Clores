import Image from 'next/image'
import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { BiLogoGoogle } from 'react-icons/bi'
import { GrTwitter } from 'react-icons/gr'

const page = () => {
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
            <div className="mt-12 flex flex-col gap-8">
                <h1 className='font-bold text-3xl'>Sign In</h1>
                <div className="flex flex-col gap-2">
                    <p className='text-[14px] text-primary'>Connect with</p>
                    <div className="flex items-center gap-3">
                        <div className="flex-center p-2 bg-white rounded-md">
                            <FaFacebook style={{ color: "#252525", fontSize: '1.4em' }} />
                        </div>
                        <div className="flex-center p-2 bg-white rounded-md">
                            <BiLogoGoogle style={{ color: "#252525", fontSize: '1.5em' }} />
                        </div>
                        <div className="flex-center p-2 bg-white rounded-md">
                            <GrTwitter style={{ color: "#252525", fontSize: '1.5em' }} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className='max-md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                    <input
                        className='mt-2 w-full px-2 py-3 bg-white text-black outline-none'
                        type='text'
                        placeholder='Enter your email'
                    />
                    <input
                        className='mt-2 w-full px-2 py-3 bg-white text-black outline-none'
                        type='text'
                        placeholder='Enter your email'
                    />
                    <div className="flex items-center gap-2 my-2">
                        <input
                            type="checkbox"
                            id="remember"
                            className="checkbox checkbox-xs border border-primary"
                        />
                        <label htmlFor="remember" className="text-black">
                            Remember me
                        </label>
                    </div>
                    <button className='button py2 bg-black text-white'>Sign In</button>
                </div>
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

export default page