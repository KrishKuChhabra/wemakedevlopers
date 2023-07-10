"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bg-black text-white ${isSticky ? 'sticky top-0' : ''}`}>
      <div className='px-9 py-9 flex flex-1 justify-between mx-12'>
        <div>
          <Link href='/'>
            <h2 className='text-3xl text-white font-bold'>We make Frontend devs</h2>
          </Link>
        </div>
        <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} bg-blue-900 lg:bg-transparent p-4 rounded-lg`}>
          <ul className='text-lg font-semibold flex flex-col lg:flex-row gap-4 lg:gap-12'>
            <Link href='/Courses'>
              <li className='hover:bg-blue-700 hover:text-white cursor-pointer'>Courses</li>
            </Link>
            <Link href='/Mentor'>
              <li className='hover:bg-blue-700 hover:text-white cursor-pointer'>Mentorship</li>
            </Link>
            <Link href='/Event'>
              <li className='hover:bg-blue-700 hover:text-white cursor-pointer'>Events</li>
            </Link>
           <Link href="/Contact">
            <li className='hover:bg-blue-700 hover:text-white cursor-pointer'>ContactUs</li>
            </Link>
          </ul>
        </div>
        <div className='lg:hidden'>
          <button className='text-white p-2' onClick={handleMenuToggle}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {isMenuOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

