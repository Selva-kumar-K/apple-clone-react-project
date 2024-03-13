import React from 'react'
import { card_data, card_data_2 } from './menus'

const CardContainer = () => {
  return (
    <div className="w-[90%] mx-auto my-20 lg:w-[80%]">
        <div className="">
            <p className='text-lg font-semibold md:text-2xl lg:text-3xl'>The latest.<span className='text-gray-500 '> Take a look at what’s new right now.</span></p>
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
                <p className='text-lg font-semibold md:text-2xl lg:text-3xl'>Help is here.<span className='text-gray-500 '> Whenever and however you need it.</span></p>
            </div>   
            <div className="my-7 flex justify-between space-x-8 overflow-x-scroll no-scrollbar ">
                {card_data_2.map(({title, qoute, tag, img}) => (
                    <div className="bg-cover bg-no-repeat bg-center w-[310px] h-[500px] rounded-2xl shadow-xl py-8 px-7 shrink-0 lg:w-[500px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-300" style={{backgroundImage: `url(${img})`}}>
                        <p className='text-gray-500 text-[12px] font-semibold md:text-[14px]'>{title}</p>
                        <h2 className='font-semibold text-xl my-2 md:text-2xl'>{qoute}</h2>
                        <p className='text-[17px] md:text-[18px]'>{tag}</p>
                    </div>
                ))}
            </div> 
        </div>
  </div>
  )
}

export default CardContainer