import Image from 'next/image'
import React from 'react'
import { aboutUrlBlur } from '../constant'

const AboutPage = () => {
    return (
        <div className="flex-center bg-gray_white">
            <div className='px-3 sm:px-12 xl:px-20  py-20 flex flex-col justify-center gap-10 text-seconday w-full md:w-2/4'>
                <h3 className='text-center text-3xl font-bold mb-1 pt-5'>About Us</h3>
                <div className="flex-center">
                    <Image
                        className='object-contain mb-4'
                        src="/assests/img/home/aboutus.webp"
                        alt='About Us Image'
                        blurDataURL={aboutUrlBlur}
                        placeholder='blur'
                        width={500}
                        height={200}
                    />
                </div>
                <div className="flex flex-col gap-2 text-light">
                    <p>Welcome to our plant paradise! We are passionate about providing you with the most beautiful and healthy plants for your home or office.</p>
                    <p>With a wide variety of plant species to choose from, we have something for every plant lover.</p>
                    <p>Our mission is to make plant shopping a breeze with quick and affordable shipping options.</p>
                    <p className='w-30'>Explore our collection and bring a touch of greenery into your life.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className='text-xl font-semibold'>Healthy Plants</h3>
                    <p className='text-light'>We take great care in nurturing our plants to ensure they are healthy and vibrant when they arrive at your doorstep. Your satisfaction is our top priority.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className='text-xl font-semibold w-30'>Shipping Quickly And Affordably</h3>
                    <p className='text-light'>We understand the excitement of receiving your new plants, which is why we offer fast and affordable shipping options. Your plants will be on their way to you in no time.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
