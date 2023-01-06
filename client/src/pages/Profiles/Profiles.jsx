import { Link, useParams } from "react-router-dom"
import Movie from "../../components/Movies/Movie/Movie"
import useFetch from "../../components/useFetch/useFetch"


const Profiles = () =>{
const { movies, error, isLoading} =useFetch()
const {username }  = useParams()
const data = movies.filter((movie) => movie.creator ===  username )
console.log(data)


return (
  <div>
    <div>{error ? error : null}</div>
    <div>{isLoading ? "loading..." : ""}</div>
    {data && <Movie movies={data} title="all Movies" />}
  </div>
);
}

export default Profiles