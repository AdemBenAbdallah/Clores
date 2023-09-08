import React from 'react'
import Product from '../Shop/Product';
import { products } from '@/app/constant';

const SimilarProducts = () => {
  return (
    <div className='flex flex-col gap-6 pb-20'>
      <h3 className='text-xl'>You may also like</h3>
      <div className="flex flex-wrap items-center gap-2">
        {products.slice(0, 5).map(({ id, mainImg, title, numOfRatings, rate, price }) => (
          <Product
            key={id}
            id={id}
            row={true}
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