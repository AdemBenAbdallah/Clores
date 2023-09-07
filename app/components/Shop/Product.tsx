'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

interface ProductProps {
    id: string;
    row: boolean;
    mainImg: string;
    title: string;
    numOfRatings: number;
    rate: number;
    price: number;
}
const Product: React.FC<ProductProps> = ({ id, row, mainImg, title, numOfRatings, rate, price }) => {
    const router = useRouter()

    return (
        <div
            onClick={() => router.push(`/shop/${id}`)}
            className={`bg-white cursor-pointer  ${!row ? "w-full flex" : "w-[10rem] sm:w-[15rem]"}`}
        >
            <Image
                className={`p-2 ${!row && "max-sm:w-[124px]"}`}
                src={mainImg}
                alt="product"
                width={255}
                height={200}
            />
            <div className="flex flex-col gap-2 p-2">
                <p>{title}</p>
                <div className="flex gap-2 items-center">
                    <div className="flex gap-2">
                        {Array(Math.round(rate)).fill(null).map((_, index) => (
                            <Image
                                key={index}
                                src="/assests/icons/star.svg"
                                width={15}
                                height={15}
                                alt="rating star"
                            />
                        ))}
                    </div>
                    <p className='text-light max-sm:hidden'>({numOfRatings})</p>
                </div>
                <div className="flex sm:justify-between max-sm:gap-2">
                    <p className='text-[16px]'>$ {price}</p>
                    <button
                        className='bg-black px-3 py-1 text-white text-[12px] rounded-full flex gap-1'
                    >
                        Add <span className='hidden sm:block'>to cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product