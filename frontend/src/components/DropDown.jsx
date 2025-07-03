import React, { useState, useRef, useEffect } from 'react';

const Radio = ({ value, setValue, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (option) => {
        setValue(option);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative w-full" ref={dropdownRef}>
            {/* Selected Value Display */}
            <div
                className="bg-white text-black px-3 py-2 rounded-md border border-gray-300 cursor-pointer flex items-center justify-between w-full text-sm sm:text-base  transition-colors duration-200 focus:outline-none  outline-none "
                onClick={toggleDropdown}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleDropdown();
                    }
                }}
                tabIndex={0}
                role="button"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-label={`Select option, current selection: ${value}`}
            >
                <span className="truncate">{value}</span>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`w-4 h-4 sm:w-5 sm:h-5 fill-black transition-transform duration-300 flex-shrink-0 ml-2 ${isOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 512 512"
                >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
            </div>

            {/* Dropdown Options */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border text-black border-gray-300 rounded-md mt-1 shadow-lg z-20 overflow-hidden">
                    {options.map((option, index) => (
                        <div key={index} className="relative">
                            <input
                                id={`${option}-${index}`}
                                name="radio-dropdown"
                                type="radio"
                                checked={value === option}
                                onChange={() => handleSelect(option)}
                                className="sr-only"
                            />
                            <label
                                htmlFor={`${option}-${index}`}
                                className={`block w-full px-3 py-2 text-sm sm:text-base text-black cursor-pointer hover:bg-gray-400 transition-colors duration-200 truncate ${
                                    value === option ? 'bg-gray-300' : ''
                                }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSelect(option);
                                }}
                            >
                                {option}
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Radio;