import Image from 'next/image'
import React from 'react'


const page = async () => {

    return (
        <div className="flex-center bg-gray_white">
            <div className='px-6 md:px-20 py-36 flex flex-col gap-12 justify-center text-seconday'>
                <h3 className='text-start text-3xl font-bold mb-1 pt-5'>Shopping Cart</h3>
                <div className="flex gap-28 flex-wrap">
                    <div className="flex flex-col ">
                        <table className='flex-3'>
                            <thead>
                                <tr className='font-serif'>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array(3).fill(null).map((_, index) => (
                                    <tr key={index} className='pb-12'>
                                        <td className='flex gap-5'>
                                            <Image
                                                className='object-contain mt-4'
                                                src="/assests/img/shop/shop1.jpg"
                                                alt="product"
                                                width={100}
                                                height={30}
                                            />
                                            <div className="hidden md:block w-60 mt-4">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque.</p>
                                                <p className='text-primary mt-3'>(254)</p>
                                            </div>
                                        </td>
                                        <td className='p-3 md:px-12'>
                                            <input className='p-2 bg-white w-24 outline-none' type='number' min='0' defaultValue="1" />
                                        </td>
                                        <td className='p-3'>
                                            <p className='text-xl font-thin'>$ 25</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='flex-1'>
                        <div className="w-full md:w-[15rem] bg-white p-4">
                            <h3 className='text-xl font-thin'>Shopping Cart</h3>
                            <div className="mt-4">
                                <div className="flex justify-between items-center mb-2">
                                    <p>Product 1</p>
                                    <p>$25</p>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <p>Product 2</p>
                                    <p>$30</p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <div className="flex justify-between">
                                    <p className="font-semibold">Total:</p>
                                    <p>$55</p>
                                </div>
                            </div>
                            <button className='button py-2 bg-black text-white w-full mt-3'>Checkout</button>
                        </div>
                    </div>
                </div>

            </div >
        </div>
    )
}

export default page