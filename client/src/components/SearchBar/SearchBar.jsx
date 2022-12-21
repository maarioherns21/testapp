import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "./SearchBar.css";

const SearchBar = ({ movies }) => {
  const [input, setInput] = useState([]);
  const [output, setOutput] = useState([]);
  const [error, setError] = useState([]);
  const [isPending, setIsPending] = useState(false);


const searchByname = async () => {
  try {
    await movies.filter((movie) => {
      if (movie.name.toLowerCase().includes(input.toLowerCase())) {
        setOutput((output) => [...output, movie]);
      }
    });
  } catch (error) {
    setError(error.message);
    setIsPending(false);
  }
};

const searchByCreator = async () => {
  try {
    await movies.filter((movie) => {
      if (movie.creator.toLowerCase().includes(input.toLowerCase())) {
        setOutput((output) => [...output, movie]);
      }
    });
  } catch (error) {
    setError(error.message);
    setIsPending(false);
  }
};

const searchById = async () => {
  try {
    await movies.filter((movie) => {
      if (movie._id.toLowerCase().includes(input.toLowerCase())) {
        setOutput((output) => [...output, movie]);
      }
    });
  } catch (error) {
    setError(error.message);
    setIsPending(false);
  }
};
  
  useEffect(() => {
    setOutput([]);
    searchById();
    searchByname();
    searchByCreator();
  }, [input]);



  return (
    <div> 
      <div>{error ? error : null}</div>
      <div>
        <div>Search</div>
        <input onChange={(e) => setInput(e.target.value)} />
      </div>
      <Popup className="form modal" trigger={<button>{isPending ? "Seaching.." : "Search"}</button>}>
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
