import React from 'react'
import {Link} from 'react-router'
import s1 from '../assets/Salad/salad.webp'
import s2 from '../assets/Salad/meet salad.jpg'
import s3 from '../assets/Salad/green salad.jpg'
import s4 from '../assets/Salad/veg salad.jpg'

const salad = [
  {
    id: 25,
    img: s1,
    name: ' salad',
    price: 12,
    description: 'Food provides essential nutrients for overall health and well-begin'
  },
  {
    id: 26,
    img: s2,
    name: 'non-veg Salad',
    price: 15,
    description: 'Non -veg salad are essential for ours body'
  },
  {
    id: 27,
    img: s3,
    name: 'Green salad',
    price: 8,
    description: 'Food provides essential nutrients for overall health and well-begin'
  },
  {
    id: 28,
    img: s4,
    name: 'Veg salad',
    price: 18,
    description: 'Food provides essential nutrients for overall health and well-begin'
  }
]
export default function Salad() {
  return (
    <div className='flex  justify-evenly items-center' >
      {salad.map((itm, ind) => (
        <div key={ind} className='w-[200px] h-[200px]  m-4 '>
          <div className=' h-[100px] w-[100px]  flex justify-center items-center
                    transition-transform duration-300 
                    delay-200 ease-in-out hover:scale-150'>
            <img src={itm.img} />
          </div>
          <div className='text-center mr-5 font-bold'>
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
