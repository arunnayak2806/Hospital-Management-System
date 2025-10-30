import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Prescripto, where we believe in delivering high-quality, compassionate healthcare with a patient-first approach. Our mission is to serve our community with integrity, innovation and excellence in medical care.</p>
          <p>Prescripto stands as a modern health care institution dedicated to the well-being of each individual we serve. With a team of experienced physicians, nurses, allied health professionals and support staff, our multidisciplinary staff is committed to delivering holistic and personalised care.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>To be a trusted health partner for every individual and family in our region—where excellence in care, kindness of service and leadership in innovation converge to set a new standard for healthcare.Thank you for choosing Prescripto Hospital. We are honoured to be trusted with your health and committed to walking alongside you on your journey to wellness.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row '>
        <div className='border px-10 md:px-16 py-8 sm:py-16 gap-5 text-[15px] hover:bg-indigo-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 gap-5 text-[15px] hover:bg-indigo-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network or trusted healthcare professionals in your area.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 gap-5 text-[15px] hover:bg-indigo-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendations and remainders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About
