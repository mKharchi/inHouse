import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import Radio from '../components/DropDown'

const Add = ({ token }) => {
  const [images, setImages] = useState([null, null, null, null])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('house')
  const [rent, setRent] = useState(true)
  const [rooms, setRooms] = useState(1)
  const [area, setArea] = useState(50)
  const [bathrooms, setBathrooms] = useState(1)
  const [loading, setLoading] = useState(false)

  const handleImageChange = (index, file) => {
    const newImages = [...images]
    newImages[index] = file
    setImages(newImages)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('description', description)
      formData.append('address', address)
      formData.append('location', `${city}, ${country}`)
      formData.append('price', price)
      formData.append('category', category)
      formData.append('rent', rent)
      formData.append('rooms', rooms)
      formData.append('area', area)
      formData.append('bathrooms', bathrooms)

      images.forEach((img, i) => {
        if (img) formData.append(`image${i + 1}`, img)
      })

      const response = await axios.post(`${backendUrl}/product/add`, formData, {
        headers: { token }
      })

      if (response.data.success) {
        toast.success(response.data.message)
        setImages([null, null, null, null])
        setName("")
        setDescription("")
        setAddress("")
        setCountry("")
        setCity("")
        setPrice('')
        setCategory('house')
        setRent(true)
        setRooms('')
        setArea('')
        setBathrooms('')
      } else {
        toast.error(response.data.message)
      }
    } catch (err) {
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='w-full max-w-4xl mx-auto p-4 sm:p-6'>
      <form onSubmit={handleSubmit} className='text-white space-y-6'>
        
        {/* Images Section */}
        <div className='w-full'>
          <p className='mb-3 text-lg font-medium'>Upload Images</p>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
            {images.map((img, index) => (
              <label key={index} htmlFor={`image${index}`} className='cursor-pointer'>
                <img 
                  className='w-full aspect-square object-cover border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors' 
                  src={!img ? assets.upload_area : URL.createObjectURL(img)} 
                  alt={`Upload ${index + 1}`}
                />
                <input
                  onChange={(e) => handleImageChange(index, e.target.files[0])}
                  type="file"
                  accept="image/*"
                  hidden
                  id={`image${index}`}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Property Name and Address */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div className='w-full'>
            <p className='mb-2 text-sm font-medium'>Property Name</p>
            <input 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className='w-full px-3 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
              type="text" 
              placeholder="Enter property name"
              required 
            />
          </div>
          <div className='w-full'>
            <p className='mb-2 text-sm font-medium'>Address</p>
            <input 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              className='w-full px-3 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
              type="text" 
              placeholder="Enter full address"
              required 
            />
          </div>
        </div>

        {/* Country and City */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div className='w-full'>
            <p className='mb-2 text-sm font-medium'>Country</p>
            <input 
              value={country} 
              onChange={(e) => setCountry(e.target.value)} 
              className='w-full px-3 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
              type="text" 
              placeholder="Enter country"
              required 
            />
          </div>
          <div className='w-full'>
            <p className='mb-2 text-sm font-medium'>City</p>
            <input 
              value={city} 
              onChange={(e) => setCity(e.target.value)} 
              className='w-full px-3 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
              type="text" 
              placeholder="Enter city"
              required 
            />
          </div>
        </div>

        {/* Description */}
        <div className='w-full'>
          <p className='mb-2 text-sm font-medium'>Description</p>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className='w-full px-3 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px] resize-vertical' 
            placeholder="Enter property description"
            required 
          />
        </div>

        {/* Category, Rent/Sell, Price */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='w-full'>
            <p className='mb-2 text-sm font-medium'>Category</p>
            <Radio 
              options={["Appartment", "House"]} 
              setValue={(val) => setCategory(val)} 
              value={category} 
            />
          </div>

          <div className='w-full'>
            <p className='mb-2 text-sm font-medium'>Rent / Sell</p>
            <Radio
              options={["For rent", "For sell"]}
              setValue={(val) => setRent(val === "For rent")}
              value={rent ? "For rent" : "For sell"}
            />
          </div>

          <div className='w-full'>
            <p className='mb-2 text-sm font-medium'>Price ($)</p>
            <input 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
              className='w-full px-3 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
              type="number" 
              min={1}
              placeholder="Enter price"
              required
            />
          </div>
        </div>

        {/* Rooms, Area, Bathrooms */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='w-full'>
            <p className='mb-2 text-sm font-medium'>Rooms</p>
            <input 
              min={1} 
              value={rooms} 
              onChange={(e) => setRooms(e.target.value)} 
              className='w-full px-3 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
              type="number" 
              placeholder="Number of rooms"
              required 
            />
          </div>

          <div className='w-full'>
            <p className='mb-2 text-sm font-medium'>Area (m²)</p>
            <input 
              min={10} 
              value={area} 
              onChange={(e) => setArea(e.target.value)} 
              className='w-full px-3 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
              type="number" 
              placeholder="Area in square meters"
              required 
            />
          </div>

          <div className='w-full'>
            <p className='mb-2 text-sm font-medium'>Bathrooms</p>
            <input 
              min={1} 
              value={bathrooms} 
              onChange={(e) => setBathrooms(e.target.value)} 
              className='w-full px-3 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
              type="number" 
              placeholder="Number of bathrooms"
              required 
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className='flex justify-center pt-4'>
          <button 
            disabled={loading} 
            type="submit"
            className={`w-full sm:w-auto px-8 py-3 rounded-md font-medium transition-all duration-200 ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed text-gray-600' 
                : 'bg-white text-black hover:bg-gray-100 active:bg-gray-200'
            }`}
          >
            {loading ? "Adding Property..." : "Add Property"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Add