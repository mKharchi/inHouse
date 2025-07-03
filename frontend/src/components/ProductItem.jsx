import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({ item }) => {
    return (
        <div className='flex relative flex-col bg-white min-h-100 sm:min-h-150 pb-2 items-center overflow-hidden justify-between gap-1 rounded-lg w-75 sm:w-100 shadow-xl hover:shadow-none transition-all duration-300 ease-in'>

            <div className='w-full min-w-40 h-40 sm:min-w-42 sm:h-56 object-cover mb sm:mb-2 overflow-hidden'>
                <img src={item?.image[0] && item?.image[0]} className='hover:scale-110 ease-in transition-all duration-200 w-full h-full object-cover' />
            </div>

            {/* Name */}
            <h3 className='text-xl font-semibold text-left px-4 w-full'>{item?.name}</h3>

            {/* Rent or Sale */}
            <div className='text-sm font-medium text-gray-600 px-4 w-full'>
                {item.rent ? 'For Rent' : 'For Sale'}
            </div>

            {/* Address */}
            <div className='text-xs sm:text-sm text-gray-500 px-4 w-full truncate'>
                {item.address}
            </div>

            {/* Rooms, Area, Bathroom */}
            <div className='flex flex-row items-start sm:items-center justify-center gap-2 w-full sm:px-4 px-4 sm:py-2'>
                <div className='w-full flex flex-row justify-start px-0  sm:flex-col gap-1 sm:justify-between items-center '>
                    <span className='font-semibold'>Rooms:</span>
                    <span>{item.rooms}</span>
                </div>
                <div className='w-full flex flex-row justify-center px-0 sm:flex-col gap-1 sm:justify-between items-center '>
                    <span className='font-semibold'>Area:</span>
                    <span>{item.area}m²</span>
                </div>
                <div className='w-full flex flex-row justify-center px-0 sm:flex-col gap-1 sm:justify-between items-center'>
                    <span className='font-semibold'>Bathrooms:</span>
                    <span>{item.bathrooms}</span>
                </div>
            </div>

            <hr className='border hidden sm:flex opacity-40 w-[88%] mx-auto' />

            {/* Price */}
            <div className="flex w-full sm:flex-col px-4 justify-start item-center gap-2">
                <span className='text-center font-semibold '>Price:</span>
                <span className='sm:text-xl sm:text-center sm:font-semibold'>${item.price}</span>
            </div>

            {/* Button */}
            <Link to={`/property/${item._id}`} 
            className='px-4 sm:text-xl font-semibold mb-4 py-2 sm:w-1/3 mt-2 text-tertiary bg-primary rounded-xl hover:text-primary hover:bg-secondary transition-all duration-300'>
                See more
            </Link>
        </div>
    )
}

export default ProductItem
