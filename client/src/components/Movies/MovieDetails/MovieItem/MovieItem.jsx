import Popup from "reactjs-popup"
import EditForm from "../../../EditForm/EditForm"
import ReactPlayer from "react-player"
import React from 'react';


const MovieItem = ({ movie, handleDelete, user }) => {
  console.log(user?.result._id, movie.creator);

  return (
    <div>
      <h1>{movie.name}</h1>
      <img src={movie.images} alt={movie.name} style={{ height: "420px" }} />
      <h2>{movie.creator}</h2>
      <h2>{movie.body}</h2>
      <h3>{movie.author}</h3>
      <h4>{movie.rating}</h4>
      {movie.video && <ReactPlayer url={movie.video} />}
      {user?.result._id === movie?.creator && (
        <div>
          <Popup trigger={<button>Update</button>}>
            <EditForm movie={movie} />
          </Popup>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default MovieItem;


// config={{  youtube: {playerVars : {showinfo: 1}}}} 