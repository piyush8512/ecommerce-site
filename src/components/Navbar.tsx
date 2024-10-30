import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image';
import SearchBar from './SearchBar';


const Navbar = () => {
  return (
    <div className = "h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
        <div className=' h-full flex items-center justify-between'>
        {/*mobile*/}
        <Link href="/">
        <div className='text-2xl tracking-wide'>LAMA</div> 
        </Link>
        <Menu/>
        </div>
        {/* bigger screen */}
        <div className='hidden md:flex items-center justify-between gap-8 h-full'>
            {/* left */}
            <div className='w-1/3'>
            <Link href="/">
            <Image src ="/logo.png" alt="logo" width={24} height={24}/>
            <div className='text-2xl tracking-wide'>Lama</div>
            </Link>
            </div>
            {/* right */}
            <div className='w-2/3'>
            <SearchBar/>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
