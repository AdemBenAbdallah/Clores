'use client'


import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { AiOutlineMenu } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import useNavBarSm from '@/app/hooks/useNavbarSm';
import { User } from '@prisma/client';


type NavbarProps = {
    currentUser: User | null
}

const Search = ({ currentUser }: NavbarProps) => {
    const router = useRouter()
    const { onOpen } = useNavBarSm()

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
                <HiOutlineShoppingBag
                    className="cursor-pointer"
                    onClick={() => router.push('/cart')}
                    style={{ fontSize: '1.5em' }}
                />
            </div>
            <div className="hidden max-md:flex items-center gap-2">
                <AiOutlineMenu
                    onClick={onOpen}
                    style={{ fontSize: '1.5em' }}
                />
                <HiOutlineShoppingBag
                    className="cursor-pointer"
                    onClick={() => router.push('/cart')}
                    style={{ fontSize: '1.5em' }}
                />
            </div>
        </>
    )
}

export default Search