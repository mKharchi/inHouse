import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({ item }) => {
    return (
        <div className='flex flex-col bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden w-full max-w-sm mx-auto hover:scale-105'>
            {/* Image Container */}
            <div className='w-full h-48 sm:h-56 lg:h-64 overflow-hidden relative'>
                <img 
                    src={item?.image[0]} 
                    alt={item?.name}
                    className='w-full h-full object-cover transition-transform duration-300 hover:scale-110' 
                />
                {/* Rent/Sale Badge */}
                <div className='absolute top-3 left-3 bg-primary text-white px-2 py-1 rounded-full text-xs sm:text-sm font-medium'>
                    {item.rent ? 'For Rent' : 'For Sale'}
                </div>
            </div>

            {/* Content Container */}
            <div className='flex flex-col p-4 sm:p-5 lg:p-6 flex-1'>
                {/* Property Name */}
                <h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 line-clamp-2'>
                    {item?.name}
                </h3>

                {/* Address */}
                <p className='text-sm sm:text-base text-gray-600 mb-4 line-clamp-1'>
                    {item.address}
                </p>

                {/* Property Details */}
                <div className='grid grid-cols-3 gap-2 sm:gap-3 mb-4 text-center'>
                    <div className='flex flex-col items-center p-2 bg-gray-50 rounded-lg'>
                        <span className='text-xs sm:text-sm font-medium text-gray-500'>Rooms</span>
                        <span className='text-sm sm:text-base lg:text-lg font-semibold text-gray-900'>
                            {item.rooms}
                        </span>
                    </div>
                    <div className='flex flex-col items-center p-2 bg-gray-50 rounded-lg'>
                        <span className='text-xs sm:text-sm font-medium text-gray-500'>Area</span>
                        <span className='text-sm sm:text-base lg:text-lg font-semibold text-gray-900'>
                            {item.area}m²
                        </span>
                    </div>
                    <div className='flex flex-col items-center p-2 bg-gray-50 rounded-lg'>
                        <span className='text-xs sm:text-sm font-medium text-gray-500'>Bathrooms</span>
                        <span className='text-sm sm:text-base lg:text-lg font-semibold text-gray-900'>
                            {item.bathrooms}
                        </span>
                    </div>
                </div>

                {/* Price */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <span className='text-sm sm:text-base text-gray-600 font-medium'>Price:</span>
                    <span className='text-xl sm:text-2xl lg:text-3xl font-bold text-primary'>
                        ${item.price?.toLocaleString()}
                    </span>
                </div>

                {/* Call to Action Button */}
                <Link 
                    to={`/property/${item._id}`} 
                    className='w-full text-center px-4 py-2 sm:py-3 bg-primary text-white rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-primary-dark hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105'
                >
                    See Details
                </Link>
            </div>
        </div>
    )
}

export default ProductItem