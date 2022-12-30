import React, { useState } from "react";
import FileBase64 from "react-file-base64";
// import PropTypes from 'prop-types'
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
    const token = { ...signForm };
    await fetch("http://0.0.0.0:4000/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(token),
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data);
        console.log(data)
        setError(null);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="form">
      <div style={{ color: "red"}}>{error ? error : null}</div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={signForm.username} onChange={(e) =>  setSignForm({...signForm, username: e.target.value})} placeholder="username" />
          <input type="email" value={signForm.email} onChange={(e) =>  setSignForm({...signForm, email: e.target.value})}  placeholder="email"  />
            <input type="password" value={signForm.password} onChange={(e) =>  setSignForm({...signForm, password: e.target.value})}  placeholder="password"   />
          <FileBase64 type="file" value={signForm.photoUrl} multiple={false} onDone={({base64}) =>  setSignForm({...signForm, photoUrl: base64})}   />
         <textarea type="text" value={signForm.bio} onChange={(e) =>  setSignForm({...signForm, bio: e.target.value})}  placeholder="bio"  />
         <button>Sign up</button>
      </form>
    </div>
  );
}

// SignUpPage.propTypes = {
//   setToken: PropTypes.func.isRequired
// }


export default SignUpPage;
