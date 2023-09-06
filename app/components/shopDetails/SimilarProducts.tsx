import React from 'react'
import Product from '../Shop/Product';
import { products } from '@/app/constant';

const SimilarProducts = () => {
  return (
    <div className='flex flex-col gap-6 pb-20'>
      <h3 className='text-xl'>You may also like</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        {products.slice(0, 4).map(({ id, mainImg, title, numOfRatings, rate, price }) => (
          <Product
            key={id}
            id={id}
            mainImg={mainImg}
            title={title}
            numOfRatings={numOfRatings}
            rate={rate}
            price={price}
          />
        ))}
      </div>
    </div>
  )
}

export default SimilarProducts