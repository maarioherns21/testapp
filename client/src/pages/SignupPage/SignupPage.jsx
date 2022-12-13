import { useState } from "react";
import FileBase64 from "react-file-base64";
import PropTypes from 'prop-types'
import "./SignupPage.css"

const SignUpPage = ({setToken}) => {
  const [error, setError] = useState([]);
  const [signForm, setSignForm] = useState({
    username: "",
    email: "",
    password: "",
    bio: "",
    photoUrl: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = {
      username: signForm.username,
      email: signForm.email,
      password: signForm.password,
      photoUrl: signForm.photoUrl,
      bio: signForm.bio,
    };
    await fetch("http://localhost:4000/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(token),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToken(data);
        setError(null);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="form">
      <h1>{error ? error : null}</h1>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <input value={signForm.username} onChange={(e) =>  setSignForm({...signForm, username: e.target.value})} placeholder="username" />
          <input value={signForm.email} onChange={(e) =>  setSignForm({...signForm, email: e.target.value})}  placeholder="email"  />
            <input value={signForm.password} onChange={(e) =>  setSignForm({...signForm, password: e.target.value})}  placeholder="password"   />
          <FileBase64 type="file" value={signForm.photoUrl} multiple={false} onDone={({base64}) =>  setSignForm({...signForm, photoUrl: base64})}   />
         <textarea value={signForm.bio} onChange={(e) =>  setSignForm({...signForm, bio: e.target.value})}  placeholder="bio"  />
         <button>Sign up</button>
      </form>
    </div>
  );
}

// SignUpPage.propTypes = {
//   setToken: PropTypes.func.isRequired
// }


export default SignUpPage;
