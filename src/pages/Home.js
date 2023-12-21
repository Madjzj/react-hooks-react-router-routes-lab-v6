import { useEffect, useState } from "react";
import NavBar from "../components/NavBar.js";
import MovieCard from "../components/MovieCard.js";

function Home() {
  const [movieList, setMovieList] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/movies")
        .then((r)=>r.json())
        .then((data)=>setMovieList(data))
  },[])
  
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Home Page</h1>
        {movieList.map((movie)=>{return <MovieCard title={movie.title} key={movie.id} id={movie.id}/>}) }
      </main>
    </>
  );
};

export default Home;
