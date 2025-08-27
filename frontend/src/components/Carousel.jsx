import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useRef, useState } from "react"
import Navbar from "./Navbar"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"

const Carousel = () => {



    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        breakpoints: {
            "(min-width: 640px)": {
                slides: { perView: 1, spacing: 0 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 1, spacing: 0 },
            },
        },
        slides: { perView: 1 }
    })
    const textContainer1Ref = useRef()
    const textContainer2Ref = useRef()
    const textContainer3Ref = useRef()
    useGSAP(() => {
        const containers = [
            textContainer1Ref.current,
            textContainer2Ref.current,
            textContainer3Ref.current
        ]

        containers.forEach((container, i) => {
            if (currentSlide === i) {
                const texts = container.querySelectorAll(".slide-text")
                gsap.to(texts, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.3,
                    duration: 1,
                    ease: "power3.out"
                })
            } else {
                gsap.set(container.querySelectorAll(".slide-text"), { opacity: 0, y: 50 })
            }
        })
    }, [currentSlide])
    // Trigger animation on slide change
    const intervalRef = useRef(null)

    useEffect(() => {
        if (slider.current && !isHovered) {
            intervalRef.current = setInterval(() => {
                slider.current.next()
            }, 5000)

            return () => {
                clearInterval(intervalRef.current)
            }
        }
    }, [slider, isHovered])

    return (
        <div
            className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Navbar />

            <div ref={sliderRef} className="keen-slider w-full h-screen relative">
                                {/* Slide 1 */}
                                <div className="keen-slider__slide flex flex-col gap-3 md:gap-4 lg:gap-6 items-start justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 h-full bg-white relative overflow-hidden">
                                    <img
                                        src="carousel1.png"
                                        alt="Slide 1"
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover -z-10"
                                        style={{ pointerEvents: "none" }}
                                    />
                                    <div ref={textContainer1Ref} className="max-w-7xl w-full space-y-3 md:space-y-4 lg:space-y-6">
                                        <p className="slide-text opacity-0  text-sm sm:text-base md:text-lg lg:text-xl text-tertiary font-medium">COUNT ON VMAF IN 2023</p>
                                        <h1 className="slide-text opacity-0  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-tertiary leading-tight md:leading-snug lg:leading-normal">
                                            We are committed to providing the best housing at the best price for YOUR FAMILY.
                                        </h1>
                                        <h2 className="slide-text opacity-0  text-base sm:text-lg md:text-xl lg:text-2xl text-tertiary font-medium max-w-3xl">
                                            How we do it: We buy, renovate, and make dreams come true.
                                        </h2>
                                    </div>
                                </div>

                                {/* Slide 2 */}
                                <div ref={textContainer2Ref} className="keen-slider__slide flex flex-col gap-3 md:gap-4 lg:gap-6 items-start justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 h-full bg-white relative overflow-hidden">
                                    <img
                                        src="carousel2.png"
                                        alt="Slide 2"
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover -z-10"
                                        style={{ pointerEvents: "none" }}
                                    />
                                    <div className="max-w-7xl w-full space-y-3 md:space-y-4 lg:space-y-6">
                                        <p className="slide-text opacity-0  text-sm sm:text-base md:text-lg lg:text-xl text-tertiary font-medium">YOUR TRUST, OUR RESPONSIBILITY</p>
                                        <h1 className="slide-text opacity-0   text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-tertiary leading-tight md:leading-snug lg:leading-normal">
                                            From purchase to perfection — we handle every step with care and transparency.
                                        </h1>
                                        <h2 className="slide-text opacity-0  text-base sm:text-lg md:text-xl lg:text-2xl text-tertiary font-medium max-w-3xl">
                                            Our mission is simple: turning properties into warm, welcoming homes for families like yours.
                                        </h2>
                                    </div>
                                </div>

                                {/* Slide 3 */}
                                <div ref={textContainer3Ref} className="keen-slider__slide flex flex-col gap-3 md:gap-4 lg:gap-6 items-start justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 h-full bg-white relative overflow-hidden">
                                    <img
                                        src="carousel3.png"
                                        alt="Slide 3"
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover -z-10"
                                        style={{ pointerEvents: "none" }}
                                    />
                                    <div className="max-w-7xl w-full space-y-3 md:space-y-4 lg:space-y-6">
                                        <p className="slide-text opacity-0  text-sm sm:text-base md:text-lg lg:text-xl text-tertiary font-medium">BUILDING TOMORROW TOGETHER</p>
                                        <h1 className="slide-text opacity-0  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-tertiary leading-tight md:leading-snug lg:leading-normal">
                                            Join us in shaping a better future — one home, one family, one dream at a time.
                                        </h1>
                                        <h2 className="slide-text opacity-0  text-base sm:text-lg md:text-xl lg:text-2xl text-tertiary font-medium max-w-3xl">
                                            VMAF is more than housing. It's a vision for affordable living and sustainable communities.
                                        </h2>
                                    </div>
                                </div>

                {/* Navigation Arrows */}
                {loaded && (
                    <>
                        <button
                            onClick={() => slider.current?.prev()}
                            className="hidden lg:flex absolute top-1/2 left-4  lg:left-12 xl:left-16 -translate-y-1/2  bg-opacity-30 hover:bg-opacity-50 text-tertiary p-2 rounded-full z-10 transition-all duration-300"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={32} className="lg:size-10" />
                        </button>
                        <button
                            onClick={() => slider.current?.next()}
                            className="hidden lg:flex absolute top-1/2 right-4  lg:right-12 xl:right-16 -translate-y-1/2  bg-opacity-30 hover:bg-opacity-50 text-tertiary p-2 rounded-full z-10 transition-all duration-300"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={32} className="md:size-8 lg:size-10" />
                        </button>
                    </>
                )}
            </div>

            {/* Dots Indicator */}
            {loaded && slider.current && (
                <div className="absolute bottom-8 sm:bottom-12 flex gap-2">
                    {[...Array(slider.current.track.details.slides.length).keys()].map((idx) => (
                        <button
                            key={idx}
                            onClick={() => slider.current?.moveToIdx(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? "bg-tertiary w-6" : "bg-white bg-opacity-50"}`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Carousel