import React from 'react'
import {AiFillLike,AiFillDislike} from "react-icons/ai"
import {FcRating} from "react-icons/fc"
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
//   const [readmore,setreadmore]=useState(false);
//   const overview = readmore ? overview :`${overview.substring(0,200)}....`;
// const readmoreHandler=()=>{
//   setreadmore(!readmore)
// }
  return (
  
    <div className=' flex flex-col justify-center items-center gap-y-2 '>
        <div>
            <img src={IMGPATH+movie.poster_path} alt='movie-logo' className='rounded-lg'></img>
            <div className='flex items-center justify-center'>
        </div>
        </div>
       <div className='h-[60px]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full text-center rounded-lg py-1 px-1  overflow-hidden'>
       <h1 className='text-black text-xl font-semibold'>{movie.title.split(",",1)}</h1>
       </div>

       <div className='h-[150px] overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full text-center rounded-lg flex justify-center items-center px-2'>

       <h1 className='text-black text-sm '>{movie.overview.split(".",1)}.</h1>
       
       </div>

        <div className=' w-full flex items-center justify-between h-[35px] px-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg py-1'>
           
            <p className='text-black text-xl flex items-center gap-x-3'><FcRating />{movie.vote_average }</p>
            {/* <p className='text-black text-xl'>{movie.release_date}</p> */}
            {
              likedmovies.some((p)=>p.id===movie.id) ? (<div><button onClick={removefromlike}><AiFillDislike className='text-black text-2xl'/></button></div>) : (<div><button onClick={addtolike}><AiFillLike className='text-black text-2xl '/></button></div>)
            }
        </div>
    </div>
  )
}

export default Item 