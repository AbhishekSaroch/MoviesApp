import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Item from '../components/Item';
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const Movies = () => {

const[movies,setmovies]=useState([]);
const[loading,setLoading]=useState(false);
const [query,setquery]=useState("");

    function changesearch(event){
      setquery(event.target.value)
      
    }

async function fetchallmovies(){
  
    setLoading(true);
  try {
    const res=await fetch(APIURL);
    const data=await res.json();
    console.log(data);
    setmovies(data.results);
  } catch (error) {
    console.log("There Is Some Network Call Error")
  }
  setLoading(false);
}

const fetchsearchmovies = () => {
   console.log(SEARCHAPI + query)
   
  axios.get(
    SEARCHAPI + query
  )
    .then(
      (response) => {
        console.log(response.data.results);
        setmovies(response.data.results);
      }
    )
    .catch(
      (error) => { 
        console.log(error);
      }
    )
}
useEffect(()=>{
  setmovies([])
  if(query===""){
    fetchallmovies();
  }
  else{
    fetchsearchmovies();
  }
},[query])

  return (
    <div className='gap-y-[10px]'>
      <div className=' w-full gap-y-10' >
      <input type='search' className='w-[300px] text-center flex justify-center items-center mx-auto border-4 border-b rounded-sm' onChange={changesearch} placeholder='Search Your Movie Here' />
      </div> 
        <div className=' lg:max-w-screen  lg:w-[1000px] mx-auto flex flex-col justify-center items-center'>
      {
        loading ? (<div>We Are Fetching Your Data</div>) : 
        movies.length>0?(<div className=' grid justify-center items-center lg:grid-cols-6 md:grid-cols-2 xs:grid-cols-1 gap-x-5 '>
          {
            movies.map((movie,index)=>(
              <Item key={index} movie={movie} />
            ))
          }
        </div>):(<div>No Data Found</div>)
      }
    </div>
    </div>
    
  )
}

export default Movies