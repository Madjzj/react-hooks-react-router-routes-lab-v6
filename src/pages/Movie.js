import { useEffect, useState } from "react";
import NavBar from "../components/NavBar.js";
import { useParams } from "react-router-dom";
function Movie() {
  const params = useParams();
  const [movie,setMovie] = useState({})
  useEffect(()=>{
    fetch(`http://localhost:4000/movies/${params.id}`)
    .then((r)=>r.json())
    .then(data => setMovie(data))
  },[])
  if(!movie.title){
    return <h1>Loading...</h1>
  }
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres.map((genre,index)=><span key={index}>{genre}</span>)}
      </main>
    </>
  );
};

export default Movie;
