/* eslint-disable no-unused-vars */
'use client';
import Link from 'next/link';
import '@styles/style.scss';
import { usePathname } from 'next/navigation';
import StyledComponentsRegistry from '@/src/lib/registry';
import { Advent_Pro } from 'next/font/google';

const inter = Advent_Pro({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  style: 'italic',
});

const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = [
    {
      name: 'Home',
      title: 'Root app',
      href: '/',
    },
    {
      name: 'Dashboard',
      href: '/dashboard',
    },
    {
      name: 'Product',
      href: '/product',
      title: 'dynamic routes',
    },
    {
      name: 'Shop',
      href: '/shop',
    },
    {
      name: 'Optional',
      href: '/optional',
      title: 'dynamic routes',
    },
    {
      name: 'Parallel',
      href: '/parallel_test',
    },
    {
      name: 'Feed',
      href: '/feed',
      title: 'Incepting routes, parallel',
    },
    {
      name: 'Optimization',
      href: '/optimization',
      title: 'Image',
    },
  ];
  const pathname = usePathname();
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={inter.className}>
        {' '}
        <header className='flex justify-between p-4 font-bold text-white bg-black'>
          <Link href='/'>Header RootLayout</Link>
        </header>
        <nav className='flex flex-wrap'>
          {menu.map((link) => {
            const isActive =
              link.href.length > 2
                ? pathname.includes(link.href)
                : pathname === link.href;
            return (
              <Link
                className={`p-2 rounded-md flex flex-col items-center justify-center bg-black m-2 shadow-sm ${
                  isActive
                    ? 'text-black bg-gray-200 border-2 border-black'
                    : 'text-white'
                }`}
                href={link.href}
                key={link.name}
              >
                <h1>{link.name}</h1>
                <h2>{link.title}</h2>
              </Link>
            );
          })}
        </nav>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
