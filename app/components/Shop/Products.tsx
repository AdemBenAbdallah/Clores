'use client'

import React, { useState } from 'react'
import { BsGridFill } from 'react-icons/bs'
import { BsListColumnsReverse } from 'react-icons/bs'
import Product from './Product'
import useModal from '@/app/hooks/useModel'


const products = [
    {
        imgSrc: "/assests/img/shop/shop1.jpg",
        title: "Product 1",
        nbStar: 4,
        rate: 4.5,
        price: 29.99,
    },
    {
        imgSrc: "/assests/img/shop/shop2.jpg",
        title: "Product 2",
        nbStar: 5,
        rate: 4.8,
        price: 39.99,
    },
    {
        imgSrc: "/assests/img/shop/shop3.jpg",
        title: "Product 3",
        nbStar: 3,
        rate: 3.2,
        price: 19.99,
    },
    {
        imgSrc: "/assests/img/shop/shop4.jpg",
        title: "Product 3",
        nbStar: 3,
        rate: 3.2,
        price: 19.99,
    },
];


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
                {products.map(({ imgSrc, title, nbStar, rate, price }, index) => (
                    <Product
                        key={index}
                        imgSrc={imgSrc}
                        title={title}
                        nbStar={nbStar}
                        rate={rate}
                        price={price}
                    />
                ))}
            </div>
        </div>
    )
}

export default Products