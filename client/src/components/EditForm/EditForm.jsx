import { useState } from "react"
import FileBase64 from "react-file-base64";
import { useNavigate, useParams } from "react-router-dom";
import "./EditForm.css"



const EditForm  = ({movie}) =>{
    const [formData, setFormData] =useState({ name: movie.name,  body: movie.body,  creator: movie.creator, images: movie.images, video: movie.video })
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate()
    const params = useParams()
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const movie = {
        name: formData.name,
        body: formData.body,
        creator: formData.creator,
        images: formData.images,
        video: formData.video,
      };
      setIsPending(true);
      await fetch(`http://localhost:4000/movies/${params.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movie),
      }).then(() => {
        console.log(` ${movie.name} was updated in to the db`);
        setIsPending(false);
        navigate("/");
      });
    };
    
    const clear = (e) => {
      e.preventDefault();
      setFormData({ name: movie.name,  body: movie.body,  creator: movie.creator, images: movie.images, video: movie.video });
    };
    
    
    return (
      <div className="form">
        <form className="modal-content" onSubmit={handleSubmit}>
          <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
          <textarea value={formData.body} onChange={(e) => setFormData({...formData, body: e.target.value})}  />
          <select value={formData.creator} onChange={(e) => setFormData({...formData, creator: e.target.value})} >
            <option value="mario">mario</option>
            <option value="mark">mark</option>
          </select>
          <FileBase64 value={formData.images} type="file" multiple={false} onDone={({base64}) => setFormData({...formData , images: base64})} />
          <input value={formData.video} type="url" onChange={(e) => setFormData({...formData, video: e.target.value})}  />
          <button>{isPending ? "Updating.." : "Update Movie"}</button>
          <button onClick={clear}>clear</button>
        </form>
      </div>
    );
  
  
  
    }


export default EditForm