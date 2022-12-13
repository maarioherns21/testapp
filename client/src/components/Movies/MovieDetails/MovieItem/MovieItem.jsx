import Popup from "reactjs-popup"
import EditForm from "../../../EditForm/EditForm"
import ReactPlayer from "react-player"



const MovieItem = ({ movie, handleDelete }) => {
  
  
  
  return (
    <div>
      <h1>{movie.name}</h1>
      <img src={movie.images} alt={movie.name} />
      <h2>{movie.body}</h2>
      <h3>{movie.creator}</h3>
      {movie.video && <ReactPlayer url={movie.video} />}
      <Popup trigger={<button>Update</button>}>
        <EditForm movie={movie} />
      </Popup>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default MovieItem;


// config={{  youtube: {playerVars : {showinfo: 1}}}} 