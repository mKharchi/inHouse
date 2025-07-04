import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import RelatedProduct from '../components/RelatedProduct'
import { toast } from 'react-toastify'
import Hero from '../components/Hero'
import Contact from '../components/Contact'

const Product = () => {
    const { productId } = useParams()
    const { products } = useContext(ShopContext)

    const [productData, setProductData] = useState(false)
    const [mainImage, setMainImage] = useState("")

    useEffect(() => {
        const foundProduct = products.find(item => item._id === productId)
        if (foundProduct) {
            console.log(foundProduct);
            setProductData(foundProduct)
            
            setMainImage(foundProduct.image[0])
        } else {
            toast.error('Cannot find product')
        }
    }, [products])

    return productData ? (
        <>
            <Hero
                image={'/houses.png'}
                title={"More information"}
            />
            <div className='pt-6 sm:pt-10 px-4 sm:px-8 md:px-20 lg:px-40 transition-opacity ease-in duration-500 opacity-100'>
                <div className="flex gap-6 sm:gap-8 flex-col lg:flex-row">
                    {/* Image Gallery */}
                    <div className="w-full lg:w-1/2 flex flex-col-reverse sm:flex-row gap-4 sm:gap-6">
                        {/* Thumbnail Gallery */}
                        <div className="flex flex-row sm:flex-col overflow-x-auto sm:overflow-y-auto gap-2 sm:gap-4 sm:w-24 md:w-32">
                            {productData?.image.map((el, i) => (
                                <img
                                    key={i}
                                    src={el}
                                    onClick={() => setMainImage(el)}
                                    className={`min-w-16 w-16 h-16 sm:min-w-20 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-lg sm:rounded-xl cursor-pointer transition-all duration-200 hover:scale-105 ${el === mainImage ? "border-2 border-primary ring-2 ring-primary/20" : "border border-gray-200"}`}
                                />
                            ))}
                        </div>
                        {/* Main Image */}
                        <div className="flex-1">
                            <img 
                                src={mainImage} 
                                alt="" 
                                className='w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-lg sm:rounded-xl' 
                            />
                        </div>
                    </div>

                    {/* Property Info */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6">
                        <div className="space-y-3 sm:space-y-4">
                            <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl leading-tight">{productData.name}</h1>
                            <p className="text-gray-600 text-base sm:text-lg">{productData.address}</p>
                            <div className="flex items-center gap-4">
                                <span className="text-base sm:text-xl font-medium text-primary border border-primary px-3 py-2 sm:px-4 sm:py-3 rounded-lg">
                                </span>
                                <p className='text-2xl sm:text-3xl font-bold text-primary'>
                                    ${productData.price}
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{productData.description}</p>

                        {/* Property Details Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-6 rounded-xl bg-gray-50 border">
                            <div className="flex items-center justify-between sm:justify-start sm:gap-3">
                                <span className="text-gray-600 font-medium text-base sm:text-lg">Rooms:</span>
                                <span className="font-semibold text-base sm:text-lg">{productData.rooms}</span>
                            </div>
                            <div className="flex items-center justify-between sm:justify-start sm:gap-3">
                                <span className="text-gray-600 font-medium text-base sm:text-lg">Area:</span>
                                <span className="font-semibold text-base sm:text-lg">{productData.area} m²</span>
                            </div>
                            <div className="flex items-center justify-between sm:justify-start sm:gap-3">
                                <span className="text-gray-600 font-medium text-base sm:text-lg">Bathrooms:</span>
                                <span className="font-semibold text-base sm:text-lg">{productData.bathrooms}</span>
                            </div>
                            <div className="flex items-center justify-between sm:justify-start sm:gap-3">
                                <span className="text-gray-600 font-medium text-base sm:text-lg">Category:</span>
                                <span className="font-semibold text-base sm:text-lg capitalize">{productData.category}</span>
                            </div>
                        </div>

                        {/* Contact/Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                            <button className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                                Contact Agent
                            </button>
                            <button className="flex-1 border border-primary text-primary py-3 px-6 rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                                Schedule Tour
                            </button>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-16 sm:mt-20">
                    <RelatedProduct category={productData.category} location={productData.location} />
                </div>
            </div>
            <Contact />
        </>
    ) : (
        <div className="min-h-screen flex justify-center items-center">
            <div className="text-center space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="text-gray-500 text-lg">Loading property...</p>
            </div>
        </div>
    )
}

export default Product