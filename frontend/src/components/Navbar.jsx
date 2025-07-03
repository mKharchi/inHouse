import React, { useState } from 'react'
import { BiPhone } from 'react-icons/bi'
import { BsPinMap } from 'react-icons/bs'
import { CiMenuBurger } from 'react-icons/ci'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [shown, setShown] = useState(false)
    const links = [{

        icon: (<FaGithub size={24} width={20} height={20} />),
        link: "https://github.com/mKharchi",
    }, {

        icon: (<FaLinkedin size={24} width={20} height={20} />),
        link: "https://www.linkedin.com/in/kharchi-merouane-32080a30b/",
    }, {

        icon: (<FaWhatsapp size={24} width={20} height={20} />),
        link: "http://wa.me/+213795736069",
    },]
    return (
        <div className='w-full flex  flex-col absolute gap-1 top-0 z-50 bg-transparent justify-between items-center py-3 px-4  sm:px-40'>

            <div className="w-full text-secondary text-lg py-1 flex justify-between items-center">
                <div className='flex   items-center justify-start'>
                    <span className='w-full flex gap-2 items-center'>
                        {<BsPinMap width={28} height={28} size={20} />} <span className='hidden sm:min-w-xl sm:flex'>Rua Brás de Assis, 709 - Sala 09 - Botucatu - SP
                        </span></span>
                    <span className='w-full gap-2 flex items-center'>
                        {<BiPhone width={28} height={28} size={20} />}<span className='hidden sm:flex'> (14) 3815-7469
                        </span>
                    </span>
                </div>
                <div className='flex gap-2 items-center justify-end'>

                    {
                        links.map((el, index) => {
                            return (
                                <a
                                    key={index}
                                    href={el.link}
                                    className=""
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {el.icon}
                                </a>
                            )
                        })
                    }
                </div>
            </div>

            <hr className='w-full border border-secondary' />


            <div className='w-full py-1  flex justify-between items-center '>
                <div className='w-1/2 justify-start items-start overflow-hidden h-10 '>
                    <img src="/Logo.png" alt="Logo" width={1024} height={1024} className='h-12 object-cover sm:h-10 w-30 sm:w-30' />
                </div>

                <div className='hidden lg:flex items-center text-xl gap-8 text-white justify-end w-1/2'>
                    <NavLink className="hover:opacity-80 transition-all duration-200 ease-in" to="/">HOME</NavLink>
                    <NavLink className="hover:opacity-80 transition-all duration-200 ease-in" to="/about">ABOUT </NavLink>
                    <NavLink className="hover:opacity-80 transition-all duration-200 ease-in" to="/houses">HOUSES</NavLink>
                </div>

                <div className='flex lg:hidden w-1/2 items-center justify-end gap-4 px-2 text-xl'>
                    <CiMenuBurger fill='#e0e0e0' onClick={() => setShown(prev => !prev)} />
                </div>

                {shown && (
                    <div className='flex absolute top-20 bg-black rounded-lg px-4 py-2 right-6 flex-col items-end text-lg gap-3 text-white justify-end w-1/3'>
                        <NavLink className="hover:opacity-80 transition-all duration-200 ease-in" to="/">HOME</NavLink>
                        <NavLink className="hover:opacity-80 transition-all duration-200 ease-in" to="/about">ABOUT </NavLink>
                        <NavLink className="hover:opacity-80 transition-all duration-200 ease-in" to="/houses">HOUSES</NavLink>

                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
