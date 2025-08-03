import React, { useContext, useState } from 'react'
import {Fassets} from "../assets/frontend_assets/assets"
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
function Navbar() {
  const [visible,setVisible] = useState(false)
  const {showSearch,setShowSearch} = useContext(ShopContext)
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to={"/"}><img src={Fassets.logo} alt="" className='w-36' /></Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className='uppercase'>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden NavHr'/>
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p className='uppercase'>collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden NavHr'/>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className='uppercase'>about</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden NavHr'/>
        </NavLink>
        <NavLink to="/Contact" className="flex flex-col items-center gap-1">
          <p className='uppercase'>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden NavHr'/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
          <img onClick={()=>setShowSearch(!showSearch)} src={Fassets.search_icon} alt="" className='w-5 cursor-pointer' />
          <div className='group relative'>
            <img src={Fassets.profile_icon} alt="" className='w-5 cursor-pointer'/>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-400'> 
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          </div>
          <Link to="/cart" className='relative '>
          <img src={Fassets.cart_icon} alt="" className='w-5 min-w-5'/>
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
          </Link>
          <img onClick={()=>setVisible(true)} src={Fassets.menu_icon} alt="" className='w-5 cursor-pointer sm:hidden'/>
      </div>
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?"w-full":"w-0"}`}>
        <div  className='flex flex-col text-gray-600'>
          <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img src={Fassets.dropdown_icon} alt="" className='h-4 rotate-180'/>
            <p>Back</p>
          </div>
            <NavLink onClick={()=>setVisible(false)} to="/" className="p-2 pl-6 border" >HOME</NavLink>
            <NavLink onClick={()=>setVisible(false)} to="/collection" className="p-2 pl-6 border" >COLLECTION</NavLink>
            <NavLink onClick={()=>setVisible(false)} to="/about" className="p-2 pl-6 border" >ABOUT</NavLink>
            <NavLink onClick={()=>setVisible(false)} to="/Contact" className="p-2 pl-6 border" >CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
