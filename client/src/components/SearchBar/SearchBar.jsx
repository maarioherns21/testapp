import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "./SearchBar.css";

const SearchBar = ({ movies }) => {
  const [input, setInput] = useState([]);
  const [output, setOutput] = useState([]);


  
  useEffect(() => {
    setOutput([]);
    movies.filter((movie) => {
      if (movie.name.toLowerCase().includes(input.toLowerCase())) {
        setOutput((output) => [...output, movie]);
      }
    });
  }, [input]);



  return (
    <div>
      <div>
        <div>Search</div>
        <input onChange={(e) => setInput(e.target.value)} />
      </div>
      <Popup className="form modal" trigger={<button>Search</button>}>
        <div className="modal-content">
          {output
            .sort((a, b) =>
              a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
            )
            .map((movie) => (
              <div key={movie._id}>
                <img src={movie.images} alt={movie.name} />
                <Link to={`/movie/${movie._id}`}>
                  <h2>{movie.name}</h2>
                </Link>
              </div>
            ))}
        </div>
      </Popup>
    </div>
  );
};

export default SearchBar;
