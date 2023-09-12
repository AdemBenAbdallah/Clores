import Image from 'next/image'
import React from 'react'
import { blogPosts } from '../constant';


const BlogPage = () => {
    return (
        <div className="flex-center bg-gray_white">
            <div className='px-3 md:py-12 lg:py-20 py-20 flex flex-col gap-10 text-seconday w-[54rem]'>
                <h3 className='text-center text-3xl font-bold pt-11 p-9'>Our Blog</h3>
                {blogPosts.map((post, index) => (
                    <div key={index} className="flex max-md:flex-wrap gap-4 md:gap-14">
                        <Image
                            className='object-contain mb-4 max-sm:w-30'
                            src={post.imageSrc}
                            alt={post.title}
                            width={400}
                            height={200}
                        />
                        <div className="flex flex-col gap-2">
                            <p className='text-[16px] text-light'>{post.title}</p>
                            <h3 className='text-xl font-semibold w-30 mt-1 md:mt-4'>{post.title}</h3>
                            <p className='text-light'>{post.description}</p>
                            <p className='w-fit font-normal sm:font-semibold border-b-2 border-black mt-2 md:mt-12'>Read more</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogPage;
