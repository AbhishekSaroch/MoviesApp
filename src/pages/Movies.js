import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "../components/Item";
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const Movies = () => {
  const [movies, setmovies] = useState([]);

  const [loading, setLoading] = useState(false);
  const [query, setquery] = useState("");
  const [page, setpage] = useState(1);
  const [totalpages, settotalpages] = useState(null);

  function changesearch(event) {
    setquery(event.target.value);
  }

  // network call to fetch all the movies data
  async function fetchallmovies(page = 1) {
    setLoading(true);
    let url = `${APIURL}page=${page}`;
    console.log(url);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setmovies(data.results);
      settotalpages(data.total_pages);
      console.log(data);
    } catch (error) {
      console.log("There Is Some Network Call Error");
    }
    setLoading(false);
  }

  const fetchsearchmovies = () => {
    console.log(SEARCHAPI + query);
    axios
      .get(SEARCHAPI + query)
      .then((response) => {
        console.log(response.data.results);
        setmovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setmovies([]);
    if (query === "") {
      fetchallmovies();
    } else{
      fetchsearchmovies(page);
    }
  },[query]);
  function handelpagechange(page) {
    setpage(page);
    fetchallmovies(page);
  }
  console.log("printing total pages");
  console.log(totalpages);
  console.log("printing current page");
  console.log(page);

  return (
    <div className="flex flex-col gap-y-5">
      <div>
        <div className="flex justify-center items-center mx-auto w-fit border border-black">
          <input
            onChange={changesearch}
            placeholder="Search Any Movie Here "
            className="text-sm text-center rounded-sm font-inter px-10 py-2"
          />
        </div>
      </div>

      <div className="w-11/12 mx-auto">
        {loading ? (
          <div>We Are Fetching Your Data</div>
        ) : movies.length > 0 ? (


          <div className="grid lg:grid-cols-5  gap-x-4 gap-y-4 ">
            {movies.map((movie, index) => (
              <Item key={index} movie={movie} />
            ))}
          </div>


        ) : (
          <div>No Data Found</div>
        )}
      </div>
      <div className=" shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[70px] flex items-center justify-center gap-x-14">

        <button onClick={() => handelpagechange(page - 1)}> 
          {page > 1 && <div className="text-xl border border-black px-5 py-1 rounded-sm  bg-slate-400">Previous</div>}
        </button>

        <button onClick={() => handelpagechange(page + 1)}>
          {page < totalpages && <div className="text-xl border border-black px-5 py-1 rounded-sm bg-slate-400">Next</div>}
        </button>

      </div>
    </div>
  );
};

export default Movies;
