import Image from 'next/image';
import Counter from './counter';
import imgUrl from '@/public/bg-1.jpg';
import { Agent } from 'https';

export default async function Home() {
  const httpsAgent = new Agent({
    rejectUnauthorized: false,
  });
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string,{
    agent:process.env.NODE_ENV === 'development' ? httpsAgent:undefined,
  });
  if (!response.ok) {
    throw new Error('Failed to fetch from NestJS');
  }
  console.log(response);
  return (
    <main className='flex flex-col justify-between items-center p-24 min-h-screen text-4xl'>
      Hello nextJs | Home Page
      <Counter />
      <Image src={imgUrl} alt='test' />
    </main>
  );
}
