import { useEffect, useState } from "react";
import NavBar from "../components/NavBar.js";

function Directors() {
  const [directorList, setDirectorList] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/directors")
        .then((r)=>r.json())
        .then((data)=>setDirectorList(data))
  },[])
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorList.map((director,index)=>{
        return  (<article key={index}>
                  <h2>{director.name}</h2>
                  <ul>
                    {director.movies.map((movie,index2)=>{
                    return <li key={index2}>{movie}</li>
                    })}
                  </ul>
                  
                </article>)
      })}
      </main>
    </>
  );
};

export default Directors;
