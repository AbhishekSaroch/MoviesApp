import React from 'react'
import {AiFillLike,AiFillDislike} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import {add,remove} from "../redux/slices/movieSlice"
const Item = ({movie}) => {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  const {likedmovies} =useSelector((state)=>state)
   
  const dispatch=useDispatch();
  const addtolike=()=>{
    dispatch(add(movie));
  }
  const removefromlike=()=>{
    dispatch(remove(movie.id));
  }
    
  return (
    <div className=' flex flex-col justify-center items-center mx-auto'>
        <div>
            <img src={IMGPATH+movie.poster_path} className='h-[50] rounded-lg'></img>
            <div className='flex items-center justify-center'>
            <h1 className='text-black '>{movie.title.split("",15)}<span className='text-black'>...</span></h1>
        </div>
        </div>
        <div className=' w-full flex items-center justify-between '>
           
            <p className='text-black font-bold'>{movie.vote_average }</p>
            <p className='text-black font-bold'>{movie.release_date}</p>
            {
              likedmovies.some((p)=>p.id==movie.id) ? (<div><button onClick={removefromlike}><AiFillDislike className='text-black'/></button></div>) : (<div><button onClick={addtolike}><AiFillLike className='text-black'/></button></div>)
            }
        </div>
    </div>
  )
}

export default Item 