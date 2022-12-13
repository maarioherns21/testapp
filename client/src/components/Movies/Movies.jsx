import { useEffect } from "react"
import { useState } from "react"
import Pagination from "../Pagination/Pagination"
import SearchBar from "../SearchBar/SearchBar"
import useFetch from "../useFetch/useFetch"
import Movie from "./Movie/Movie"
import "./Styles.css"




const Movies = () => {
const { movies, isLoading, error} =useFetch()
const [currentPage, setCurrentPage] =useState(1)
const [moviesPerPage, setMoviesPerPage] = useState(3);

const lastMovieIndex = currentPage * moviesPerPage;
const firstMovieIndex = lastMovieIndex - moviesPerPage;
const currentMovies = movies.slice(firstMovieIndex, lastMovieIndex);



return (
  <div className="home">
    <div>{error ? error : null}</div>
    <div>{isLoading ? "Loading..." : ""}</div>
    <SearchBar movies={movies} />
    <Movie  movies={currentMovies} title="All Movies" />
    <Pagination totalMovies={movies.length} moviesPerPage={moviesPerPage} setCurrentPage={setCurrentPage} />
  </div>
);
}

export default Movies