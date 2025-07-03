import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Login from './components/Login'


import { ToastContainer } from 'react-toastify';


export const backendUrl = import.meta.env.VITE_API_URL
export const currency = import.meta.env.VITE_CURRENCY

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')

  useEffect(() => {

    localStorage.setItem('token', token)

  }, [token])

  return (
    <div className='bg-gray-50 min-h-screen '>

      {
        token === "" ? <Login setToken={setToken} /> : <>
          <Navbar setToken={setToken} />
          <hr className='border-gray-400' />
          <div className="flex w-full ">
            <Sidebar />
            <div className="w-full mx-auto bg-black px-10 py-6  text-gray-600 text-base">

              <Routes>
                <Route path='/' element={<Add token={token} />} />
                <Route path='/list' element={<List token={token} />} />

              </Routes>
            </div>

          </div>

        </>
      }
      <ToastContainer />


    </div>
  )
}

export default App
