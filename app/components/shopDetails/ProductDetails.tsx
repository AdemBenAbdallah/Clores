'use client'

import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { BsPinterest } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'


const ProductDetails = () => {
    const [mainImage, setMainImage] = useState("/assests/img/shop/shop1.jpg");
    const [selectedImage, setSelectedImage] = useState("/assests/img/shop/shop1.jpg");
    const inputRef = useRef<HTMLInputElement>(null)

    const handleImageClick = (newImageSrc: string) => {
        setMainImage(newImageSrc);
        setSelectedImage(newImageSrc);
    };

    const handleClick = () => {
        console.log(inputRef.current?.value)
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
                        <Image
                            src="/assests/img/shop/shop2.jpg"
                            alt="product"
                            width={50}
                            height={50}
                            onClick={() => handleImageClick("/assests/img/shop/shop2.jpg")}
                            className={selectedImage === "/assests/img/shop/shop2.jpg" ? "border-2 border-primary" : ""}
                        />
                        <Image
                            src="/assests/img/shop/shop3.jpg"
                            alt="product"
                            width={50}
                            height={50}
                            onClick={() => handleImageClick("/assests/img/shop/shop3.jpg")}
                            className={selectedImage === "/assests/img/shop/shop3.jpg" ? "border-2 border-primary" : ""}
                        />
                        <Image
                            src="/assests/img/shop/shop4.jpg"
                            alt="product"
                            width={50}
                            height={50}
                            onClick={() => handleImageClick("/assests/img/shop/shop4.jpg")}
                            className={selectedImage === "/assests/img/shop/shop4.jpg" ? "border-2 border-primary" : ""}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-12 flex flex-col gap-3 md:gap-8">
                <div className="flex flex-col gap-2">
                    <h1 className='text-xl'>Spider Plant Hower</h1>
                    <div className="flex gap-2 items-center">
                        <div className="flex gap-2">
                            {Array(5).fill(null).map((_, index) => (
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
                        <p className='text-light'>(24)</p>
                    </div>
                    <p className='text-xl'>$ 43</p>
                </div>
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit.</p>
                <div className="flex flex-col gap-2">
                    <h3>Description</h3>
                    <p className='text-light mb-1 w-[20rem] md:w-[29rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Ex incidunt exercitationem autem possimus debitis alias
                        quia maxime facere vero? Officiis magnam veritatis excepturi!
                    </p>
                    <p className='mt-2'>Lorem ipsum dolor sit.</p>
                </div>
                <div className="flex">
                    <input ref={inputRef} className='p-2 bg-white w-16 outline-none' type='number' min='0' />
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