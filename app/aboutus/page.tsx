import Image from 'next/image'
import React from 'react'
import { aboutUrlBlur } from '../constant'

const page = () => {
    return (
        <div className="flex-center bg-gray_white">
            <div className='px-3 sm:px-12 xl:px-20  py-20 flex flex-col justify-center gap-10 text-seconday w-full md:w-2/4'>
                <h3 className='text-center text-3xl font-bold mb-1 pt-5'>About us</h3>
                <div className="flex-center">
                    <Image
                        className='object-contain mb-4'
                        src="/assests/img/home/aboutus.webp"
                        alt='about us'
                        blurDataURL={aboutUrlBlur}
                        placeholder='blur'
                        width={500}
                        height={200}
                    />
                </div>
                <div className="flex flex-col gap-2 text-light">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Illo est quaerat ea at. Et tempora, sed officia cumque nulla
                        veniam deserunt ratione hic.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ipsa maiores sequi.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ipsa maiores sequi.</p>
                    <p className='w-30'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ipsa maiores sequi.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className='text-xl font-semibold'>Healthy Plant</h3>
                    <p className='text-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Temporibus repellendus id saepe!</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className='text-xl font-semibold w-30'>Shipping Quickly And Affordably</h3>
                    <p className='text-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Expedita, maiores facere sapiente quos aperiam a iste ut ex repellat nam,
                        optio magni dolore eum ratione beatae. Non maxime deleniti ratione sunt? Aliquam,
                        itaque aspernatur.</p>
                </div>
            </div>
        </div>
    )
}

export default page