import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'
import Radio from './DropDown'

const SearchBar = () => {
    const { products, search, setSearch } = useContext(ShopContext)

    const [locations, setLocations] = useState([])

    useEffect(() => {
        const uniqueCountries = [...new Set(products.map(p => p.location).filter(Boolean))]
        setLocations(uniqueCountries)

    }, [products])
    const location = useLocation()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setVisible(location.pathname.includes('houses'))
    }, [location.pathname])

    return visible ? (
        <div className='w-full p-4 sm:p-8  opacity-80 rounded-lg mx-auto mt-6 bg-primary text-center text-tertiary'>
            <div className="flex  flex-col md:flex-row gap-2 sm:bg-tertiary text-primary items-center justify-between p-0 sm:p-4 sm:rounded-full w-full">

                {/* Search Field */}


                {/* Property Type (h_ap) */}
                <Radio
                    value={search.h_ap}
                    setValue={(val) => setSearch({ ...search, h_ap: val })}
                    options={["Appartment", "House"]}
                    
                />

                <Radio
                    value={search.rent_sell}
                    setValue={(val) => setSearch({ ...search, rent_sell: val })}
                    options={["Rent", "Sell"]}
                />




                {/* location Select */}
                <Radio
                    value={search.location || "Where"}
                    setValue={(val) => setSearch({ ...search,location: val })}
                    options={locations}
                />


            </div>
        </div>
    ) : null
}

export default SearchBar
