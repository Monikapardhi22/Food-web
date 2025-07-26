import React from "react";
import { Link } from "react-router";

export default function Navbar() {
    

    function toggleSearch() {
      const input = document.getElementById("searchInput");
      input.classList.toggle("hidden"); // show/hide
    }
    
  return (
    <div className="m-7 flex justify-between items-center text-md">
      <div className="flex items-center">
        <div
          className="text-4xl text-red-500 
         font-bold mr-5"
        >
          FoodBlog
        </div>

        <div
          className="text-md  font-semibold
         ml-4 items-center flex"
        >
          <Link to='/' className="mr-4" >Home</Link>
          
          <Link to="/menu" className="mr-4">
            Menu
          </Link>
          <Link to="/mobile" className="mr-4">
            Mobile-app
          </Link>
          <Link to="/contact" className="mr-4">
            Contact-Details
          </Link>
        </div>
      </div>
      <div className="flex items-center text-base">
        <div
         className=" items-center relative group hidden sm:block  rounded-full"
        >
          <input type="text"  id="searchInput" placeholder="Search" className="hidden  border border-gray-300  rounded"/>
          <button onClick={toggleSearch} className="  px-4  "  ><i class="fa-solid fa-magnifying-glass "></i></button>
        </div>

        <div className="mr-4 ml-4 text-xl cursor-pointer "
        >
          <i class="fa-solid fa-bag-shopping"></i>
        </div>
        <div className=" font-bold border-2 mr-5
         bg-red-400 rounded-md p-1 text-center hover:bg-gray-100 duration-200">
            <Link to='/login'><button >Login</button></Link>
        </div>
      </div>
    </div>
  );
}
