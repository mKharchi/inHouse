import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useRef, useState } from "react"
import Navbar from "./Navbar"
import { ChevronLeft, ChevronRight } from "lucide-react" // Optional: use icons

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)

    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        }
    })

    const intervalRef = useRef(null)

    useEffect(() => {
        if (slider.current) {
            intervalRef.current = setInterval(() => {
                slider.current.next()
            }, 3000)

            return () => {
                clearInterval(intervalRef.current)
            }
        }
    }, [slider])

    return (
        <div className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center">
            <Navbar />

            <div ref={sliderRef} className="keen-slider w-full sm:w-3/4 relative">
                <div className="keen-slider__slide number-slide1 flex flex-col gap-4 items-start font-semibold text-tertiary px-4 sm:px-54  justify-center  h-screen bg-cover bg-center"
                    style={{ backgroundImage: "url('carousel1.png')" }}>
                    <p className="w-full text-md sm:text-lg " >COUNT ON VMAF IN 2023 </p>
                    <h1 className="w-full text-3xl sm:text-3xl sm:text-7xl sm:max-w-4xl"  >We are committed to providing the best housing at the best price for YOUR FAMILY.
                    </h1 >
                    <h2 className="w-full text-md max-w-1/2">
                        How we do it: We buy, renovate, and make dreams come true.
                    </h2>
                </div>
                <div className="keen-slider__slide number-slide1 flex flex-col gap-4 items-start font-semibold text-tertiary px-4 sm:px-54  justify-center  h-screen bg-cover bg-center"
                    style={{ backgroundImage: "url('carousel2.png')" }}>
                    <p className="w-full text-md sm:text-lg " >YOUR TRUST, OUR RESPONSIBILITY</p>
                    <h1 className="w-full text-3xl sm:text-3xl sm:text-7xl sm:max-w-4xl"  >                        From purchase to perfection — we handle every step with care and transparency.
                    </h1>
                    <h2 className="w-full text-md max-w-1/2">
                        Our mission is simple: turning properties into warm, welcoming homes for families like yours.
                    </h2>
                </div>

                <div className="keen-slider__slide number-slide1 flex flex-col gap-4 items-start font-semibold text-tertiary px-4 sm:px-54  justify-center  h-screen bg-cover bg-center"
                    style={{ backgroundImage: "url('carousel3.png')" }}>
                    <p className="w-full text-md sm:text-lg " >BUILDING TOMORROW TOGETHER</p>
                    <h1 className="w-full text-3xl sm:text-3xl sm:text-7xl sm:max-w-4xl"  >                        Join us in shaping a better future — one home, one family, one dream at a time.
                    </h1>
                    <h2 className="w-full text-md max-w-1/2">
                        VMAF is more than housing. It’s a vision for affordable living and sustainable communities.
                    </h2>
                </div>

                {/* Left Arrow */}
                {loaded && (
                    <button
                        onClick={() => slider.current?.prev()}
                        className="hidden sm:flex absolute top-1/2 left-30 -translate-y-1/2 bg-transparent cursor-pointer  bg-opacity-40 text-white p-2 rounded-full z-10 hover:bg-opacity-60 transition"
                    >
                        <ChevronLeft size={56} />
                    </button>
                )}

                {/* Right Arrow */}
                {loaded && (
                    <button
                        onClick={() => slider.current?.next()}
                        className="hidden sm:flex  absolute top-1/2 right-30 -translate-y-1/2 bg-transparent  cursor-pointer bg-opacity-40 text-white p-2 rounded-full z-10 hover:bg-opacity-60 transition"
                    >
                        <ChevronRight size={56} />
                    </button>
                )}
            </div>

            {/* Dots */}
            {loaded && slider.current && (
                <div className="absolute bottom-10 flex gap-2 mt-4">
                    {[...Array(slider.current.track.details.slides.length).keys()].map((idx) => (
                        <button
                            key={idx}
                            onClick={() => slider.current?.moveToIdx(idx)}
                            className={`w-3 h-3 rounded-full ${currentSlide === idx ? "bg-tertiary " : "border border-tertiary"
                                } transition`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Carousel
