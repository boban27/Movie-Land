import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";


const API_URL = 'http://www.omdbapi.com?apikey=bfad80f6';


const App = ()=>{
    const [movies,setMovies] = useState({})
    const [searchTerms,setSearchTerm] = useState('');

    const searchMovie = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json()

        setMovies(data.Search);

    }

    useEffect(()=>{
        searchMovie('Spiderman')

    },[])

    return(
    <div className="app">
        <h1>MovieLand</h1>
        
        <div className="search">
        <input placeholder="Search for Movie"
        value={searchTerms}
        onChange={(e)=>setSearchTerm(e.target.value
    )}/>
        <img src={SearchIcon}
        alt="search"
        onClick={()=>searchMovie(searchTerms)}
        />
        </div>
         {
            movies?.length > 0 
            ? (<div className="container">
                {movies.map((movie)=>(
                    <MovieCard movie = {movie} />
                )

                )}
         </div>
            ):(
                <div className="empty">

                    <h2>No movies found.....</h2>

                </div>
            )
 
         }


        

    </div>
    )

};

export default App;