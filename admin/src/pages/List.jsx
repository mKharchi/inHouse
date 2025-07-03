import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({ token }) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const res = await axios.get(backendUrl + '/product/all')
      if (res.data.success) {
        setList(res.data.products);
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const res = await axios.post(backendUrl + '/product/remove', { id }, { headers: { token } })
      if (res.data.success) {
        toast.success(res.data.message)
        await fetchList()
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const updateProduct = async (id, newStatus) => {
    try {
      const res = await axios.post(backendUrl + '/product/update', { id, newStatus }, { headers: { token } })
      if (res.data.success) {
        toast.success(res.data.message)
        await fetchList()
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='flex min-h-screen flex-col gap-4'>
      {/* Desktop Table Header - Hidden on mobile */}
      <div className='hidden md:grid grid-cols-[80px_2fr_1fr_1fr_1fr_2fr] font-semibold text-sm lg:text-md text-white border-b pb-3 gap-2'>
        <span>Image</span>
        <span>Name</span>
        <span>Category</span>
        <span>Price</span>
        <span>Status</span>
        <span>Actions</span>
      </div>

      {/* Products list */}
      {list.map((item, index) => (
        <div key={index} className="border rounded-lg p-3 md:p-2 text-white">
          
          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex items-start gap-3 mb-3">
              <img className='w-16 h-16 object-cover rounded' src={item.image[0]} alt={item.name} />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm truncate">{item.name}</h3>
                <p className="text-xs text-gray-300 mt-1">{item.category}</p>
                <p className="text-sm font-semibold mt-1">${item.price}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className={`text-xs px-2 py-1 rounded ${item.status === 'available' ? 'bg-green-600 text-white' : 'bg-red-500 text-white'}`}>
                {item.status}
              </span>
              
              <div className='flex gap-2'>
                <button 
                  onClick={() => {
                    if (confirm("Are you sure you want to delete this product?")) {
                      removeProduct(item._id)
                    }
                  }} 
                  className='text-xs px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700'
                >
                  Delete
                </button>
                
                {item.status === 'available' && (
                  <button 
                    onClick={() => {
                      const newState = item.rent ? "rented" : "sold"
                      updateProduct(item._id, newState)
                    }} 
                    className='text-xs px-2 py-1 bg-primary text-tertiary rounded hover:bg-primary/80'
                  >
                    Mark as {item.rent ? "rented" : "sold"}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-[80px_2fr_1fr_1fr_1fr_2fr] items-center gap-2 py-1">
            <img className='w-16 h-16 object-cover rounded' src={item.image[0]} alt={item.name} />
            <p className="truncate pr-2" title={item.name}>{item.name}</p>
            <p className="text-sm">{item.category}</p>
            <p className="text-sm font-semibold">${item.price}</p>
            <p>
              <span className={`text-xs px-2 py-1 rounded ${item.status === 'available' ? 'bg-green-600 text-white' : 'bg-red-500 text-white'}`}>
                {item.status}
              </span>
            </p>

            <div className='flex gap-2'>
              <button 
                onClick={() => {
                  if (confirm("Are you sure you want to delete this product?")) {
                    removeProduct(item._id)
                  }
                }} 
                className='text-xs px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors'
              >
                Delete
              </button>
              
              {item.status === 'available' && (
                <button 
                  onClick={() => {
                    const newState = item.rent ? "rented" : "sold"
                    updateProduct(item._id, newState)
                  }} 
                  className='text-xs px-3 py-1 bg-primary text-tertiary rounded hover:bg-primary/80 transition-colors whitespace-nowrap'
                >
                  Mark as {item.rent ? "rented" : "sold"}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default List