import React from 'react'
import {Link} from 'react-router'
import roll1 from '../assets/Roll/Chicken Roll.webp'
import roll2 from '../assets/Roll/veg roll.jpg'
import roll3 from '../assets/Roll/springs rolls.jpg'
import roll4 from '../assets/Roll/rolls.png'
const rolls = [{
  id: 17,
  img: roll1,
  name: 'Chicken Roll',
  price: 120,
},
{
  id: 18,
  img: roll2,
  name: 'veg roll',
  price: 89,
},
{
  id: 19,
  img: roll3,
  name: 'Spring Roll',
  price: 99,
},
{
  id: 20,
  img: roll4,
  name: 'Roti roll',
  price: 89,
},
]

export default function Rolls() {
  return (
    <div className='flex  justify-evenly items-center' >
      {rolls.map((itm, ind) => (
        <div key={ind} className='w-[200px] h-[100px]  m-4 '>
          <div className=' h-[100px] w-[100px]  flex justify-center items-center
                    transition-transform duration-300 
                    delay-200 ease-in-out hover:scale-150' >
            <img src={itm.img} />
          </div>
          <div className='text-center mr-9 font-bold'>
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
