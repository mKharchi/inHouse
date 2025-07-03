import React, { useContext, useEffect, useState } from 'react'

import { BiArrowBack, BiSearch } from 'react-icons/bi'
import { FaLocationPin, FaLocationPinLock } from 'react-icons/fa6'
import { GrLocationPin } from 'react-icons/gr'
import { Navigate, useNavigate } from 'react-router'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import { House } from 'lucide-react'
import Contact from '../components/Contact'




const Galery = () => {
    const firstGrid = [
        {
            image: "grid11.png", location: "Setif",
            number: "2"
        }, {
            image: "grid12.png", location: "Alger",
            number: "2"
        }, {
            image: "grid13.png", location: "Oran",
            number: "2"
        }
    ]
    const secondGrid = [
        {
            image: "grid21.png", location: "Bejaia",
            number: "2"
        }, {
            image: "grid22.png", location: "Tlemcen",
            number: "2"
        }, {
            image: "grid23.png", location: "Tamenraset",
            number: "2"
        }
    ]


    return (
        <section className='flex min-h-screen mt-5 py-6 flex-col w-full items-center justify-center gap-8 px-4 sm:px-40'>
            <div className='flex flex-col items-center justify-center gap-3 w-full text-center'>
                <h1 className='text-3xl sm:text-7xl font-bold  text-center w-full'>Properties by Region</h1>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.</p>
                <div className='w-full mt-8 h-full flex flex-col sm:flex-row items-center justify-center gap-8'>
                    <div className='w-full grid grid-cols-2  sm:h-220  gap-2 sm:gap-8'>
                        {firstGrid.map((el, i) => (
                            <div className={`w-full relative  rounded-3xl ${i === 2 ? "col-span-2  h-70 sm:h-100" : " h-80 sm:h-120"}`} style={{ backgroundImage: `url('/${el.image}')`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                                <div className="flex flex-col absolute items-start justify-center bottom-4 left-2 sm:left-8 text-secondary">
                                    <span>{el.location}</span>
                                    <span className='px-2 py-1 rounded-full bg-tertiary text-primary'>
                                        {el.number} properties
                                    </span>
                                </div>
                            </div>
                        ))}      </div>
                    <div className='w-full grid grid-cols-2  sm:h-220  gap-2 sm:gap-8'>
                        {secondGrid.map((el, i) => (<div className={`w-full relative h-70 rounded-3xl ${i === 0 ? "col-span-2  h-70 sm:h-100" : "h-80 sm:h-120"}`} style={{ backgroundImage: `url('/${el.image}')`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                            <div className="flex flex-col absolute items-start justify-center bottom-4 left-2 sm:left-8 text-secondary">
                                <span>{el.location}</span>
                                <span className='px-2 py-1 rounded-full bg-tertiary text-primary'>
                                    {el.number} properties
                                </span>
                            </div>
                        </div>
                        ))}      </div>
                </div>
            </div>
        </section>
    )
}


const About = () => {
    return (
        <div className='w-full flex flex-col sm:flex-row items-center justify-center py-16 px-4 sm:px-40 min-h-screen'>

            <div className='w-full flex flex-col-reverse sm:flex-row relative bg-secondary text-light  sm:h-[70vh] items-center justify-center realtive gap-5 sm:gap-10'>
                <img src="/whoarewe.png" height={512} width={512} className='w-full sm:w-[40vw] mt-0 mb-auto sm:h-[60vh]' alt="" />

                <div className='flex h-full w-full sm:gap-8 gap-4 flex-col justify-start items-start '>
                    <h1 className='text-3xl  sm:text-7xl w-full  max-w-xl font-semibold'>Who Are We.</h1>
                    <p className='w-full  sm:text-2xl font-light   sm:max-w-2xl'>
                        We work with properties in various areas of the region. Find the best option for you here.
                        For three years in the market, VMAF was born with the purpose of bringing innovation and quality to the real estate sector in the interior of São Paulo.
                        Created and still managed by a family, our mission is to connect you to your new home — always valuing excellent service and agility by offering services focused on the sale of our own properties, real estate management, and auction consulting.
                    </p>


                </div>

            </div>

        </div>)

}


const Numbers = () => {
    return (
        <div id='about' className='w-full flex flex-col items-center justify-center min-h-screen gap-2 sm:min-h-[50vh] py-8 px-4 sm:p-0 bg-secondary text-primary'
            style={{
                backgroundImage: "url('/numbers.png')", backgroundPosition: 'center', backgroundSize: 'cover'
            }}>
            <p className='text-lg mb-4 text-tertiary  w-full px-2 sm:px-2 sm:text-3xl  text-center'>
                We are committed to providing the best housing at the best price for <b>YOUR FAMILY.</b></p>
            <div className='w-[90vw]  sm:w-3/4  flex flex-col sm:flex-row items-center gap-8 justify-center sm:mt-4'>
                <div className={`w-full sm:h-64 rounded-lg gap-3  py-8 px-5  text-primary flex flex-col items-center justify-center bg-tertiary`}>
                    <h2 className='text-5xl font-semibold'>35+</h2>
                    <p className='text-xs text-center sm:text-lg text-primary'>Properties negotiated</p>
                </div>
                <div className={`w-full sm:h-64 rounded-lg gap-3  py-8 px-5  text-primary flex flex-col items-center justify-center bg-tertiary`}>
                    <h2 className='text-5xl font-semibold'>10+</h2>
                    <p className='text-xs text-center sm:text-lg text-primary'> Renovated properties
                    </p>
                </div>
                <div className={`w-full sm:h-64 rounded-lg gap-3  py-8 px-5  text-primary flex flex-col items-center justify-center bg-tertiary`}>
                    <h2 className='text-5xl font-semibold'>120+</h2>
                    <p className='text-xs text-center sm:text-lg text-primary'>Happy clients</p>
                </div>
                <div className={`w-full sm:h-64 rounded-lg gap-3  py-8 px-5  text-primary flex flex-col items-center justify-center bg-tertiary`}>
                    <h2 className='text-5xl font-semibold'>250</h2>
                    <p className='text-xs text-center sm:text-lg text-primaryy'>Coffees with clients</p>
                </div>

            </div>
        </div>
    )
}



const SellCard = ({ item }) => {
    return (
        <div className='flex relative flex-col bg-white min-h-100 sm:min-h-150 pb-2 items-center overflow-hidden justify-between gap-1 rounded-lg w-75 sm:w-100 shadow-xl hover:shadow-none transition-all duration-300 ease-in'>
            <div className='absolute py-2 px-3 rounded-full text-md bg-primary text-tertiary top-4 right-4'>
                {item.status}
            </div>
            <div className='w-full min-w-40 h-40 sm:min-w-42 sm:h-56 object-cover mb sm:mb-2 overflow-hidden'>
                <img src={`${item.image[0]}`} alt={item.name} className='hover:scale-110 ease-in transition-all duration-200 w-full h-full' />
            </div>
            <h3 className='text-xl font-semibold text-left px-4 w-full'>{item.name}</h3>
            <div className='text-sm font-medium text-gray-600 px-4 w-full'>
                {item.rent ? 'For Rent' : 'For Sale'}
            </div>

            {/* Address */}
            <div className='text-xs sm:text-sm text-gray-500 px-4 w-full truncate'>
                {item.address}
            </div>

            <div className='flex flex-row items-start sm:items-center justify-center gap-2 w-full sm:px-4 px-4 sm:py-2'>
                <div className='w-full flex flex-row justify-start px-0  sm:flex-col gap-1 sm:justify-between items-center '>
                    <span>Rooms</span>
                    <span>{item.rooms}</span>
                </div>
                <div className='w-full flex flex-row justify-start px-0  sm:flex-col gap-1 sm:justify-between items-center '>
                    <span>Area</span>
                    <span>{item.area}m²</span>
                </div>
                <div className='w-full flex flex-row justify-start px-0  sm:flex-col gap-1 sm:justify-between items-center '>
                    <span>Bathroom</span>
                    <span>{item.bathroom}</span>
                </div>
            </div>
            <hr className='border hidden sm:flex opacity-40 w-[88%] mx-auto' />
            <div className="flex w-full sm:flex-col px-4 justify-start item-center gap-2">
                <span className='text-center font-semibold '>Price</span>
                <span className='sm:text-xl sm:text-center sm:font-semibold'>${item.price}</span>
            </div>
            <button
                className='px-4 sm:text-xl font-semibold mb-4 py-2 sm:w-1/3 mt-2 text-tertiary bg-primary rounded-xl hover:text-primary hover:bg-secondary transition-all duration-300'>
                See more
            </button>
        </div>
    )
}

const Card = ({ text, value }) => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center justify-between h-40 sm:h-60 bg-white rounded-xl sm:p-3 sm:py-4 p-2 shadow-xl hover:shadow-none transition-all duration-300 w-full sm:w-48">
            <div className='h-full w-full flex flex-col items-center justify-start gap-2'>
                <div className='p-4    border rounded-full mx-auto flex items-center justify-center'>
                    <House size={40} className='' fill='black' />
                </div>
                <p className=' text-md sm:text-xl text-center w-full'>{text}</p>
            </div>
            <button
                onClick={() => navigate(value ? `/houses?category=${value}` : "/houses")}
                className='rounded-full p-2  text-xs sm:border hover:text-primary  hover:bg-secondary transition-all duration-300'
            >
                View more
            </button>
        </div>
    )
}



const Recommended = ({ sold }) => {
    const navigate = useNavigate()
    return (
        <section id='recommended' className='flex  flex-col items-center justify-start  w-full py-16 px-4 sm:px-40 gap-16 min-h-screen bg-bg-white ' style={{
            scrollbarWidth: 'none'
        }}>
            {sold.length > 0 && <> <div className='flex flex-col items-center justify-center gap-2 w-full '>
                <h1 className='text-3xl sm:text-7xl font-bold'>Our latest sells</h1>
                <p className='text-md text-center w-full max-w-2xl'>
                    Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.                </p>
            </div>
                <div className='flex flex-col sm:flex-row items-center justify-between  w-full  ' style={{ scrollbarWidth: 'none' }}>
                    {sold.map((item, index) => (<SellCard item={item} key={index} />))}
                </div></>
            }

            <div className='w-full flex sm:flex-row flex-col justify-between items-start gap-4 my-4'>
                <div className='w-full flex flex-col items-start justify-start gap-4'>
                    <h1 className='text-3xl sm:text-7xl w-full text-left font-semibold max-w-2xl'>Find a property</h1>
                    <p className='text-lg w-full text-left  max-w-xl'>We work with properties in various areas of the region. Find the best option for you here.                    </p>
                </div>
                <div className='w-full flex  items-start gap-1 sm:gap-8 justify-start '>

                    {
                        /**{ text: "House", link: "#" }, */

                        [
                            { text: "All", value: "" },
                            { text: "Appartment", value: "appartment" },
                            { text: "House", value: "house" }
                        ].map((item, i) => (
                            <Card key={i} text={item.text} value={item.value} />
                        ))
                    }
                </div>

            </div>

        </section>)
}

import { ShopContext } from '../context/ShopContext'

const Home = () => {

    const { products } = useContext(ShopContext)

    const [sold, setSold] = useState([])
    useEffect(() => {
        console.log(products.map(p => p.status)) // See if 'sold' is present

        setSold(products.filter(el => el.status !== 'available').slice(0, 4))
    }, [products])


    return (
        <div className='flex flex-col items-center justify-center gap-5 min-h-screen bg-bg-white'>

            <Carousel />
            <Recommended sold={sold} />
            <Galery />
            <About />
            <Numbers />
            <Contact />
        </div>
    )
}

export default Home
