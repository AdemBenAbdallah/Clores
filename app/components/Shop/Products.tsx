'use client'

import React, { useState } from 'react'

import { BsGridFill } from 'react-icons/bs'
import { RiLayout2Fill } from 'react-icons/ri'
import { IoFilterSharp } from 'react-icons/io5'

import Product from './Product'
import useModal from '@/app/hooks/useModel'
import { products } from '@/app/constant'




const Products = () => {
    const { onOpen } = useModal()
    const [row, setRow] = useState(true)

    return (
        <div className='flex-1'>
            <div className="flex justify-between items-center p-5">
                <div className="flex gap-2 items-center" >
                    <div className={`${row ? "bg-gray-200" : ""} p-[2px] cursor-pointer`}>
                        <BsGridFill
                            onClick={() => setRow(true)}
                            style={{ fontSize: '1.2em' }}
                        />
                    </div>
                    <div className={`${!row ? "bg-gray-200" : ""} p-[2px] cursor-pointer`}>
                        <RiLayout2Fill
                            onClick={() => setRow(false)}
                            style={{ fontSize: '1.3em' }}
                        />
                    </div>
                    <div className="block sm:hidden p-[2px] cursor-pointer">
                        <IoFilterSharp
                            onClick={onOpen}
                            style={{ fontSize: '1.2em' }}
                        />
                    </div>
                </div>
                <select className="bg-white text-black w-40 select select-bordered max-w-xs" defaultValue="manual">
                    <option value="manual">
                        Featured
                    </option>

                    <option value="best-selling">
                        Best selling
                    </option>

                    <option value="title-ascending">
                        Alphabetically, A-Z
                    </option>

                    <option value="title-descending">
                        Alphabetically, Z-A
                    </option>

                    <option value="price-ascending">
                        Price, low to high
                    </option>

                    <option value="price-descending">
                        Price, high to low
                    </option>

                    <option value="created-ascending">
                        Date, old to new
                    </option>

                    <option value="created-descending">
                        Date, new to old
                    </option>
                </select>

            </div>
            <div className={`py-1 px-5 flex flex-wrap justify-center gap-3 ${!row && "flex-col"}`}>
                {products.map(({ id, mainImg, title, numOfRatings, rate, price }) => (
                    <Product
                        key={id}
                        id={id}
                        row={row}
                        mainImg={mainImg}
                        title={title}
                        numOfRatings={numOfRatings}
                        rate={rate}
                        price={price}
                    />
                ))}
            </div>
        </div>
    )
}

export default Products