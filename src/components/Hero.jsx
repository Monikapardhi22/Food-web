import React from 'react'
import Slider from 'react-slick'
import plate from '../assets/Salad/salad.webp'
import plate1 from '../assets/Veg/veg2.png'
import plate2 from '../assets/Noodeles/noodles.webp'
import plate3 from '../assets/Pasta/pasta.webp'
import plate4 from '../assets/cake/cake.webp'
// import plate5 from '../assets/Pasta/pasta4.jpg'
// import plate6 from '../assets/Salad/green salad.jpg'
import plate7 from '../assets/Noodeles/vegnoddles.png'
// import plate8 from '../assets/Noodeles/noodles.webp'
import plate9 from '../assets/Roll/rolls.png'
import { Link } from 'react-router'
// import plate10 from '../assets/Hero/khao.png'

const HeroImg = [
  {
    id: 1,
    img: plate,
    title: 'Salad',
    description: "A refreshing mix of seasonal veggies."
  },
  {
    id: 2,
    img: plate1,
    title: 'Thali',
    description: "A refreshing mix of lot of sabji ."
  },
  {
    id: 3,
    img: plate2,
    title: 'Noodles',
    description: "A refreshing mix of seasonal veg-noodles."
  },
  {
    id: 4,
    img: plate3,
    title: 'Pasta',
    description: "A refreshing by Pasta ."
  },
  {
    id: 5,
    img: plate4,
    title: 'Cake',
    description: "Important Thing for special day."
  },
  {
    id: 8,
    img: plate7,
    title: 'Maggie',
    description: "Take only 2 minute ."
  },


  {
    id: 10,
    img: plate9,
    title: 'Roll',
    description: "Rolls have Packet of vegetables."
  }

]



export default function Hero() {
  const settings = {
    // dots: true,
    arrow: true,
    autoplay: true,
    slideToscroll: 1,
    slideToshow: 1,
    pauseOnHover: true,
    // centerMode: true,
    // centerPadding: "60px",
    swipe: true,
    inifite: true,
    speed: 800,
    draggable: true,
    autoplayspeed: 2000
  }




  return (
    <div>
      <Slider {...settings}>
        {HeroImg.map((item, index) => (
          <div key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className='flex flex-col justify-center
                    gap-4 sm:pl-3 pt-12 sm:pt-0  
                    sm:text-left order-2 sm:order-1 relative z-10
           
            '>
                <h1 className="text-4xl sm:text-9xl lg:text-5xl 
                      font-bold">
                  {item.title}
                </h1>
                <h3 className="text-xs sm:text-xl lg:text-4xl 
                      ">
                  {item.description}
                </h3>
                  
                <button className='border-2 border-solid
                    w-[100px] font-semibold bg-gray-200 
                    hover:bg-gray-50 border-black'>
                  View below</button>
                 
              </div>
              <div >
                <img src={item.img} alt='none' className=' w-full h-[220px] 
             sm:w-[400px]  sm:h-[410px] pt-4
                    sm:scale-105 lg:scale-120 
                    object-contain mx-auto 
                    drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] 
                    relative z-40 '/>
              </div>
            </div>
          </div>
        ))}

      </Slider>
      
    </div>

  )
}
