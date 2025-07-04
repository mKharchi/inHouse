import React, { useState, useEffect, useRef } from 'react'
import { BiPhone } from 'react-icons/bi'
import { BsPinMap } from 'react-icons/bs'
import { CiMenuBurger } from 'react-icons/ci'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [shown, setShown] = useState(false)
    const menuRef = useRef(null)
    
    const links = [
        {
            icon: (<FaGithub size={20} className="w-5 h-5" />),
            link: "https://github.com/mKharchi",
        }, 
        {
            icon: (<FaLinkedin size={20} className="w-5 h-5" />),
            link: "https://www.linkedin.com/in/kharchi-merouane-32080a30b/",
        }, 
        {
            icon: (<FaWhatsapp size={20} className="w-5 h-5" />),
            link: "http://wa.me/+213795736069",
        }
    ]

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShown(false)
            }
        }

        if (shown) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [shown])

    return (
        <div className='w-full flex flex-col absolute gap-1 top-0 z-50 bg-transparent justify-between items-center py-2 sm:py-3 px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-40'>
            {/* Top Bar - Contact Info and Social Links */}
            <div className="w-full text-secondary text-sm sm:text-base lg:text-lg py-1 flex justify-between items-center">
                <div className='flex items-center justify-start gap-2 sm:gap-4 lg:gap-6'>
                    <span className='flex gap-1 sm:gap-2 items-center'>
                        <BsPinMap className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span className='hidden md:block lg:text-sm xl:text-base'>
                            Rua Brás de Assis, 709 - Sala 09 - Botucatu - SP
                        </span>
                        <span className='block md:hidden text-xs'>
                            Botucatu - SP
                        </span>
                    </span>
                    <span className='flex gap-1 sm:gap-2 items-center'>
                        <BiPhone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span className='hidden sm:block text-sm lg:text-base'>
                            (14) 3815-7469
                        </span>
                    </span>
                </div>
                
                <div className='flex gap-2 sm:gap-3 items-center justify-end'>
                    {links.map((el, index) => (
                        <a
                            key={index}
                            href={el.link}
                            className="hover:opacity-70 transition-opacity duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {el.icon}
                        </a>
                    ))}
                </div>
            </div>

            <hr className='w-full border border-secondary opacity-50' />

            {/* Main Navigation */}
            <div className='w-full py-1 sm:py-2 flex justify-between items-center relative'>
                {/* Logo */}
                <div className='flex justify-start items-center overflow-hidden h-8 sm:h-10 lg:h-12'>
                    <img 
                        src="/Logo.png" 
                        alt="Logo" 
                        className='h-full w-auto object-contain' 
                    />
                </div>

                {/* Desktop Navigation */}
                <div className='hidden lg:flex items-center text-base xl:text-lg 2xl:text-xl gap-6 xl:gap-8 text-white justify-end'>
                    <NavLink 
                        className="hover:opacity-80 transition-all duration-200 ease-in-out font-medium" 
                        to="/"
                    >
                        HOME
                    </NavLink>
                    <NavLink 
                        className="hover:opacity-80 transition-all duration-200 ease-in-out font-medium" 
                        to="/about"
                    >
                        ABOUT
                    </NavLink>
                    <NavLink 
                        className="hover:opacity-80 transition-all duration-200 ease-in-out font-medium" 
                        to="/houses"
                    >
                        HOUSES
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <div className='flex lg:hidden items-center justify-end'>
                    <button
                        onClick={() => setShown(prev => !prev)}
                        className="p-2 hover:bg-white hover:bg-opacity-20 rounded-md transition-all duration-200"
                        aria-label="Toggle menu"
                    >
                        <CiMenuBurger className="w-6 h-6 text-secondary" />
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {shown && (
                    <div 
                        ref={menuRef}
                        className='flex absolute top-full right-0 mt-2 bg-black bg-opacity-90 backdrop-blur-sm rounded-lg px-4 py-3 flex-col items-end text-base gap-3 text-white justify-end min-w-32 shadow-lg'
                    >
                        <NavLink 
                            className="hover:opacity-80 transition-all duration-200 ease-in-out font-medium" 
                            to="/"
                            onClick={() => setShown(false)}
                        >
                            HOME
                        </NavLink>
                        <NavLink 
                            className="hover:opacity-80 transition-all duration-200 ease-in-out font-medium" 
                            to="/about"
                            onClick={() => setShown(false)}
                        >
                            ABOUT
                        </NavLink>
                        <NavLink 
                            className="hover:opacity-80 transition-all duration-200 ease-in-out font-medium" 
                            to="/houses"
                            onClick={() => setShown(false)}
                        >
                            HOUSES
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar