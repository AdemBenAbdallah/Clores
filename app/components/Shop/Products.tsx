'use client'

import React from 'react'
import { BsGridFill } from 'react-icons/bs'
import { BsListColumnsReverse } from 'react-icons/bs'
import Product from './Product'
import useModal from '@/app/hooks/useModel'
import { products } from '@/app/constant'




const Products = () => {
    const { onOpen } = useModal()

    return (
        <div className='flex-1'>
            <div className="flex justify-between items-center p-5">
                <div className="flex gap-2" >
                    <BsGridFill
                        onClick={onOpen}
                        style={{ fontSize: '1.2em' }}
                    />
                    <BsListColumnsReverse style={{ fontSize: '1.2em' }} />
                </div>
                <select className="bg-white text-black w-40 select select-bordered max-w-xs" defaultValue="1">
                    <option disabled value="1">Who shot first?</option>
                    <option value="2">Han Solo</option>
                    <option value="3">Greedo</option>
                </select>

            </div>
            <div className="py-1 px-5 flex flex-wrap justify-center gap-3">
                {products.map(({ id, mainImg, title, numOfRatings, rate, price }) => (
                    <Product
                        key={id}
                        id={id}
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