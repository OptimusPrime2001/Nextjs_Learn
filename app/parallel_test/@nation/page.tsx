import Image from 'next/image';
import React from 'react';

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className='flex-1'>
      <div
        aria-label='card-item-v3'
        className='flex flex-col p-5 bg-white rounded-xl border border-gray-100'
      >
        <div className='relative flex-shrink-0 mb-5 h-[250px]'>
          <Image
            src='https://bit.ly/3zzCTUT'
            alt=''
            className='object-cover w-full h-full rounded-lg'
            width={200}
            height={500}
          />
        </div>
        <div className='flex flex-col flex-1'>
          <h3 className='mb-3 text-lg font-bold'>
            Welcome to the best place to travel on the world
          </h3>
        </div>
      </div>
    </div>
  );
}
