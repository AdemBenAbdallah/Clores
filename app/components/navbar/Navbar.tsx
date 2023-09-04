
import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import UserMenu from './UserMenu'
import Search from './Search'

const Navbar = () => {
    return (
        <div className='fixed w-full bg-black text-white z-10 shadow-sm'>
            <div className="py-4">
                <Container>
                    <div className="flex flex-row items-row justify-between gap-3 md:gap-0">
                        <Logo />
                        <UserMenu />
                        <Search />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar