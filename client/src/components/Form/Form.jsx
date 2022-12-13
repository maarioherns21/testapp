import { useState } from "react"
import FileBase64 from "react-file-base64";
import { useNavigate } from "react-router-dom";
import "./Form.css"



const Form = () => {
const user = JSON.parse(localStorage.getItem('token'))

const [formData, setFormData] =useState({ name: "", body: "", creator: "", images: "", video: ""  })
const [isPending, setIsPending] = useState(false);
const navigate = useNavigate()


// console.log(user)

const handleSubmit = async (e) => {
  e.preventDefault();
  const movie = {
    name: formData.name,
    body: formData.body,
    creator: user?._id,
    images: formData.images,
    video: formData.video,
  };
  setIsPending(true);
await fetch("http://localhost:4000/movies/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  }).then(() => {
    console.log(`${movie.name} was added to db`);
    setIsPending(false);
    navigate("/");
  });
};

const clear = (e) => {
  e.preventDefault();
  setFormData({ name: "", body: "", creator: "mario", images: "", video: "" });
};


return (
  <div className="form">
    <form onSubmit={handleSubmit}>
      <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
      <textarea value={formData.body} onChange={(e) => setFormData({...formData, body: e.target.value})}  />
      {/* <select value={formData.creator} onChange={(e) => setFormData({...formData, creator: e.target.value})} >
        <option value="mario">mario</option>
        <option value="mark">mark</option>
      </select> */}
      <FileBase64 value={formData.images} type="file" multiple={false} onDone={({base64}) => setFormData({...formData , images: base64})} />
      <input value={formData.video} type="url" onChange={(e) => setFormData({...formData, video: e.target.value})}  />
      <button>{isPending ? "Adding.." : "Add Movie"}</button>
      <button onClick={clear}>clear</button>
    </form>
  </div>
);


}

export default Form