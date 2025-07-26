import React from 'react'
import {Link} from 'react-router'
import p1 from '../assets/Pasta/pasta4.jpg'
import p2 from '../assets/Pasta/pasta.webp'
import p3 from '../assets/Pasta/white pasta1.jpg'
import p4 from '../assets/Pasta/tomato-pasta.jpg'
const pasta = [
  {
    id: 13,
    img: p1,
    name: 'Health Pasta',
    price: 89,
  },
  {
    id: 14,
    img: p2,
    name: 'Red Pasta',
    price: 99,
  },
  {
    id: 15,
    img: p3,
    name: 'White Pasta',
    price: 120,
  },
  {
    id: 16,
    img: p4,
    name: 'Tomato pasta',
    price: 99,
  }
]

export default function Pasta() {
  return (
    <div className='flex  justify-evenly items-center' >
      {pasta.map((itm, ind) => (
        <div key={ind} className='w-[200px] h-[100px]  m-4 '>
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
