import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../useFetch/useFetch'
import MovieItem from './MovieItem/MovieItem';
import '../Styles.css'

const MovieDetails = () => {
  const params = useParams();
  const { movies, isLoading, error } = useFetch();
  const movie = movies.find((movie) => movie._id == params.id);
  const navigate = useNavigate();


  
  const handleDelete = async () => {
    await fetch(`http://localhost:4000/movies/${params.id}`, {
      method: "DELETE",
    }).then(() => {
      console.log(` ${movie.name} was deleted from DB`);
      navigate("/");
    });
  };




  return (
    <div className="home">
      <div>{error ? error : null}</div>
      <div>{isLoading ? "Loading..." : ""}</div>
      {movie && <MovieItem movie={movie} handleDelete={handleDelete} />}
    </div>
  );
};

export default MovieDetails