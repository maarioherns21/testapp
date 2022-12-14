// import { Link, useNavigate, useParams } from "react-router-dom";
import Movie from "../Movies/Movie/Movie";
import useFetch from "../useFetch/useFetch";
import React from 'react';





const MyMovies = ({logout}) => {
  const user  = JSON.parse(localStorage.getItem("token"))
  const {movies, isLoading, error} =useFetch()
  const movie  = movies.filter((movie) => movie.creator === user?.result._id )

  const handleDelete = async () => {
    try {
      if (window.confirm("Are you Sure you wish to Continue?")) {
        await fetch(`http://0.0.0.0:4000/movies/${user?.result._id}`, {
        method: "DELETE",
      }).then(() => {
       logout()
      });
      } else {
       alert("You press cancel!")
      }
    } catch (error) {
      console.log(error.message);
    }
  };


return (
  <div>
    <div>{error ? error : null}</div>
    <div>{isLoading ? "Loading..." : ""}</div>
    <Movie movies={movie} title="All Movies" />
    <button onClick={handleDelete}>deelte</button>
  </div>
);
    
}

  //  <Link to="*/" onClick={logout}>Log out</Link>

export default MyMovies