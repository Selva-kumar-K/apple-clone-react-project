import React from 'react'
import ImageContainer from './ImageContainer'
import CardContainer from './CardContainer'

const Body = () => {
  return (
    <>
    <div className='bg-[#f3f2f2eb] py-14'>
        <div className="w-[90%] mx-auto md:flex justify-between lg:w-[80%]">

          <div className="md:w-[450px] lg:w-[600px]">
            <p className='text-3xl font-semibold lg:text-5xl'>Store.<span className='text-gray-500 '> The best way to buy the products you love.</span></p>
          </div>

          <div className="my-10 md:m-0">
            <div className="flex space-x-5 items-center my-3">
              <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-[25px] lg:w-[28px]'><path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z"/></svg>
              </div>
              <div className="">
                <p className='font-semibold text-sm text-gray-700 md:text-[12px] lg:text-[16px] mb-1'>Need shopping help?</p>
                <p className='text-sm text-blue-700 md:text-[12px] lg:text-[15px]'>Ask a Specialist</p>
              </div>
            </div>

            <div className="flex space-x-5 items-center my-3">
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-[25px] lg:w-[28px]'><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
              </div>
              <div className="">
                <p className='font-semibold text-sm text-gray-700 md:text-[12px] lg:text-[16px] mb-1'>Visit an Apple Store</p>
                <p className='text-sm text-blue-700 md:text-[12px] lg:text-[15px]'>Find one near you <span className="text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-[5px] text-blue-600 inline"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></span></p>
              </div>
            </div>
        
          </div>
        </div>

        {/* Image Container Starting */}

        <ImageContainer/>
        <CardContainer/>
       
    </div>
    </>
  )
}

export default Body