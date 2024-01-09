"use client"
import React from 'react';
import CartIcon from './icons/cartIcon';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import Link from 'next/link';


const Navbar = () => {
  const router = useRouter();
  const { cart } = useSelector((state) => state.cart);


  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center gap-4 px-10 py-2
    border bg-white shadow-md">
      <img src="/mylogo.png" alt="logo" className="h-10 w-40" />
      <div className='absolute top-4 right-20 font-semibold flex justice-between gap-4'>
        <Link className='text-gray-800' href={"/"}>Home</Link>
      </div>
      <div
        className="text-2xl text-[#white]  flex items-center cursor-pointer relative"
        onClick={() => router.push("/cart")}
      >
        <CartIcon />
      </div>

      <div className="absolute top-2 right-6 w-6 font-normal flex align-middle justify-center bg-slate-800 text-white rounded-full">

        <p> {cart.length} </p>
      </div>

    </nav>
  );
};

export default Navbar;


