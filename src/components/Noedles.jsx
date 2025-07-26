import React from 'react'
import {Link} from 'react-router'
import noodle1 from '../assets/Noodeles/Cheesemaggie1.jpg'
import noodle2 from '../assets/Noodeles/eggmaggie.jpg'
import noodle3 from '../assets/Noodeles/soupnoddles.jpg'
import noodle4 from '../assets/Noodeles/vegnoddles.png'

const noodle = [
  {
    id: 9,
    img: noodle1,
    name: 'CheeseMaggie',
    price: 60,
  },
  {
    id: 10,
    img: noodle2,
    name: 'Egg-maggie',
    price: 50,
  },
  {
    id: 11,
    img: noodle3,
    name: 'SoupMaggie',
    price: 40,
  },
  {
    id: 12,
    img: noodle4,
    name: 'Vegmaggie',
    price: 35,
  },
]

export default function Noedles() {
  return (
    <div className='flex  justify-evenly items-center' >
      {noodle.map((itm, ind) => (
        <div key={ind} className='w-[200px] h-[100px]  m-4 '>
          <div className=' h-[100px] w-[100px]  flex justify-center items-center
                    transition-transform duration-300 
                    delay-200 ease-in-out hover:scale-150'>
            <img src={itm.img} />
          </div>
          <div className='text-center mr-10  font-bold'>
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
