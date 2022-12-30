import React, { useState } from "react"
import FileBase64 from "react-file-base64";
import { useNavigate, useParams } from "react-router-dom";
import "./EditForm.css"


const EditForm  = ({movie}) =>{
    const [formData, setFormData] = useState({ ...movie });
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const movie = { ...formData };
      setIsPending(true);
      await fetch(`http://0.0.0.0:4000/movies/${params.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movie),
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsPending(false);
        navigate("/");
      });
    };
    
    const clear = (e) => {
      e.preventDefault();
      setFormData({ ...movie });
    };
    
    return (
      <>
      <div className="form">
        <form className="modal-content" onSubmit={handleSubmit}>
          <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
          <textarea value={formData.body} onChange={(e) => setFormData({...formData, body: e.target.value})}  />
          {/* <select value={formData.creator} onChange={(e) => setFormData({...formData, creator: e.target.value})} >
            <option value="mario">mario</option>
            <option value="mark">mark</option>
          </select> */}
          <FileBase64 value={formData.images} type="file" multiple={false} onDone={({base64}) => setFormData({...formData , images: base64})} />
          <input value={formData.video} type="url" onChange={(e) => setFormData({...formData, video: e.target.value})}  />
          <button>{isPending ? "Updating.." : "Update Movie"}</button>
          <button onClick={clear}>clear</button>
        </form>
      </div>
      </>
    );
  
  
  
    }


export default EditForm