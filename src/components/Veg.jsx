import React from 'react'
import {Link} from 'react-router'
import v1 from '../assets/Veg/veg.png'
import v2 from '../assets/Veg/veg2.png'
import v3 from '../assets/Veg/briyani veg3.avif'
import v4 from '../assets/Veg/southveg4.jpg'

const veg = [
  {
    id: 21,
    img: v1,
    name: 'special thali',
    price: 110,
  },
  {
    id: 22,
    img: v2,
    name: 'Sadhi thali',
    price: 100,
  },
  {
    id: 23,
    img: v3,
    name: 'Veg Briyani',
    price: 120,
  },
  {
    id: 24,
    img: v4,
    name: 'southIndian Thai',
    price: 110,
  },
]
export default function Veg() {
  return (
    <div className='flex  justify-evenly items-center' >
      {veg.map((itm, ind) => (
        <div key={ind} className='w-[200px] h-[100px]  m-4 '>
          <div className=' h-[100px] w-[100px]  flex justify-center items-center
                    transition-transform duration-300 
                    delay-200 ease-in-out hover:scale-150' >
            <img src={itm.img} />
          </div>
          <div className='text-center mr-7 font-bold'>
            {itm.name}
          </div>
          <div>
            Price -   <i class="fa-solid fa-indian-rupee-sign"></i>
            {itm.price} of one plate
          </div>
          <Link  to='/order'> 
                          <button className='border-2  border-solid 
                          border-black rounded-lg bg-gray-300
                          p-1 mt-2 text-center'>
                            Order Now
                          </button>
                          </Link>
        </div>

      ))}
    </div>
  )
}
