import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const {likedmovies} =useSelector((state)=>state);


  return (
    <div className=' flex items-center justify-around w-screen h-[70px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]  '>

      <NavLink to="/">
      <h1 className='text-black md:text-3xl font-semibold'>MomiFlix</h1>
      </NavLink>

      <div>
      <NavLink to="/like">
      <h1 className='text-black mr-4 relative top-1 font-semibold'>Liked Movies<span className='absolute  top-[-15px] left-[50%] font-semibold animate-bounce bg-white text-black rounded-lg px-2 '>{likedmovies.length>0 ?(<div>{likedmovies.length}</div>):(<div></div>)}</span></h1>
      </NavLink>
      </div>
    </div>

  )
}

export default Header