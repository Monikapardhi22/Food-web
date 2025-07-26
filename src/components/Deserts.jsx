import React from 'react'
import {Link} from 'react-router'
import desert1 from '../assets/Deserts/deserts.png'
import des2 from '../assets/Deserts/fruit ice cream.avif'
import des3 from '../assets/Deserts/icecreams.jpg'
import des4 from '../assets/Deserts/jar ice cream.avif'
const desert=[{ id:5,
    img:desert1,
    name:'Chocolate',
     price:120,
  },
  { id:6,
    img:des2,
    name:'Fruit ice cream',
     price:120,
  },
  { id:7,
    img:des3,
    name:'combos icecream',
     price:190,
  },
  { id:8,
    img:des4,
    name:'Jar ice cream',
     price:180,
  },]
export default function Deserts() {
  return (
    <div className='flex  justify-evenly items-center' >
            {desert.map((itm, ind) => (
                <div key={ind} className='w-[200px] h-[100px]  m-4 '>
                    <div className='h-[100px] w-[100px]  flex justify-center items-center
                    transition-transform duration-300 
                    delay-200 ease-in-out hover:scale-150' >
                        <img src={itm.img}/>
                    </div>
                    <div className='text-center mr-11 font-bold'>
                        {itm.name}
                        </div>
                         <div className=''>
                          Price -   <i class="fa-solid fa-indian-rupee-sign"></i>
                          {itm.price} of one plate
                          </div>
                          <Link  to='/order'> 
                          <button className='border-2  border-solid 
                          border-black rounded-lg bg-gray-300
                          p-1 mt-2 text-center '>
                            Order Now
                          </button>
                          </Link>
                </div>

            ))}
        </div>
  )
}
