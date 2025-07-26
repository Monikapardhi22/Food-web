import React from 'react'
import { Link } from 'react-router'


export default function Explore() {
  return (
    <div className='flex flex-col gap-3 m-10'>

      <h1 className='font-bold text-xl'>Explore our menu</h1>
      <p className=''>Choose from a diverse menu Featuring a delectable array of dishes.
        Our mission is to satisfy your carving and elevate your dining Experience.
      </p>



      <div className='font-bold flex justify-evenly m-7 items-center
      '>
        <Link to='/cake'>
          <button className='border-2 p-2 rounded-full
                hover:bg-gray-500
                border-solid border-black
                transition-transform duration-300 
                    delay-200 ease-in-out hover:scale-150'>
            Cake
          </button></Link>
        <Link to='/desert'>
          <button className='border-2
                p-2 rounded-full
                hover:bg-gray-500
                 border-solid border-black
                 transition-transform duration-300 
                    delay-200 ease-in-out hover:scale-150'>
            Deserts
          </button></Link>
        <Link to='/noodle'>
          <button className='border-2 border-solid
                p-2 rounded-full
                hover:bg-gray-500
                 border-black
                 transition-transform duration-300 
                    delay-200 ease-in-out hover:scale-150'>
            Noodles
          </button></Link>
        <Link to='/pasta'>
          <button className='border-2 border-solid
                p-2 rounded-full
                hover:bg-gray-500
                 border-black
                 transition-transform duration-300 
                    delay-200 ease-in-out hover:scale-150'>
            Pasta
          </button></Link>
        <Link to='/rolls'>
          <button className='border-2 border-solid
                p-2 rounded-full
                hover:bg-gray-500
                 border-black
                 transition-transform duration-300 
                    delay-200 ease-in-out hover:scale-150'>
            Rolls
          </button></Link>
       
        <Link to='/Veg'>
          <button className='border-2 border-solid
                p-2 rounded-full
                hover:bg-gray-500
                 border-black
                 transition-transform duration-300 
                    delay-200 ease-in-out hover:scale-150'>
            Veg
          </button></Link>
          <Link to='/salad'>
          <button className='border-2 border-solid
                p-2 rounded-full
                hover:bg-gray-500
                 border-black
                 transition-transform duration-300 
                    delay-200 ease-in-out hover:scale-150'>
                  Salad</button></Link>
      </div>
    </div>
  )
}
