import React from 'react'
import { headerLogo } from '../assets/images'
import { navLinks } from '../constans/index.js'
import { hamburger } from "../assets/icons";
import { useState } from 'react';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src={headerLogo} alt="NIKE_LOGO" width={130} height={29} />
                </a>
                <ul className='flex flex-1 items-center justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => {
                        return (
                            <li key={item.label}>
                                <a href={item.href} className='text-lg font-montserrat leading-normal text-slate-gray hover:text-purple-700 transition duration-300'>{item.label}</a>
                            </li>
                        )

                    })}
                </ul>
                
                <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
                    <a href="/" className="text-gray-700 hover:text-blue-500 transition duration-300">Sign in</a>
                    <span className="text-gray-500">/</span>
                    <a href="/" className="text-gray-700 hover:text-blue-500 transition duration-300">Explore now</a>
                </div>



                <div className="hidden max-lg:block relative">
                    <img
                        src={hamburger}
                        alt="hamburger icon"
                        width={25}
                        height={25}
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="cursor-pointer"
                    />
                    {/* Dropdown Menu */}
                    {menuOpen && (
                        <ul className="absolute right-0 top-10 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4 w-48">
                            {navLinks.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className="text-lg font-montserrat leading-normal text-slate-gray">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>


            </nav>
        </header>
    )
}

export default Nav