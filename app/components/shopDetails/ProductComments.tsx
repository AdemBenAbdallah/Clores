import Image from 'next/image'
import React from 'react'

const ProductComments = () => {
  return (
    <div className='flex flex-col gap-3'>
      <h3 className='text-xl'>Reviews</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
        {Array(6).fill(null).map((_, index) => (
          <div key={index} className="flex flex-col gap-2  bg-white rounded-md p-2">
            <p>Rayen El Ayeb</p>
            <div className="flex gap-2">
              {Array(5).fill(null).map((_, index) => (
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
            <p className='text-light text-[13px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit
              . Voluptate nulla iusto fuga commodi!
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductComments