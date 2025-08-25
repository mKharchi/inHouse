import Hero from '../components/Hero'
import { assets } from "../assets/assets.js"
import Contact from '../components/Contact'
import Title from "../components/Title.jsx"
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'
import SearchBar from '../components/SearchBar.jsx'
import { useLocation } from 'react-router'

const Collections = () => {
    const { search, setSearch, products } = useContext(ShopContext)
    const [filteredP, setFilterP] = useState([])
    const [sortType, setSortType] = useState("relevant")
    const [currentPage, setCurrentPage] = useState(1)

    const location = useLocation();
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const serviceFromUrl = params.get("category");
        if (serviceFromUrl) {
            setSearch(prev => ({ ...prev, h_ap: serviceFromUrl }));
        }
    }, [location.search]);

    const ITEMS_PER_PAGE = 20

    const applyFilters = () => {
        let productsCopy = products.filter(el => el.status === 'available')

        // Helper function to check if a value is a valid filter (not a placeholder)
        const isValidFilter = (value) => {
            if (!value || value.trim() === '') return false
            const placeholders = ['property type', 'rent/sale', 'location', 'all']
            return !placeholders.includes(value.toLowerCase())
        }

        // Only apply filters if search exists and has meaningful values
        if (search && typeof search === 'object') {
            // Filter by category only if h_ap is a valid filter value
            if (isValidFilter(search.h_ap)) {
                productsCopy = productsCopy.filter(item =>
                    item.category?.toLowerCase() === search.h_ap.toLowerCase()
                )
            }

            // Filter by rent/sell only if rent_sell is a valid filter value
            if (isValidFilter(search.rent_sell)) {
                productsCopy = productsCopy.filter(item => {
                    const rentStatus = item.rent ? 'rent' : 'sell'
                    return rentStatus === search.rent_sell.toLowerCase()
                })
            }

            // Filter by location only if location is a valid filter value
            if (isValidFilter(search.location)) {
                productsCopy = productsCopy.filter(item =>
                    item.location?.toLowerCase() === search.location.toLowerCase()
                )
            }
        }

        // Sort by price
        if (sortType === "low-high") {
            productsCopy.sort((a, b) => a.price - b.price)
        } else if (sortType === "high-low") {
            productsCopy.sort((a, b) => b.price - a.price)
        }

        setCurrentPage(1)
        setFilterP(productsCopy)
    }

    useEffect(() => {
        applyFilters()
    }, [search, sortType, products])

    const totalPages = Math.ceil(filteredP.length / ITEMS_PER_PAGE)
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE
    const paginatedItems = filteredP.slice(startIdx, startIdx + ITEMS_PER_PAGE)

    return (
        <div className='w-full px-4 sm:px-8 md:px-20 lg:px-40 flex flex-col gap-6 sm:gap-8 pt-6 sm:pt-10'>
            {/* Results Count and Sort */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-gray-600 text-sm sm:text-base">
                    Showing {paginatedItems.length} of {filteredP.length} properties
                </p>
                
                <div className="flex justify-end">
                    <select
                        onChange={(e) => setSortType(e.target.value)}
                        className='border border-gray-300 text-sm sm:text-base p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                    >
                        <option value="relevant">Sort by relevance</option>
                        <option value="low-high">Price: Low to High</option>
                        <option value="high-low">Price: High to Low</option>
                    </select>
                </div>
            </div>

            {/* Products Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-4 sm:gap-6 md:gap-8 place-items-center sm:place-items-start'>
                {paginatedItems.length > 0 ? (
                    paginatedItems.map((item, id) => (
                        <ProductItem key={id} item={item} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-12">
                        <div className="space-y-4">
                            <div className="text-gray-400 text-6xl">🏠</div>
                            <p className="text-gray-600 text-lg sm:text-xl">No properties match your search.</p>
                            <p className="text-gray-500 text-sm sm:text-base">Try adjusting your filters or search criteria.</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 py-8">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-2 border rounded-lg text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                        Previous
                    </button>
                    
                    <div className="flex gap-1 sm:gap-2">
                        {[...Array(totalPages)].map((_, i) => {
                            const pageNum = i + 1;
                            const isActive = currentPage === pageNum;
                            
                            // Show first page, last page, current page, and pages around current
                            if (
                                pageNum === 1 ||
                                pageNum === totalPages ||
                                (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                            ) {
                                return (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(pageNum)}
                                        className={`px-3 py-2 border rounded-lg text-sm sm:text-base transition-colors ${
                                            isActive
                                                ? "bg-primary text-white border-primary"
                                                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                                        }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            } else if (
                                pageNum === currentPage - 2 ||
                                pageNum === currentPage + 2
                            ) {
                                return <span key={i} className="px-2 text-gray-400">...</span>;
                            }
                            return null;
                        })}
                    </div>
                    
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 border rounded-lg text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    )
}

const Houses = () => {
    return (
        <div className='min-h-screen w-full flex flex-col justify-start items-center'>
            <Hero
                image={'/houses.png'}
                title={"Browse our real estate selection"}
            />

            <div className="w-full px-4 sm:px-8 md:px-20 lg:px-40 py-6 sm:py-8">
                <SearchBar />
            </div>

            <Collections />

            <div className="w-full mt-12 sm:mt-16">
                <Contact />
            </div>
        </div>
    )
}

export default Houses