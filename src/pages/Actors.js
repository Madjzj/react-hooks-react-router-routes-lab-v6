import { useEffect, useState } from "react";
import NavBar from "../components/NavBar.js";
function Actors() {
  const [actorList, setActorList] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/actors")
        .then((r)=>r.json())
        .then((data)=>setActorList(data))
  },[])
  
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorList.map((actor,index)=>{
          return <article key={index}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie,index2)=>{
                return <li key={index2}>{movie}</li>
              })}
            </ul>
          </article>
        })}
      </main>
    </>
  );
};

export default Actors;
