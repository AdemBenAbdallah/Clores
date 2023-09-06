'use client'


import React from 'react'
import { FiSearch } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { AiOutlineMenu } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import useNavBarSm from '@/app/hooks/useNavbarSm';
import { User } from '@prisma/client';
import useCartStore from '@/app/hooks/useCartStore';



type NavbarProps = {
    currentUser: User | null
}

const Search = ({ currentUser }: NavbarProps) => {
    const router = useRouter()
    const { onOpen } = useNavBarSm()
    const { productCount } = useCartStore()

    const handleClick = () => {
        if (!currentUser) {
            return router.push('/singin')
        }

        router.push('/cart')
    }
    const ShoppingCartIcon = () => (
        <div className="relative">
            <HiOutlineShoppingBag
                className="cursor-pointer"
                onClick={handleClick}
                style={{ fontSize: '1.5em' }}
            />
            {productCount !== 0 && (
                <div className="absolute bg-white text-black w-4 h-4 top-[-6px] right-[-5px] rounded-full flex items-center justify-center">
                    <span className="text-center">{productCount}</span>
                </div>
            )}
        </div>
    );
    return (
        <>
            <div className='hidden md:flex gap-4 items-center'>
                <FiSearch style={{ fontSize: '1.5em' }} />
                {!currentUser ? (
                    <BsPerson
                        className="cursor-pointer"
                        onClick={() => router.push('/singin')}
                        style={{ fontSize: '1.5em' }}
                    />
                ) : null}
                <ShoppingCartIcon />
            </div>
            <div className="hidden max-md:flex items-center gap-2">
                <AiOutlineMenu
                    onClick={onOpen}
                    style={{ fontSize: '1.5em' }}
                />
                <ShoppingCartIcon />
            </div>
        </>
    )
}

export default Search