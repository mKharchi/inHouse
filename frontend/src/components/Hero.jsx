import React from "react"
import Navbar from "./Navbar"
import Carousel from "./Carousel"


const Hero = ({ image, title, description, isContact, isAbout }) => {
    return (
        <section className='flex flex-col relative items-center gap-8 w-full py-8 2xl:py-16 px-16 2xl:px-4 sm:px-40 justify-center  h-full min-h-[40vh] sm:min-h-[78vh]  ' style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
        }}>
            <Navbar />

            <div className={`flex text-light gap-2 flex-col text-center w-full items-center justify-center h-full`}>
                <h1 className={` max-w-[60vw]  text-white text-3xl sm:text-5xl lg:text-6xl xl:text-3xl sm:text-7xl 2xl:text-9xl font-semibold mb-4 w-full`}>{title}</h1>
            </div>



        </section>

    )
}

export default Hero
