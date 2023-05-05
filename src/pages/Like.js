import React from 'react'
import { useSelector } from 'react-redux'
import LikeItem from '../components/LikeItem';

const Like = () => {
  const {likedmovies}=useSelector((state)=>state);
  return (
    <div className=''>
      {
        likedmovies.length>0 ?(<div className='flex flex-col gap-y-5 '>
          {
            likedmovies.map((movie,index)=>(
              <LikeItem movie={movie} key={index}/>
            ))
          }
        </div>) : (<div>
          Oops You didnt like any Movie
        </div>)
      }
    </div>
  )
}

export default Like