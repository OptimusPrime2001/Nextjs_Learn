'use client';
import { use } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Page(props: { params: Promise<{ slug: string }> }) {
  const params = use(props.params);
  const pathName = useParams();
  return (
    <div>
      <h1>[folderName]</h1>
      <h2>My Slug shopId: {params.slug}</h2>
      <p>params: {JSON.stringify(pathName)}</p>
      <Link className='bg-sky-200 p-3 rounded-md block w-fit m-4' href='/shop'>
        Back to home
      </Link>
    </div>
  );
}
