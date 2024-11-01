'use client';

import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CartModal from './CartModal';

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  const isLoggedIn = false;
  
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev)=>!prev);
  };

  return (
    <div className='flex items-center xl:gap-8 relative'>
      <Image src ="/profile.png" alt="" width={22} height={22} className="cursor-pointer" onClick={handleProfile}/>
      {isProfileOpen && <div className='absolute p-4 rounded-md top-12 left-0  text-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'>
        <Link href="/">Profile</Link>
        <div className='mt-2 cursor-pointer'>Logout</div></div>}
      <Image src ="/notification.png" alt="" width={22} height={22} className="cursor-pointer"/>
      <div className='relative cursor-pointer'>
      <Image src ="/cart.png" alt="" width={22} height={22} className="cursor-pointer" onClick={()=>setIsCartOpen((prev)=>!prev)}/>
     <div className='absolute -top-4 -right-4 rounded-full w-6 h-6 bg-[#F35C7A] text-white text-sm flex items-center justify-center ' >2</div>
      </div>
      {isCartOpen && <CartModal/>}
    </div>
)
}

export default NavIcons
