import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import Carousel from '../components/Carousel'
import { House } from 'lucide-react'
import Contact from '../components/Contact'
import { ShopContext } from '../context/ShopContext'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const Galery = () => {
    const containerRef6 = useRef()

    useGSAP(() => {
        gsap.to(".fade-up", {
            scrollTrigger: {
                trigger: containerRef6.current,
                start: "top 70%",
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            stagger: 0.15,
        })
    }, [])


    const firstGrid = [
        { image: "grid11.png", location: "Setif", number: "2" },
        { image: "grid12.png", location: "Alger", number: "2" },
        { image: "grid13.png", location: "Oran", number: "2" }
    ]
    const secondGrid = [
        { image: "grid21.png", location: "Bejaia", number: "2" },
        { image: "grid22.png", location: "Tlemcen", number: "2" },
        { image: "grid23.png", location: "Tamenraset", number: "2" }
    ]

    return (
        <section className='flex sm:min-h-[80vh]  py-6 flex-col w-full items-center justify-start gap-8 px-4 md:px-8 lg:px-16 xl:px-40'>
            <div ref={containerRef6} className='flex flex-col items-center justify-center gap-3 w-full text-center'>
                <h1 className='fade-up text-3xl md:text-5xl lg:text-7xl font-bold text-center w-full'>Properties by Region</h1>
                <p className='fade-up text-base md:text-lg'>Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.</p>

                <div className='w-full mt-8 h-full flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-8'>
                    <div className='w-full grid grid-cols-2 h-auto lg:h-[220px] gap-2 md:gap-4 lg:gap-8'>
                        {firstGrid.map((el, i) => (
                            <div
                                key={i}
                                className={`fade-up w-full relative rounded-3xl ${i === 2 ? "col-span-2 h-[200px] md:h-[250px] lg:h-[300px]" : "h-[150px] md:h-[200px] lg:h-[320px]"}`}
                                style={{
                                    backgroundImage: `url('/${el.image}')`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                <div className="flex flex-col absolute items-start justify-center bottom-4 left-2 md:left-4 lg:left-8 text-secondary">
                                    <span className='text-sm md:text-base'>{el.location}</span>
                                    <span className='px-2 py-1 text-xs md:text-sm rounded-full bg-tertiary text-primary'>
                                        {el.number} properties
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='w-full grid grid-cols-2 h-auto lg:h-[220px] gap-2 md:gap-4 lg:gap-8'>
                        {secondGrid.map((el, i) => (
                            <div
                                key={i}
                                className={`fade-up w-full relative rounded-3xl ${i === 0 ? "col-span-2 h-[200px] md:h-[250px] lg:h-[300px]" : "h-[150px] md:h-[200px] lg:h-[320px]"}`}
                                style={{
                                    backgroundImage: `url('/${el.image}')`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                <div className="flex flex-col absolute items-start justify-center bottom-4 left-2 md:left-4 lg:left-8 text-secondary">
                                    <span className='text-sm md:text-base'>{el.location}</span>
                                    <span className='px-2 py-1 text-xs md:text-sm rounded-full bg-tertiary text-primary'>
                                        {el.number} properties
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


const About = () => {
    const containerRef7 = useRef()

    useGSAP(() => {
        gsap.to(".fade-up-2", {
            scrollTrigger: {
                trigger: containerRef7.current,
                start: "top 70%",
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            stagger: 0.15,
        })
    }, [])

    return (
        <div ref={containerRef7} className='w-full sm:mt-24 flex flex-col lg:flex-row items-center justify-center py-8 md:py-16 px-4 md:px-8 lg:px-16 xl:px-40 sm:min-h-screen'>
            <div className='w-full flex flex-col-reverse lg:flex-row relative bg-secondary text-light lg:h-[70vh] items-center justify-center gap-4 md:gap-8 lg:gap-10'>
                <img
                    src="/whoarewe.png"
                    alt="About us"
                    className='w-full fade-up-2 lg:w-[40vw] h-auto lg:h-[60vh] object-cover'
                />
                <div className='flex  h-full w-full gap-4 md:gap-6 lg:gap-8 flex-col justify-start items-start'>
                    <h1 className='fade-up-2 text-3xl md:text-5xl lg:text-7xl w-full max-w-xl font-semibold'>Who Are We.</h1>
                    <p className='fade-up-2 w-full text-base md:text-lg lg:text-xl font-light max-w-2xl'>
                        We work with properties in various areas of the region. Find the best option for you here.
                        For three years in the market, VMAF was born with the purpose of bringing innovation and quality to the real estate sector in the interior of São Paulo.
                        Created and still managed by a family, our mission is to connect you to your new home — always valuing excellent service and agility by offering services focused on the sale of our own properties, real estate management, and auction consulting.
                    </p>
                </div>
            </div>
        </div>
    )
}

const Numbers = () => {
    const refC = useRef()
    useGSAP(() => {
        gsap.to(".fade-up-3", {
            scrollTrigger: {
                trigger: refC.current,
                start: "top 50%",
            },
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
        })
    }, [])

    return (
        <div id='about' className='w-full flex flex-col items-center justify-center min-h-screen md:min-h-[50vh] py-8 px-4 md:px-8 lg:px-16 xl:px-40 bg-secondary text-primary'
            style={{
                backgroundImage: "url('/numbers.png')",
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
            <p className='text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 text-tertiary w-full text-center'>
                We are committed to providing the best housing at the best price for <b>YOUR FAMILY.</b>
            </p>
            <div ref={refC} className='w-full mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'>
                <div className={`fade-up-3 w-full h-40 md:h-48 lg:h-64 rounded-lg py-4 md:py-6 lg:py-8 px-4 text-primary flex flex-col items-center justify-center bg-tertiary`}>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>35+</h2>
                    <p className='text-xs md:text-sm lg:text-base text-center text-primary'>Properties negotiated</p>
                </div>
                <div className={`fade-up-3 w-full h-40 md:h-48 lg:h-64 rounded-lg py-4 md:py-6 lg:py-8 px-4 text-primary flex flex-col items-center justify-center bg-tertiary`}>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>10+</h2>
                    <p className='text-xs md:text-sm lg:text-base text-center text-primary'>Renovated properties</p>
                </div>
                <div className={`fade-up-3 w-full h-40 md:h-48 lg:h-64 rounded-lg py-4 md:py-6 lg:py-8 px-4 text-primary flex flex-col items-center justify-center bg-tertiary`}>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>120+</h2>
                    <p className='text-xs md:text-sm lg:text-base text-center text-primary'>Happy clients</p>
                </div>
                <div className={`fade-up-3 w-full h-40 md:h-48 lg:h-64 rounded-lg py-4 md:py-6 lg:py-8 px-4 text-primary flex flex-col items-center justify-center bg-tertiary`}>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>250</h2>
                    <p className='text-xs md:text-sm lg:text-base text-center text-primary'>Coffees with clients</p>
                </div>
            </div>
        </div>
    )
}

const SellCard = ({ item }) => {
    const containerRef = useRef()

    useGSAP(() => {
        gsap.to(".fade-up-1", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 30%",
            },
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: "power1.inOut"
        })

    }, [])

    const navigate = useNavigate()
    return (
        <div ref={containerRef} className='flex relative flex-col bg-white min-h-[400px] md:min-h-[450px] lg:min-h-[500px] pb-4 items-center overflow-hidden justify-between gap-2 rounded-lg w-full max-w-[300px] md:max-w-[350px] shadow-xl hover:shadow-none transition-all duration-300 ease-in'>
            <div className='absolute py-1 px-2 md:py-2 md:px-3 rounded-full text-xs md:text-sm bg-primary text-tertiary top-2 md:top-4 right-2 md:right-4'>
                {item.status}
            </div>
            <div className='w-full h-40 md:h-48 lg:h-56 overflow-hidden'>
                <img src={`${item.image[0]}`} alt={item.name} className='w-full h-full object-cover hover:scale-110 ease-in transition-all duration-200' />
            </div>
            <div className='w-full px-4 space-y-1'>
                <h3 className='text-lg md:text-xl font-semibold'>{item.name}</h3>
                <div className='text-xs md:text-sm font-medium text-gray-600'>
                    {item.rent ? 'For Rent' : 'For Sale'}
                </div>
                <div className='text-xs md:text-sm text-gray-500 truncate'>
                    {item.address}
                </div>
            </div>

            <div className='flex flex-row items-start md:items-center justify-between w-full px-4 py-2 gap-2'>
                <div className='flex flex-col items-center gap-1'>
                    <span className='text-xs md:text-sm'>Rooms</span>
                    <span className='text-sm md:text-base'>{item.rooms}</span>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <span className='text-xs md:text-sm'>Area</span>
                    <span className='text-sm md:text-base'>{item.area}m²</span>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <span className='text-xs md:text-sm'>Bathroom</span>
                    <span className='text-sm md:text-base'>{item.bathroom}</span>
                </div>
            </div>

            <hr className='border opacity-40 w-[88%] mx-auto' />

            <div className="flex w-full px-4 justify-between items-center py-2">
                <span className='text-sm md:text-base font-semibold'>Price</span>
                <span className='text-lg md:text-xl font-semibold'>${item.price}</span>
            </div>

            <button
                onClick={() => navigate(`/property/${item._id}`)}
                className='px-4 fade-up-1 opacity-0 -translate-y-10 py-2 text-sm md:text-base font-semibold mb-4 mt-2 text-tertiary bg-primary rounded-xl hover:text-primary hover:bg-secondary transition-all duration-300 w-3/4 md:w-1/2 lg:w-1/3'>
                See more
            </button>
        </div>
    )
}

const Card = ({ text, value }) => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center justify-between h-40 md:h-48 lg:h-60 bg-white rounded-xl p-3 shadow-xl hover:shadow-none transition-all duration-300 w-full max-w-[200px]">
            <div className='h-full w-full flex flex-col items-center justify-start gap-2'>
                <div className='p-3 md:p-4 border rounded-full mx-auto flex items-center justify-center'>
                    <House size={24} className='md:size-8 lg:size-10' fill='black' />
                </div>
                <p className='text-sm md:text-base lg:text-lg text-center w-full'>{text}</p>
            </div>
            <button
                onClick={() => navigate(value ? `/houses?category=${value}` : "/houses")}
                className='rounded-full px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm border hover:text-primary hover:bg-secondary transition-all duration-300'
            >
                View more
            </button>
        </div>
    )
}

const Recommended = ({ sold }) => {


    return (
        <section
            id='recommended'
            className='flex flex-col items-center justify-start w-full py-8 md:py-16 px-4 md:px-8 xl:px-12 2xl:px-40 gap-8 '
        >
            {sold.length > 0 && (
                <>
                    <div className='flex flex-col items-center justify-center gap-2 w-full'>
                        <h1 className=' text-3xl md:text-5xl lg:text-7xl font-bold'>Our latest sells</h1>
                        <p className=' text-sm md:text-base lg:text-lg text-center w-full max-w-2xl'>
                            Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.
                        </p>
                    </div>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center gap-4'>
                        {sold.map((item, index) => (
                            <SellCard key={index} item={item} />

                        ))}
                    </div>
                </>
            )}

            <div className='w-full flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-8 my-4'>
                <div className=' w-full lg:w-1/2 flex flex-col items-start justify-start gap-3 md:gap-4'>
                    <h1 className='text-3xl md:text-5xl lg:text-7xl font-semibold'>Find a property</h1>
                    <p className='text-base md:text-lg lg:text-xl'>
                        We work with properties in various areas of the region. Find the best option for you here.
                    </p>
                </div>
                <div className='w-full lg:w-1/2 grid grid-cols-3 gap-2 md:gap-4 lg:gap-6'>
                    {[
                        { text: "All", value: "" },
                        { text: "Appartment", value: "appartment" },
                        { text: "House", value: "house" }
                    ].map((item, i) => (
                        <div key={i} className="">
                            <Card text={item.text} value={item.value} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const Home = () => {
    const { products } = useContext(ShopContext)
    const [sold, setSold] = useState([])

    useEffect(() => {
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