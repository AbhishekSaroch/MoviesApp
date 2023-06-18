import React from 'react'
import { useSelector } from 'react-redux'
import LikeItem from '../components/LikeItem';

const Like = () => {
  const {likedmovies}=useSelector((state)=>state);

  return (
    <div className='w-11/12 mx-auto'>
      {
        likedmovies.length>0 ?(<div className='grid lg:grid-cols-5  gap-x-4 gap-y-4'>
          {
            likedmovies.map((movie,index)=>(
              <LikeItem movie={movie} key={index}/>
            ))
          }
        </div>) : (<div>
          Oops You didnt like any Movie ... Please like the movie
        </div>)
      }
    </div>
  )
}

export default Like