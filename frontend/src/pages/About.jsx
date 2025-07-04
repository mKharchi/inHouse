import React, { useRef } from 'react'
import { RiChatCheckFill } from 'react-icons/ri'
import { CiCircleCheck } from 'react-icons/ci'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import { useGSAP } from '@gsap/react'
import {gsap} from 'gsap'

import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
const Values = () => {
   const containerRef8 = useRef()

  useGSAP(() => {
    gsap.to(".fade-up-4", {
      scrollTrigger: {
        trigger: containerRef8.current,
        start: "top 50%",
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    })
    gsap.to(".fade-up-5", {
      scrollTrigger: {
        trigger: containerRef8.current,
        start: "top 40%",
      },
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      stagger: 0.15,
    })
  }, [])



  return (
    <div ref={containerRef8} id='about' className='w-full flex flex-col items-center justify-center gap-4 md:gap-7 py-12 md:py-16 px-4 md:px-8 lg:px-16 xl:px-40 min-h-[50vh] bg-secondary text-primary'>
      <h1 className='fade-up-4 text-3xl md:text-5xl lg:text-7xl w-full text-center font-bold'>Our Values</h1>
      <p className='fade-up-4 text-base md:text-lg lg:text-xl xl:text-2xl text-primary w-full md:w-4/5 lg:w-2/3 text-center'>
        Our mission is to make selling real estate simple — with ethics, fairness, transparency, and efficiency at every step.
      </p>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-4 md:mt-8'>
        {[
          { value: "35+", label: "Properties negotiated" },
          { value: "10+", label: "Renovated properties" },
          { value: "120+", label: "Happy clients" },
          { value: "250", label: "Coffees with clients" }
        ].map((item, index) => (
          <div key={index} className='fade-up-5 w-full h-40 md:h-48 lg:h-56 rounded-lg py-4 px-4 md:py-6 md:px-6 text-primary flex flex-col items-center justify-center bg-tertiary hover:bg-tertiary-dark transition-all duration-300'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>{item.value}</h2>
            <p className='text-sm md:text-base lg:text-lg text-center text-primary mt-2'>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const AboutUs = () => {
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
    <div ref={containerRef7} className='w-full mt-36 flex flex-col lg:flex-row items-center justify-center py-8 md:py-16 px-4 md:px-8 lg:px-16 xl:px-40 min-h-screen'>
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

const Journey = () => {
  return (
    <div className='w-full hidden lg:flex min-h-[50vh] lg:min-h-[70vh] py-12 md:py-24 px-4 md:px-8 lg:px-16 xl:px-40 items-center justify-center'>
      <img
        src="/aboutImg2.png"
        alt="Our Journey"
        className='w-full max-w-6xl h-auto rounded-2xl object-contain shadow-xl'
      />
    </div>
  )
}

const About = () => {
  return (
    <div className='min-h-screen w-full flex flex-col justify-start items-center'>
      <Hero
        image={"aboutImg.png"}
        title={"VMAF Real Estate"}
        description={""}
      />
      <AboutUs />
      <Values />
      <Journey />
      <Contact />
    </div>
  )
}

export default About