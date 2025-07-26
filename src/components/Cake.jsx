import React from 'react'
import {Link} from 'react-router'
import cake1 from '../assets/cake/ckae4.png'
import cake2 from '../assets/cake/cochale-cake.jpg'
import cake3 from '../assets/cake/orange cake.jpg'
import cake4 from '../assets/cake/red cake.jpg'

const cake = [

    {
        id: 1,
        img: cake1,
        name: 'Chocolate',
         price:150,
    },
    {
        id: 2,
        img: cake2,
        name: 'Chocolate',
         price:150,
    },
    {
        id: 3,
        img: cake3,
        name: 'Orange cake',
         price:130,
    },
    {
        id: 4,
        img: cake4,
        name: 'strawberry cake',
         price:180,
    },

]

export default function Cake() {
    return (
        <div className='flex  justify-evenly items-center ' >
            {cake.map((itm, ind) => (
                <div key={ind} className='w-[200px] h-[100px]   m-5 '>
                    <div className=' h-[100px] w-[100px]  flex justify-center items-center transition-transform duration-300 
                    delay-200 ease-in-out hover:scale-150'>
                        <img src={itm.img}/>
                    </div>
                    <div className='text-center mr-5  font-bold'>
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
