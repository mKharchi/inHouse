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

    return productData ? (<>
     <Hero
        image={'/houses.png'}
        title={"More information"}
      />
    <div className=' pt-10 px-4 sm:px-40 transition-opacity ease-in duration-500 opacity-100'>

        <div className="flex gap-8 flex-col sm:flex-row sm:px-6 md:px-20">
            {/* Image Gallery */}
            <div className="w-full flex flex-col-reverse gap-6 sm:flex-row items-start justify-center">
                <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-4 w-1/4">
                    {productData?.image.map((el, i) => (
                        <img
                            key={i}
                            src={el}
                            onClick={() => setMainImage(el)}
                            className={`w-full h-[10vh] object-cover rounded-3xl cursor-pointer ${el === mainImage && "border"}`}
                        />
                    ))}
                </div>
                <div className="w-full sm:w-[80%]">
                    <img src={mainImage} alt="" className='w-full h-auto object-cover' />
                </div>
            </div>

            {/* Property Info */}
            <div className="w-full flex flex-col gap-4">
                <h1 className="font-semibold text-4xl">{productData.name}</h1>
                <p className="text-gray-600 text-lg">{productData.address}</p>
                <p className="text-xl w-fit font-medium text-primary border p-4 rounded-xl">
                    {productData.rent ? 'For Rent' : 'For Sale'}
                </p>
                <p className='text-3xl font-bold text-primary'>${productData.price} {productData.rent && " a month"}</p>
                <p className="opacity-80 text-lg">{productData.description}</p>

                <div className="grid grid-cols-1 gap-4 mt-6 text-center p-8 rounded-xl bg-tertiary text-lg">
                    <div className="flex gap-2 ">
                        <p className="opacity-40 font-semibold text-xl">Rooms:</p>
                        <p className="font-medium">{productData.rooms}</p>
                    </div>
                    <div className="flex gap-2 ">
                        <p className="opacity-40 font-semibold text-xl">Area:</p>
                        <p className="font-medium">{productData.area} m²</p>
                    </div>
                    <div className="flex gap-2 ">
                        <p className="opacity-40 font-semibold text-xl">Bathrooms:</p>
                        <p className="font-medium">{productData.bathrooms}</p>
                    </div>
                    <div className="flex gap-2 ">
                        <p className="opacity-40 font-semibold text-xl">Category:</p>
                        <p className="font-medium capitalize">{productData.category}</p>
                    </div>
                    <div className="flex gap-2 ">
                        <p className="opacity-40 font-semibold text-xl">Location:</p>
                        <p className="font-medium capitalize">{productData.address}</p>
                    </div>
                </div>
            </div>
        </div>

       

        {/* Related Products */}
        <div className="mt-20">
            <RelatedProduct category={productData.category} location={productData.location} />
        </div>

    </div>
    <Contact />
    </>

    ) : (
        <div className="min-h-screen flex justify-center items-center">
            <p className="text-gray-500">Loading property...</p>
        </div>
    )
}

export default Product
