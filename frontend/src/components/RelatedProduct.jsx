import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useEffect } from 'react'
import ProductItem from "./ProductItem"

const RelatedProducts = ({ category, location }) => {
    const { products } = useContext(ShopContext)
    const [related, setRelated] = useState([])

    useEffect(() => {
        if (products.length > 0) {
            let copyOfP = products.slice()
            copyOfP = copyOfP.filter(el => category === el.category)
            copyOfP = copyOfP.filter(el =>
                location === el.location ||
                location.split(',')[0].trim().toLowerCase() === el.location.split(',')[0].trim().toLowerCase()
            )
            setRelated(copyOfP.slice(0, 4))
        }
    }, [products, category, location])

    // Don't render if no related products
    if (related.length === 0) {
        return null
    }

    return (
        <section className='w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8'>
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2">
                        Related Properties
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover similar properties in the same area that might interest you
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4 ">
                    {related.map(el => (
                        <ProductItem key={el._id} item={el} />
                    ))}
                </div>

                {/* Show More Button (optional) */}
                {related.length >= 5 && (
                    <div className="text-center mt-8 sm:mt-12">
                        <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-primary-dark transition-all duration-300 ease-in-out transform hover:scale-105">
                            View All Properties
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default RelatedProducts