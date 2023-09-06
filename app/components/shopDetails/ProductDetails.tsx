'use client'

import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { BsPinterest } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import Accordion from '../Accordion'
import { products } from '@/app/constant'
import useCartStore from '@/app/hooks/useCartStore'

export interface Product {
    id: string;
    title: string;
    rate: number;
    numOfRatings: number;
    scientificName: string;
    commonNames: string[];
    description: string;
    mainImg: string;
    otherViews: string[];
    price: number;
}

export interface CartItem extends Product {
    quantity: number;
}

type ProductDetailsProps = {
    productId?: string
}

const ProductDetails = ({ productId }: ProductDetailsProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const product = products.find(p => p.id.toString() === productId)
    const [mainImage, setMainImage] = useState(product?.mainImg ?? '');
    const [selectedImage, setSelectedImage] = useState(product?.mainImg);
    const { updateProductCount } = useCartStore()


    const handleImageClick = (newImageSrc: string) => {
        setMainImage(newImageSrc);
        setSelectedImage(newImageSrc);
    };

    const handleClick = () => {
        const existingCartItems: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]')
        const existingCartItem = existingCartItems.find(item => item.id === product?.id);
        const inputValue = inputRef.current?.value

        if (product && inputValue) {
            const existingCartItem = existingCartItems.find((item) => item.id === product.id);

            if (existingCartItem) {
                existingCartItem.quantity += parseInt(inputValue, 10);
            } else {
                const cartItem: CartItem = {
                    ...product,
                    quantity: parseInt(inputValue, 10),
                };
                existingCartItems.push(cartItem);
            }
        }

        localStorage.setItem('cart', JSON.stringify(existingCartItems))
        updateProductCount()
        alert('Product added to cart!')
    }
    return (
        <div className='flex gap-3 md:gap-12 flex-col md:flex-row justify-center text-seconday'>
            <div>
                <h3 className='pt-4 pb-1'><span className='text-light'>Shop/</span>Shop Details</h3>
                <div className="flex flex-col items-end gap-4 w-full">
                    <Image
                        className='max-md:w-full'
                        src={mainImage}
                        alt="product"
                        width={500}
                        height={300}
                    />
                    <div className="w-full flex items-start gap-4">
                        {product?.otherViews.map((img, index) => (
                            <Image
                                key={index}
                                src={img}
                                alt="product"
                                width={50}
                                height={50}
                                onClick={() => handleImageClick(img)}
                                className={selectedImage === img ? "border-2 border-primary" : ""}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-12 flex flex-col gap-3 md:gap-[1.5rem]">
                <div className="flex flex-col gap-2">
                    <h1 className='text-xl'>Spider Plant Hower</h1>
                    <div className="flex gap-2 items-center">
                        <div className="flex gap-2">
                            {Array(Math.round(product?.rate ?? 1)).fill(null).map((_, index) => (
                                <Image
                                    key={index}
                                    layout='intrinsic'
                                    src="/assests/icons/star.svg"
                                    width={20}
                                    height={20}
                                    alt="rating star"
                                    className="object-cover md:object-contain  m-0"
                                />
                            ))}
                        </div>
                        <p className='text-light'>({product?.numOfRatings})</p>
                    </div>
                    <p className='text-xl'>$ 43</p>
                </div>
                <div className="flex flex-col gap-2">
                    <Accordion title='Common name' >
                        {product?.commonNames.map((name) => (
                            <p key={name} className='mt-1 text-[12px] text-light'>{name}</p>
                        ))}
                    </Accordion>
                    <Accordion title='Scientific name' >
                        <p className='mt-1 text-[12px] text-light'>{product?.scientificName}</p>
                    </Accordion>
                </div>
                <div className="flex flex-col gap-2">
                    <h3>Description</h3>
                    <p className='text-light mb-1 w-[20rem] md:w-[29rem]'>
                        {product?.description}
                    </p>
                    <p className='mt-2'>Lorem ipsum dolor sit.</p>
                </div>
                <div className="flex">
                    <input ref={inputRef} className='p-2 bg-white w-16 outline-none' type='number' min='1' defaultValue="1" />
                    <button
                        onClick={handleClick}
                        className='py-2 px-12 bg-primary text-white'
                    >Add to Cart</button>
                </div>
                <div className="flex flex-col gap-2">
                    <p className='text-[14px] text-primary'>Social Media</p>
                    <div className="flex items-center gap-3">
                        <BsPinterest style={{ color: "#252525", fontSize: '1.4em' }} />
                        <AiFillTwitterCircle style={{ color: "#252525", fontSize: '1.5em' }} />
                        <AiFillInstagram style={{ color: "#252525", fontSize: '1.5em' }} />
                        <FaFacebook style={{ color: "#252525", fontSize: '1.4em' }} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductDetails