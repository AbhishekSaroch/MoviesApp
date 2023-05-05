import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const {likedmovies} =useSelector((state)=>state);

  // const [query,setquery]=useState("");

  //   function changesearch(event){
  //     setquery(event.target.value)
  //     console.log(event.target.value)
  //   }
  return (
    <div className=' flex items-center justify-around w-screen h-[70px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]  '>
      <NavLink to="/">
      <h1 className='text-black md:text-2xl'>MomiFlix</h1>
      </NavLink>
      {/* <div>
      <input type='search' onChange={changesearch} className= ' border-white text-black lg:w-[400px] md:w-[300px] xs:[200px] p-1' placeholder='Search Your Movie Here' />
      </div> */}
      <div>
      <NavLink to="/like">
      <h1 className='text-black mr-4 relative top-1'>Liked Movies<span className='absolute  top-[0px] left-31 font-semibold animate-bounce bg-white text-black rounded-lg px-2 '>{likedmovies.length>0 ?(<div>{likedmovies.length}</div>):(<div></div>)}</span></h1>
      </NavLink>
      </div>
    </div>
  )
}

export default Header