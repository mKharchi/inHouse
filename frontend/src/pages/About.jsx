import React from 'react'

import { RiChatCheckFill } from 'react-icons/ri'
import { CiCircleCheck } from 'react-icons/ci'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { Link, NavLink } from 'react-router'
import Hero from '../components/Hero'
import Contact from '../components/Contact'


const Values = () => {
  return (
    <div id='about' className='w-full flex flex-col items-center justify-center gap-7 min-h-[50vh] bg-secondary text-primary'
    >
      <h1 className='text-3xl sm:text-3xl sm:text-7xl w-full text-center '>Our Values</h1>
      <p className='text-lg sm:text-xl mb-4 text-primary  w-full px-2 sm:px-2 md:text-3xl sm:w-1/3 text-center'>
        Our mission is to make selling real estate simple — with ethics, fairness, transparency, and efficiency at every step.</p>
      <div className='w-[90vw]  sm:w-3/4  flex flex-col sm:flex-row items-center gap-8 justify-center sm:mt-4'>
        <div className={`w-full h-64 rounded-lg gap-3  py-8 px-5  text-primary flex flex-col items-center justify-center bg-tertiary`}>
          <h2 className='text-5xl font-semibold'>35+</h2>
          <p className='text-md text-center sm:text-lg text-primary'>Properties negotiated</p>
        </div>
        <div className={`w-full h-64 rounded-lg gap-3  py-8 px-5  text-primary flex flex-col items-center justify-center bg-tertiary`}>
          <h2 className='text-5xl font-semibold'>10+</h2>
          <p className='text-md text-center sm:text-lg text-primary'> Renovated properties
          </p>
        </div>
        <div className={`w-full h-64 rounded-lg gap-3  py-8 px-5  text-primary flex flex-col items-center justify-center bg-tertiary`}>
          <h2 className='text-5xl font-semibold'>120+</h2>
          <p className='text-md text-center sm:text-lg text-primary'>Happy clients</p>
        </div>
        <div className={`w-full h-64 rounded-lg gap-3  py-8 px-5  text-primary flex flex-col items-center justify-center bg-tertiary`}>
          <h2 className='text-5xl font-semibold'>250</h2>
          <p className='text-md text-center sm:text-lg text-primaryy'>Coffees with clients</p>
        </div>

      </div>
    </div>
  )
}

const ABoutUs = () => {

  return (
    <div className='w-full flex flex-col sm:flex-row items-center justify-center py-16 px-4 sm:px-40 min-h-screen'>

      <div className='w-full flex flex-col sm:flex-row relative bg-secondary text-light  sm:h-[70vh] items-center justify-center realtive gap-5 sm:gap-10'>
        <img src="/whoarewe.png" height={512} width={512} className='w-full sm:w-[40vw] mt-0 mb-auto sm:h-[60vh]' alt="" />

        <div className='flex h-full w-full sm:gap-8 gap-4 flex-col justify-start items-start '>
          <h1 className='text-3xl sm:text-3xl sm:text-7xl w-full  max-w-xl font-semibold'>Who Are We.</h1>
          <p className='w-full  sm:text-2xl font-light   sm:max-w-2xl'>
            We work with properties in various areas of the region. Find the best option for you here.
            For three years in the market, VMAF was born with the purpose of bringing innovation and quality to the real estate sector in the interior of São Paulo.
            Created and still managed by a family, our mission is to connect you to your new home — always valuing excellent service and agility by offering services focused on the sale of our own properties, real estate management, and auction consulting.
          </p>


        </div>

      </div>

    </div>)


}

const Journey = () => {
  return (
    <div className='w-full hidden sm:min-h-[70vh] sm:flex py-36 px-4 sm:px-40 items-center justify-between'>
        <img src="/aboutImg2.png" width={ 2048} height={2048} className='rounded-4xl object-contain' alt="" />
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
      <ABoutUs />
      <Values />
      <Journey />
      <Contact />
    </div>
  )
}

export default About
