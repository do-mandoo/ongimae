'use client';
import {
  HomeIcon,
  StarIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavUI = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'home', Icon: HomeIcon },
    { href: '/search', label: 'search', Icon: MagnifyingGlassIcon },
    { href: '/favorite', label: 'favorite', Icon: StarIcon },
    { href: '/more', label: 'more', Icon: EllipsisVerticalIcon },
  ];
  return (
    <nav className='fixed bottom-0 w-full mx-auto max-w-[430px] grid grid-cols-4 border-neutral-600 border-t px-5 py-2 *:text-white bg-neutral-800'>
      <Link href='/' className='flex flex-col items-center gap-px'>
        {pathname === '/' ? (
          <>
            <HomeIcon className='w-7 h-7 text-white' />
            <span className='uppercase text-white'>home</span>
          </>
        ) : (
          <>
            <HomeIcon className='w-7 h-7 text-gray-500' />
            <span className='uppercase text-gray-500'>home</span>
          </>
        )}
      </Link>
      <Link href='/search' className='flex flex-col items-center gap-px'>
        {pathname === '/search' ? (
          <>
            <MagnifyingGlassIcon className='w-7 h-7 text-white' />
            <span className='uppercase text-white'>search</span>
          </>
        ) : (
          <>
            <MagnifyingGlassIcon className='w-7 h-7 text-gray-500' />
            <span className='uppercase text-gray-500'>search</span>
          </>
        )}
      </Link>
      <Link href='/favorite' className='flex flex-col items-center gap-px'>
        {pathname === '/favorite' ? (
          <>
            <StarIcon className='w-7 h-7 text-white' />
            <span className='uppercase text-white'>favorite</span>
          </>
        ) : (
          <>
            <StarIcon className='w-7 h-7 text-gray-500' />
            <span className='uppercase text-gray-500'>favorite</span>
          </>
        )}
      </Link>
      <Link href='/more' className='flex flex-col items-center gap-px'>
        {pathname === '/more' ? (
          <>
            <EllipsisVerticalIcon className='w-7 h-7 text-white' />
            <span className='uppercase text-white'>more</span>
          </>
        ) : (
          <>
            <EllipsisVerticalIcon className='w-7 h-7  text-gray-500' />
            <span className='uppercase text-gray-500'>more</span>
          </>
        )}
      </Link>
    </nav>
  );
};
export default NavUI;
