import Image from 'next/image'
import React from 'react'

const page = () => {
    

    return (
        <div className="flex-center bg-gray_white">
            <div className='px-3 md:py-12 lg:py-20 py-20 flex flex-col gap-10 text-seconday w-[54rem]'>
                <h3 className='text-center text-3xl font-bold pt-11 p-9'>Our Blog</h3>
                {Array(4).fill(null).map((_, index) => (
                    <div key={index} className="flex max-md:flex-wrap gap-4 md:gap-14">
                        <Image
                            className='object-contain mb-4 max-sm:w-30'
                            src="/assests/img/home/singin.jpg"
                            alt='about us'
                            width={400}
                            height={200}
                        />
                        <div className="flex flex-col gap-2">
                            <p className='text-[16px] text-light'>Lorem ipsum</p>
                            <h3 className='text-xl font-semibold w-30 mt-1 md:mt-4'>Shipping Quickly And Affordably</h3>
                            <p className='text-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Expedita, maiores facere sapiente quos aperiam a iste ut ex repellat nam,
                                optio magni dolore eum ratione beatae. Non maxime deleniti ratione sunt? Aliquam,
                                itaque aspernatur.</p>
                            <p className='w-fit font-semibold border-b-2 border-black mt-2 md:mt-12'>Read more</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page