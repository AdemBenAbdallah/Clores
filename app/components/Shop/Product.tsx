'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

interface ProductProps {
    imgSrc: string;
    title: string;
    nbStar: number;
    rate: number;
    price: number;
}
const Product: React.FC<ProductProps> = ({ imgSrc, title, nbStar, rate, price }) => {
    const router = useRouter()

    return (
        <div
            onClick={() => router.push('/shop/345')}
            className='bg-white cursor-pointer max-sm:w-[10rem]'
        >
            <Image
                className='p-2'
                src={imgSrc}
                alt="product"
                width={255}
                height={200}
            />
            <div className="flex flex-col gap-2 p-2">
                <p>{title}</p>
                <div className="flex gap-2 items-center">
                    <div className="flex gap-2">
                        {Array(nbStar).fill(null).map((_, index) => (
                            <Image
                                key={index}
                                src="/assests/icons/star.svg"
                                width={15}
                                height={15}
                                alt="rating star"
                            />
                        ))}
                    </div>
                    <p className='text-light max-sm:hidden'>({rate})</p>
                </div>
                <div className="flex justify-between">
                    <p  className='text-[16px]'>$ {price}</p>
                    <button
                        className='bg-black px-3 py-1 text-white text-[12px] rounded-full'
                    >
                        Add <span className='bloack sm:hidden'>to cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product