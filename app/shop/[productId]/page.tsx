'use client'

import Container from '@/app/components/Container'
import ProductComments from '@/app/components/shopDetails/ProductComments'
import ProductDetails from '@/app/components/shopDetails/ProductDetails'
import SimilarProducts from '@/app/components/shopDetails/SimilarProducts'
import React from 'react'

interface IParams {
    productId?: string
}

const page = ({ params }: { params: IParams }) => {

    console.log(params)
    return (
        <div className='pt-20 bg-gray_white'>
            <Container>
                <div className="flex flex-col gap-20">
                    <div className="flex justify-center">
                        <ProductDetails productId={params.productId} />
                    </div>
                    <ProductComments />
                    <SimilarProducts />
                </div>
            </Container>
        </div>
    )
}

export default page