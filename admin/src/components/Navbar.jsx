import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({ setToken }) => {
    return (
        <div className='flex bg-black border-b text-tertiary items-center py-3 px-4 sm:px-6 md:px-12 lg:px-24 justify-between'>
            {/* Hamburger menu space - empty for now but reserves space */}
            <div className='flex sm:hidden w-8 h-8'>
                {/* This div reserves space for the hamburger menu */}
            </div>
            
            {/* Logo - centered on mobile, left-aligned on larger screens */}
            <div className='flex justify-center overflow-hidden h-12 sm:justify-start items-start sm:items-center absolute transform translate-x-2/3 sm:static sm:transform-none'>
                <img 
                    src="/Logo.png" 
                    alt="Logo" 
                    className='h-14 sm:h-36 object-contain' 
                />
            </div>
            
            {/* Logout button - always on the right */}
            <button 
                onClick={() => setToken('')} 
                className='bg-white text-primary px-4 py-2 sm:px-6 sm:py-2 md:px-7 md:py-2 rounded-full cursor-pointer text-sm sm:text-base md:text-lg font-medium hover:bg-gray-100 transition-colors duration-200 ml-auto sm:ml-0'
            >
                Logout
            </button>
        </div>
    )
}

export default Navbar