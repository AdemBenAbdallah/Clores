'use client'

import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

import { CartItem } from '../components/shopDetails/ProductDetails';
import useCartStore from '../hooks/useCartStore';

const Page = () => {
    const router = useRouter()
    const existingCartItems: CartItem[] = typeof localStorage !== 'undefined' ?
        JSON.parse(localStorage.getItem('cart') || '[]') :
        [];

    const { updateProductCount } = useCartStore()

    const [cartItems, setCartItems] = useState(existingCartItems);

    const memoizedCartItems = useMemo(() => cartItems, [cartItems]);

    const totalPrice = useMemo(() => {
        return memoizedCartItems.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }, [memoizedCartItems]);

    const handleQuantityChange = (itemId: string, newQuantity: number) => {
        setCartItems((prevCartItems) => {
            const updatedCart = prevCartItems.map((item) => {
                if (item.id === itemId) {
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
            return updatedCart;
        });
    };
    const handleCheckout = () => {
        alert('Your order is now shipping. Thank you for shopping with us!')
        localStorage.removeItem("cart")
        updateProductCount()
        router.push('/')
    }

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
                                {cartItems.map((product, index) => (
                                    <tr key={index} className='pb-12'>
                                        <td className='flex gap-5'>
                                            <Image
                                                className='object-contain mt-4'
                                                src="/assests/img/shop/shop1.jpg"
                                                alt="product"
                                                width={100}
                                                height={30}
                                            />
                                            <div className="hidden md:block w-[23rem] mt-4">
                                                <p>{product.title}</p>
                                                <p className='text-primary mt-3'>{product.description}</p>
                                            </div>
                                        </td>
                                        <td className='p-3 md:px-12'>
                                            <input
                                                value={product.quantity}
                                                onChange={(e) =>
                                                    handleQuantityChange(product.id, parseInt(e.target.value, 10))
                                                }
                                                className='p-2 bg-white w-24 outline-none'
                                                type='number'
                                                min='0'
                                            />
                                        </td>
                                        <td className='p-3'>
                                            <p className='text-xl font-thin'>$ {product.price}</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='flex-1'>
                        <div className="w-full md:w-[22rem] bg-white p-4">
                            <h3 className='text-xl font-thin'>Shopping Cart</h3>
                            <div className="mt-4">
                                {cartItems.map((product) => (
                                    <div key={product.id} className="flex justify-between items-center mb-2">
                                        <p>{product.title}</p>
                                        <p>${product.price}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between">
                                    <p className="font-semibold">Total:</p>
                                    <p>${totalPrice}</p>
                                </div>
                            </div>
                            <button
                                onClick={handleCheckout}
                                className='button py-2 bg-black text-white w-full mt-3'
                            >Checkout</button>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Page