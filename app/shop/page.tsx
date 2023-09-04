import React from 'react'
import Container from '../components/Container'
import Sidebar from '../components/Shop/Sidebar'
import Products from '../components/Shop/Products'

const page = () => {
    
    return (
        <div className="pt-20 pb-20 bg-[#f2f2f2]">
            <Container>
                <h1 className='pt-11 pb-5 text-4xl text-black'>Shop</h1>
                <div className="flex">
                    <Sidebar />
                    <Products />
                </div>
            </Container>
        </div>
    )
}

export default page