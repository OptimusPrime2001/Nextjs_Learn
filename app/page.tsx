import Image from 'next/image';
import Counter from './counter';
import imgUrl from '@/public/bg-1.jpg';
import { Agent } from 'https';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default async function Home() {
  const httpsAgent = new Agent({
    rejectUnauthorized: false,
  });
  const response = await fetch(`${API_URL}/hello-word`,{
    method: 'GET',
    // @ts-ignore - Ignoring type error for custom agent property
    agent: httpsAgent,
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    return res.text(); 
  });
  if (!response) {
    throw new Error('Failed to fetch from NestJS');
  } 
  return (
    <main className='flex flex-col justify-between items-center p-24 min-h-screen text-4xl'>
      Hello nextJs | Home Page
      <b>{response}</b>
      <Counter />
      <Image src={imgUrl} alt='test' />
    </main>
  );
}
