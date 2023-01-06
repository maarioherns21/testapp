import React, { useState } from "react"
import FileBase64 from "react-file-base64";
import { useNavigate } from "react-router-dom";
import "./Form.css"



const Form = () => {
    const user = JSON.parse(localStorage.getItem("token"))
    const [data, setData] =useState({name: "", body: "", creator: user?.result._id , author:"",  images: "" , rating: 0 , video: "",  creatorImage: user?.result.photoUrl })
    const [error, setError] =useState([])
    const [isPending, setIsPending] =useState(false)
    const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const movie = { ...data };
        setIsPending(true);
        await fetch("http://localhost:4000/movies/new", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(movie),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
          });
        navigate("/");
        setError(null);
        setIsPending(false);
      } catch (error) {
        setError(error.message);
        setIsPending(false);
      }
    };
    
    const clear =(e) => {
    e.preventDefault()
     setData({name: "", body: "" , author:"",  images: "" , rating: 0 , video: ""})
    }
    
    
    return (
      <div className="form">
        <div>{error ? error : null}</div>
        <h1>Add Movie</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={data.name}  onChange={(e) => setData({...data, name: e.target.value})} />
          <textarea value={data.body}  onChange={(e) => setData({...data, body: e.target.value})} />
          {/* <select type="text" value={data.creator}  onChange={(e) => setData({...data, creator: e.target.value})}>
            <option value="mario">mario</option>
            <option value="mark">mark</option>
          </select> */}
          <input type="text" value={data.author} onChange={(e) => setData({...data, author: e.target.value})} />
          <input type="number" max={5} min={0} value={data.rating} onChange={(e) => setData({...data, rating: e.target.value})} />
          <FileBase64 type="file" value={data.images} multiple={false} onDone={({base64}) => setData({...data, images: base64})} />
          <input type="url" value={data.video} onChange={(e) => setData({...data, video: e.target.value})} />
          <button>{isPending ? "Submit..." : "Submit"}</button>
          <button onClick={clear}>clear</button>
        </form>
      </div>
    );
    
    }
    
    export default Form