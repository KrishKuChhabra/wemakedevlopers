  import React from 'react';
  import { Rowdies } from 'next/font/google';
  import {Acme}  from 'next/font/google'
  import Link from 'next/link';
  const rowdies = Rowdies({
    subsets: ['latin'],
    weight: '700',
  });
  const  acme= Acme({
      subsets: ['latin'],
      weight: '400',
  })


  interface HeroSectionProps {}

  const HeroSection: React.FC<HeroSectionProps> = () => {
    return (
      <div className="bg-black text-white flex justify-center items-center h-full">
        <div className="text-center p-20 m-20">
          <h4  className={`${rowdies.className} text-8xl`} style={{ marginBottom: '20px' }}>
            Inspire.Educate
          </h4>
          <h4 className={`${rowdies.className} text-8xl`} style={{ marginBottom: '20px' }}>
            Empower
          </h4>
          <div className="my-7">
            <p className='text-2xl' style={{ marginTop: '20px' }}>
              This is a community that provides <span className=' text-orange-500 '>free hands-on training</span> in various fields of computer science <br /> and has an
              inclusive community focusing on a <span className='text-orange-500'>learn-by-doing</span> approach.
            </p>
          </div>
            <div className=''>
              <div className=' font-bold  flex justify-center items-center gap-4'>
           <Link href="/Courses"><span className='  p-2 m-2  rounded-lg text-xl   bg-blue-500 hover:bg-blue-700 cursor-pointer '>Courses</span></Link>     
           <Link href="/Mentor"> <span className=' p-2 m-2  rounded-lg text-xl  bg-blue-500 hover:bg-blue-700 cursor-pointer '>Mentorship</span></Link>    
            <Link href="/Event"><span className=' p-2 m-2  rounded-lg text-xl  bg-blue-500 hover:bg-blue-700 cursor-pointer '>Events</span></Link>    
              </div>
            </div>
        </div>
      </div>
    );
  };

  export default HeroSection;
