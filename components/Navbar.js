import Link from 'next/link';
import React from 'react';
import Logo from "../public/assets/Logo.svg";

const Navbar = () => {
    
    return(
        <header className='bg-green-800 fixed top-6 w-full z-30 bg-white-500 transition-all'>
            <nav className='max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4'>
                <div className='col-start-1 col-end-2 flex items-center'>
                    <h1 className='text-white font-bold text-xl'> Crypto History Dashboard </h1>
                </div>
                <ul className='hidden lg:flex col-start-2 col-end-8 items-center'>
                    <button className='px-6 text-white py-2 font-bold mx-4 cursor-pointer animation-hover inline-block relative font-mono'> Testimonials</button>
                    <button className='px-6 py-2 text-white font-bold mx-4 cursor-pointer animation-hover inline-block relative font-mono'> Feature</button>
                    <button className='px-6 py-2 text-white font-bold mx-4 cursor-pointer animation-hover inline-block relative font-mono'> Pricing</button>
                    <button className='px-6 py-2 text-white font-bold mx-4 cursor-pointer animation-hover inline-block relative font-mono'> About</button>
                </ul>
                <div className='col-start-10 col-end-12 font-medium flex justify-end items-center'>
                    <button className='text-white mx-2 sm:mx-4 uppercase font-bold tracking-wide'> Buy Crypto </button>
                    <button className='text-white mx-2 sm:mx-4 uppercase font-bold tracking-wide'> Wallets </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;