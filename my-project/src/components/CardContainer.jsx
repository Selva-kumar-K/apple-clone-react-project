import React from 'react'
import { accessories, card_data, card_data_2 } from './menus'

const CardContainer = () => {
  return (
    <div className="w-[90%] mx-auto my-20 lg:w-[80%]">
        <div className="">
            <p className='text-lg font-semibold md:text-2xl lg:text-2xl'>The latest.<span className='text-gray-500 '> Take a look at what’s new right now.</span></p>
        </div>   
        <div className="my-7 flex justify-between space-x-8 overflow-x-scroll no-scrollbar ">
            {card_data.map(({title, qoute, price, img}) => (
                <div className="bg-cover bg-no-repeat bg-center w-[310px] h-[480px] rounded-2xl shadow-xl py-8 px-7 shrink-0 lg:w-[400px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-300" style={{backgroundImage: `url(${img})`}}>
                    <p className='text-gray-500 text-[12px] font-semibold md:text-[15px]'>{title}</p>
                    <h2 className='font-semibold text-xl my-2 md:text-2xl'>{qoute}</h2>
                    <p className='text-[17px] md:text-[18px]'>{price}</p>
                </div>
            ))}
        </div> 

        <div className="mt-16">
            <div className="">
                <p className='text-lg font-semibold md:text-2xl lg:text-2xl'>Help is here.<span className='text-gray-500 '> Whenever and however you need it.</span></p>
            </div>   
            <div className="my-7 flex justify-between space-x-8 overflow-x-scroll no-scrollbar ">
                {card_data_2.map(({title, qoute, tag, img}) => (
                    <div className="bg-cover bg-no-repeat bg-center w-[310px] h-[500px] rounded-2xl shadow-xl py-8 px-7 shrink-0 lg:w-[500px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-300" style={{backgroundImage: `url(${img})`}}>
                        <p className='text-gray-500 text-[12px] font-semibold md:text-[14px]'>{title}</p>
                        <h2 className='font-semibold text-xl my-2 md:text-2xl'>{qoute}</h2>
                        <p className='text-[17px]'>{tag}</p>
                    </div>
                ))}
            </div> 
        </div>

        <div className="mt-16">
            <div className="">
                <p className='text-lg font-semibold md:text-2xl lg:text-2xl'>Accessories.<span className='text-gray-500 '> Essentials that pair perfectly with your favourite devices.</span></p>
            </div>   
            <div className="my-7 flex justify-between space-x-5 overflow-x-scroll no-scrollbar ">


            <div className="bg-cover bg-no-repeat bg-center w-[310px] h-[500px] rounded-2xl shadow-xl py-8 px-7 shrink-0 lg:w-[400px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-300" style={{backgroundImage: "url('./src/assets/card/accessories_cover_img.jpg')"}}>
                        {/* <p className='text-gray-500 text-[12px] font-semibold md:text-[14px]'></p> */}
                        <h2 className='font-semibold text-xl my-2 md:text-2xl'>In with the new.</h2>
                        <p className='text-[17px]'>Discover the fresh new colours for your favorite accessories.</p>
            </div>
                {accessories.map(({title, new_brand, price, img}) => (
                    <div className="bg-cover bg-no-repeat bg-center w-[310px] bg-white h-[500px] rounded-2xl shadow-xl py-12 px-7 shrink-0 lg:w-[310px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-300">
                        <img src={img} alt="" />
                        <div className="mt-10">
                            <p className='text-red-500 text-[12px] font-semibold md:text-[12px]'>{new_brand}</p>
                            <h2 className='font-semibold text-[17px] my-2 mb-4'>{title}</h2>
                        </div>
                        <p className='text-[15px]'>{price}</p>
                    </div>
                ))}
             <div className="bg-cover bg-no-repeat bg-center w-[310px] h-[500px] rounded-2xl shadow-xl py-8 px-7 shrink-0 lg:w-[400px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-300" style={{backgroundImage: "url('./src/assets/card/explore_accessories.jpg')"}}>
                        {/* <p className='text-gray-500 text-[12px] font-semibold md:text-[14px]'></p> */}
                        <h2 className='font-semibold text-xl my-2 md:text-2xl'>Explore all the accessories.</h2>
                        {/* <p className='text-[17px]'>Discover the fresh new colours for your favorite accessories.</p> */}
            </div>
            </div> 
        </div>
  </div>
  )
}

export default CardContainer