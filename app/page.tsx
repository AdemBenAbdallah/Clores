'use client'

import Image from 'next/image';
import Info from './components/Info'
import Features from './components/features/Features';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()

  return (
    <main>
      <div
        className='bg-my_bg_image bg-cover bg-center h-screen flex items-center justify-center'
      >
        <div className="w-full h-screen bg-black bg-opacity-50 absolute top-0"></div>
        <div className="relative pt-28 text-white h-full flex items-center justify-center z-9">
          <div className='flex gap-11 ml-3 md:ml-0'>
            <div className="space-y-2">
              <h1 className='text-[2rem] md:text-[3rem] max-w-[27rem]'>House Plants Delivered Directly To Your House</h1>
              <div className="flex gap-3">
                <Image
                  className='rounded-t-full'
                  src="/assests/img/home/home2.webp"
                  alt="plant 1"
                  width={100}
                  height={150}
                />
                <div className="space-y-2">
                  <p className='w-44 text-light'>The best place to explore, cultivate, and nurture your green sanctuary.</p>
                  <button
                    onClick={() => router.push('/shop')}
                    className='bg-white text-black px-3 py-2'>Shop Plants</button>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex gap-3">
              <Image
                className='rounded-t-full'
                objectFit='cover'
                src="/assests/img/home/home1.webp"
                alt="plant 2"
                width={200}
                height={300}
              />
              <div className="self-center">
                <p className='w-44 text-light'>The best place to explore, cultivate, and nurture your green sanctuary.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Info />
      <Features />
    </main>
  );
}
