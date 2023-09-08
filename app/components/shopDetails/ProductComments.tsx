import { comments } from '@/app/constant'
import Image from 'next/image'
import React from 'react'


const ProductComments = () => {
  return (
    <div className='flex flex-col gap-3'>
      <h3 className='text-xl'>Reviews</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
        {comments.map((item) => (
          <div key={item.id} className="flex flex-col gap-2  bg-white rounded-md p-2">
            <p>{item.name}</p>
            <div className="flex gap-2">
              {Array(item.nbStart).fill(null).map((_, index) => (
                <Image
                  key={index}
                  src="/assests/icons/star.svg"
                  width={15}
                  height={15}
                  alt="rating star"
                  className="object-contain m-0"
                />
              ))}
            </div>
            <p className='text-light text-[13px]'>
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductComments