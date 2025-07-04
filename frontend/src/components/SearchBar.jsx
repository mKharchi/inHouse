import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useLocation } from 'react-router-dom'
import Radio from './DropDown'

const SearchBar = () => {
    const { products, search, setSearch } = useContext(ShopContext)
    const [locations, setLocations] = useState([])
    const location = useLocation()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const uniqueCountries = [...new Set(products.map(p => p.location).filter(Boolean))]
        setLocations(uniqueCountries)
    }, [products])

    useEffect(() => {
        setVisible(location.pathname.includes('houses'))
    }, [location.pathname])

    const handleReset = () => {
        setSearch({
            h_ap: 'Property Type',
            rent_sell: 'Rent/Sale',
            location: 'Location'
        })
    }

    return visible ? (
        <div className='w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 lg:mt-8'>
            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
                {/* Search Title */}
                <div className="text-center mb-4 sm:mb-6">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                        Find Your Perfect Property
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600">
                        Use the filters below to narrow down your search
                    </p>
                </div>

                {/* Search Filters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                    {/* Property Type */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm sm:text-base font-medium text-gray-700">
                            Property Type
                        </label>
                        <Radio
                            value={search.h_ap || 'Property Type'}
                            setValue={(val) => setSearch({ ...search, h_ap: val })}
                            options={["Apartment", "House"]}
                        />
                    </div>

                    {/* Rent/Sale */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm sm:text-base font-medium text-gray-700">
                            Transaction Type
                        </label>
                        <Radio
                            value={search.rent_sell || 'Rent/Sale'}
                            setValue={(val) => setSearch({ ...search, rent_sell: val })}
                            options={["Rent", "Sale"]}
                        />
                    </div>

                    {/* Location */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm sm:text-base font-medium text-gray-700">
                            Location
                        </label>
                        <Radio
                            value={search.location || "Location"}
                            setValue={(val) => setSearch({ ...search, location: val })}
                            options={locations}
                        />
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                    <button
                        onClick={handleReset}
                        className="flex-1 sm:flex-none px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg font-medium text-sm sm:text-base hover:bg-gray-50 transition-all duration-200"
                    >
                        Reset Filters
                    </button>
                    <button
                        className="flex-1 px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-primary-dark transition-all duration-200 transform hover:scale-105"
                    >
                        Search Properties
                    </button>
                </div>

                {/* Search Results Count (optional) */}
                {(search.h_ap || search.rent_sell || search.location) && (
                    <div className="mt-4 sm:mt-6 text-center">
                        <p className="text-sm sm:text-base text-gray-600">
                            {products.length} properties found matching your criteria
                        </p>
                    </div>
                )}
            </div>
        </div>
    ) : null
}

export default SearchBar