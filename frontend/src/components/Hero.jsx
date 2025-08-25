import React, { useRef } from "react"
import Navbar from "./Navbar"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

const Hero = ({ image, title, description }) => {
    const container = useRef()

    useGSAP(() => {
        gsap.from(".hero-title", {
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
        })
       
    }, { scope: container })

    return (
        <section
            ref={container}
            className='flex flex-col relative items-center gap-4 sm:gap-6 lg:gap-8 w-full py-4 sm:py-6 lg:py-8 xl:py-12 2xl:py-16 px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-40 justify-center min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] xl:min-h-[78vh] bg-center bg-cover bg-no-repeat overflow-hidden'
        >
            {/* Background image with lazy loading */}
            <img
                src={image}
                alt="Hero background"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ pointerEvents: "none" }}
            />
            {/* Overlay for gradient effect */}
            <div className="absolute inset-0 bg-black opacity-80 z-0" />

            <Navbar />

            <div className='flex text-center gap-2 sm:gap-4 flex-col w-full items-center justify-center h-full flex-1'>
                <h1
                    className='hero-title max-w-[95vw] sm:max-w-[85vw] lg:max-w-[75vw] xl:max-w-[60vw] text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-semibold leading-tight'>
                    {title}
                </h1>

                {description && (
                    <p className='hero-desc max-w-[90vw] sm:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[50vw] text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-light leading-relaxed mt-2 sm:mt-4'>
                        {description}
                    </p>
                )}
            </div>
        </section>
    )
}

export default Hero
