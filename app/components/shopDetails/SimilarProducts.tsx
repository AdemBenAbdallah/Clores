import React from 'react'
import Product from '../Shop/Product';

const products = [
  {
    imgSrc: "/assests/img/shop/shop1.jpg",
    title: "Product 1",
    nbStar: 4,
    rate: 4.5,
    price: 29.99,
  },
  {
    imgSrc: "/assests/img/shop/shop2.jpg",
    title: "Product 2",
    nbStar: 5,
    rate: 4.8,
    price: 39.99,
  },
  {
    imgSrc: "/assests/img/shop/shop3.jpg",
    title: "Product 3",
    nbStar: 3,
    rate: 3.2,
    price: 19.99,
  },
  {
    imgSrc: "/assests/img/shop/shop4.jpg",
    title: "Product 3",
    nbStar: 3,
    rate: 3.2,
    price: 19.99,
  },
  {
    imgSrc: "/assests/img/shop/shop4.jpg",
    title: "Product 3",
    nbStar: 3,
    rate: 3.2,
    price: 19.99,
  },
];

const SimilarProducts = () => {
  return (
    <div className='flex flex-col gap-6 pb-20'>
      <h3 className='text-xl'>You may also like</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        {products.map(({ imgSrc, title, nbStar, rate, price }) => (
          <Product key={title} imgSrc={imgSrc} title={title} nbStar={nbStar} rate={rate} price={price} />
        ))}
      </div>
    </div>
  )
}

export default SimilarProducts