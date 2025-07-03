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
  const { search , setSearch  , products } = useContext(ShopContext)
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

    if (search) {
      if (search.h_ap) {
        productsCopy = productsCopy.filter(item =>
          item.category?.toLowerCase() === search.h_ap.toLowerCase()
        )
      }

      if (search.rent_sell) {
        productsCopy = productsCopy.filter(item => {
          const rentStatus = item.rent ? 'rent' : 'sell'
          return rentStatus === search.rent_sell.toLowerCase()
        })
      }


      if (search.location) {
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
    <div className='flex w-full px-6 sm:px-40 flex-col gap-8 pt-10'>

      {/* Sort Dropdown */}
      <div className="flex w-full justify-end items-center text-lg">
        <select
          onChange={(e) => setSortType(e.target.value)}
          className='border border-gray-300 text-lg p-3 rounded'
        >
          <option value="relevant">Sort by relevance</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mb-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded-full text-sm ${currentPage === i + 1
                ? "bg-tertiary text-primary"
                : "bg-white border-gray-300 text-primary hover:bg-gray-100"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      {/* Products Grid */}
      <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10'>
        {paginatedItems.length > 0 ? (
          paginatedItems.map((item, id) => (
            <ProductItem key={id} item={item} />
          ))
        ) : (
          <p className="text-primary text-xl col-span-full text-center">
            No properties match your search.
          </p>
        )}
      </div>
    </div>
  )
}


const Houses = () => {
  return (
    <div className='min-h-screen overflow-hidden w-full flex flex-col justify-start items-center'>

      <Hero
        image={'/houses.png'}
        title={"Browse our real estate selection"}
      />

      <div className="w-full px-6 sm:px-40">
        <SearchBar />
      </div>

      <Collections />

      <Contact />
    </div>
  )
}

export default Houses
