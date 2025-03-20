'use client';
import { classNames } from '@/src/utils/common';
import Image from 'next/image';
import { useState } from 'react';

type ImageProps = {
  id?: string;
  name?: string;
  href: string;
  username?: string;
  imageSrc?: string;
};
export default function BlurImage(props: ImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className='relative w-10 h-10 rounded-lg group'>
      <Image
        alt=''
        src={props.href }
        fill
        objectFit='contain'
        priority
        className={classNames(
          'w-full h-auto bg-blue-500 duration-1000 ease-in-out aspect-square group-hover:opacity-75',
          isLoading
            ? 'blur-2xl grayscale scale-110'
            : 'grayscale-0 scale-100 blur-0',
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
