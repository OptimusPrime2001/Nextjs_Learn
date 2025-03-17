import Image from 'next/image';
import Counter from './counter';
import imgUrl from '@/public/bg-1.jpg';

export default async function Home() {
  return (
    <main className='flex flex-col justify-between items-center p-24 min-h-screen text-4xl'>
      Hello nextJs | Home Page
      <Counter />
      <Image src={imgUrl} alt='test' />
    </main>
  );
}
