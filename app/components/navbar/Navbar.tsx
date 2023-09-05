
import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import UserMenu from './UserMenu'
import Search from './Search'
import { User } from '@prisma/client'

type NavbarProps = {
    currentUser: User | null
}
const Navbar = ({ currentUser }: NavbarProps) => {

    return (
        <div className='fixed w-full bg-black text-white z-10 shadow-sm'>
            <div className="py-4">
                <Container>
                    <div className="flex flex-row items-row justify-between gap-3 md:gap-0">
                        <Logo />
                        <UserMenu currentUser={currentUser} />
                        <Search currentUser={currentUser} />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar