import React from 'react'
import { useSelector } from 'react-redux'
import { AiFillDelete } from 'react-icons/ai';
const LikeItem = ({movie,index}) => {
    const {like} =useSelector((state)=>state);
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
   
  return (
    <div className='flex flex-col justify-center mx-auto items-center gap-4 border'>
      <div>
        <img className='h-[250px] w-[full] rounded-lg' src={IMGPATH+movie.poster_path}></img>
        </div>
        <div >
        <p className=' text-white'>{movie.title}</p>
        <div className='flex bg-white justify-between items-center'>
       <p className='text-black'>{movie.vote_average }</p>
       <p className='text-black'>{movie.release_date}</p>
       
       </div>
        </div>
    </div>
  );
};
  


export default LikeItem