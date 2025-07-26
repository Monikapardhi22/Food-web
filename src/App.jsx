import React from 'react'
import Navbar from './components/Navbar'

import Home from './nav/Home'
import Menu from './nav/Menu'
import Mobile from './nav/Mobile'
import Login from './nav/Login'
import Contact from './nav/Contact'

import Hero from './components/Hero'
import Explore from './components/Explore'
import { Routes, Route } from 'react-router'
import Cake from './components/Cake'

import Veg from './components/Veg'
import Noedles from './components/Noedles'
import Rolls from './components/Rolls'
import Pasta from './components/Pasta'
import Salad from './components/Salad'
import Deserts from './components/Deserts'
import Footer from './components/Footer'
import  Order1 from './Order/Order1'

export default function App() {
  return (
    <div style={{ margin: '10px' }}>
      <Navbar />
      <Hero />
      <Explore />
      


      <div className='mb-36'>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cake' element={<Cake />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/Veg' element={<Veg />} />
        <Route path='/desert' element={<Deserts />} />
        <Route path='/noodle' element={<Noedles />} />
        <Route path='/rolls' element={<Rolls />} />
        <Route path='/pasta' element={<Pasta />} />
        <Route path='/salad' element={<Salad />} />
        <Route path='/login' element={<Login />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/mobile' element={<Mobile />} />
        <Route path='/order' element={<Order1/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}
