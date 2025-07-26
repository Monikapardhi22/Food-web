import React from 'react'

export default function Footer() {
    return (
        <div className=' bg-gray-900 mt-8 text-white 
        flex flex-row justify-evenly items-start
        p-4'>
            <div className='ml-6 mr-6 mt-2'>
                <div className="text-4xl text-red-500 
         font-bold mr-5">
                    FoodBlog
                </div>
                <div className='mt-4'>
                   Eat Fresh. Eat Healthy. Eat Happy
                   <br/>
                  
                   <br/>
                   This is website made for you only.
                   <br/>
                   <br/>
                   Plz ! Try it Friends .
                   <br/>
                   Thank you Coming.
                   
                    
                </div>
                </div>
                <div>
                <div>
                   <h1 className=' m-3 font-bold text-xl text-gray-300'>
                    COMPANY
                   </h1>

                   <ul className='m-3' >
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery </li>
                    <li> Privacy</li>
                   </ul>
                    
                    </div>
                    </div>
                    <div>

                        <h1 className='m-3 font-bold text-xl text-gray-300'>CONTACT</h1>
                        <ul style={{listStyle:'none'}} className='m-3'>
                            <li>
                            +91 9876124490
                        </li>
                        <li>
                            <a href='#'>contact@foodblog.com</a>
                        </li>
                        </ul>
                    

                    <div className='m-3 text-xs'>
                        Copyright2024  FoodBlog.com- All Right Reserved
                    </div>
                    </div>

                
            
        </div>
    )
}
