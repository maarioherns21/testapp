import { Link } from "react-router-dom";
import Movie from "../Movies/Movie/Movie";
import useFetch from "../useFetch/useFetch";






const MyMovies = ({logout}) => {
    const { movies, isLoading, error } = useFetch();
    const user = JSON.parse(localStorage.getItem("token"));
    const fetchMovies = movies.filter((movie) => movie.creator === user?._id);
   


    return (
      <div>
        <img src={user.photoUrl} alt={user.username} style={{ height: "50px", borderRadius: "20px" }} />
        <div>{user.username}</div>
        <div>{user.bio}</div>
        <div>{error ? error : null}</div>
        <div>{isLoading ? "Loading..." : ""}</div>
        <Movie movies={fetchMovies} title="All Movies" />
      </div>
    );
    
}

  //  <Link to="*/" onClick={logout}>Log out</Link>

export default MyMovies