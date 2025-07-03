import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    const closeSidebar = () => {
        setIsOpen(false)
    }

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={toggleSidebar}
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-black text-white rounded-md shadow-lg hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile Overlay */}
            {isOpen && (
                <div 
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={closeSidebar}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed md:static inset-y-0 left-0 z-40 
                w-64 md:w-[18%] min-w-[200px] max-w-[280px]
                bg-black text-tertiary min-h-screen border-r border-gray-700
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
                <div className='flex flex-col pt-6 px-4 md:pl-[20%] text-lg'>
                    
                    {/* Logo or Brand (optional) */}
                    <div className="mb-8 text-center md:text-left">
                        <h2 className="text-xl font-bold text-white">Admin Panel</h2>
                    </div>

                    {/* Navigation Links */}
                    <nav className="space-y-2">
                        <NavLink
                            to="/"
                            onClick={closeSidebar}
                            className={({ isActive }) => `
                                flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200
                                hover:bg-gray-800 hover:text-white
                                ${isActive 
                                    ? 'bg-gray-800 text-white border-l-4 border-blue-500' 
                                    : 'text-gray-300'
                                }
                            `}
                        >
                            {/* Add Icon */}
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <span className="block md:hidden lg:block truncate">Add Items</span>
                        </NavLink>

                        <NavLink
                            to="/list"
                            onClick={closeSidebar}
                            className={({ isActive }) => `
                                flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200
                                hover:bg-gray-800 hover:text-white
                                ${isActive 
                                    ? 'bg-gray-800 text-white border-l-4 border-blue-500' 
                                    : 'text-gray-300'
                                }
                            `}
                        >
                            {/* List Icon */}
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>
                            <span className="block md:hidden lg:block truncate">List Items</span>
                        </NavLink>

                        {/* Additional Navigation Items (examples) */}
                       
                    </nav>

                    {/* Bottom Section (optional) */}
                    <div className="mt-auto pb-6">
                        <div className="pt-4 border-t border-gray-700">
                            <div className="flex items-center gap-3 px-3 py-2 text-gray-400">
                                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span className="block md:hidden lg:block text-sm truncate">Admin User</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar