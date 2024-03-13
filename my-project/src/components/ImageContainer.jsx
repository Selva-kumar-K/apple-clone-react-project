import React from 'react'

import { images } from './menus'

const ImageContainer = () => {
  return (
    <div className='w-[80%] mx-auto flex justify-between space-x-5 overflow-x-scroll no-scrollbar my-14'>
        {images.map(({img, name,index}) => (
            <div className="w-[100px] text-center shrink-0 lg:w-[125px]" key={index}>
                <img src={img} alt="" className=''/>
                <p className='font-semibold mt-2 text-gray-700 text-sm'>{name}</p>
            </div>
        ))}
    </div>
  )
}

export default ImageContainer