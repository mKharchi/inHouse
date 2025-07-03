import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
const Login = ({ setToken }) => {

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(`${backendUrl}/user/admin/`, { email, password })
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error);

            toast.error(error.message)

        }
    }
    return (
        <div className='min-h-screen flex items-center justify-center w-full p-4'
            style={{
                backgroundImage: "url('/carousel3.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover"
            }}
        >
            <div className="bg-white z-50 w-full max-w-md shadow-md rounded-lg px-6 py-8 sm:px-8 sm:py-10">
                <h1 className='text-xl sm:text-2xl w-full text-center font-bold mb-6'>Admin Panel</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <p className='text-sm sm:text-md font-medium text-primary mb-2'>Email address</p>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='rounded-md w-full py-3 px-3 border border-gray-300 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm sm:text-base'
                            type="email"
                            placeholder='your@email.com'
                            required
                        />
                    </div>
                    <div className='mb-6'>
                        <p className='text-sm sm:text-md font-medium text-primary mb-2'>Password</p>
                        <input
                            onChange={(e) => setpassword(e.target.value)}
                            value={password}
                            className='rounded-md w-full px-3 py-3 border border-gray-300 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm sm:text-base'
                            type="password"
                            placeholder='Enter your password'
                            required
                        />
                    </div>
                    <button
                        className='w-full py-3 px-4 rounded-md text-white bg-black hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base font-medium'
                        type='submit'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
