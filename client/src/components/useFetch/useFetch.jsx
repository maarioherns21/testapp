import Harry from "../assests/HarryPotter.jpg"
import Thor from "../assests/Thor.jpg"
import Ghost from "../assests/ghostbuster.png"
import { useEffect } from "react";
import { useState } from "react";

export default function useFetch() {
  // const movies = [
  //     {name: "beatle Juice",  body: "sell" , creator: "mario" , images: "",  _id:1 },
  //     {name: "Michale jacson",  body: "amazing " , creator: "marc" , images: "",  _id:2 },
  //     {name: "Thor Juice",  body: "Amzing movie" , creator: "mario" , images: "",  _id:3 },
  //     {name: "Avengarers",  body: "super nice movie" , creator: "marc" , images: "",  _id:14},
  // ]





  const [movies, setMovies] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
        setError(null);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);


  
  return {
    movies,
    isLoading,
    error,
  };
}

