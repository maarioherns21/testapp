import { useState } from "react";
import FileBase64 from "react-file-base64";
import PropTypes from 'prop-types'
import "./LoginPage.css"
import { Link } from "react-router-dom";

const LoginPage = ({ setToken }) => {
  const [error, setError] = useState([]);
  const [signForm, setSignForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = { email: signForm.email, password: signForm.password };
    await fetch("http://localhost:4000/user/login", {
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
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <input value={signForm.email} onChange={(e) =>  setSignForm({...signForm, email: e.target.value})}  placeholder="email"  />
        <input value={signForm.password} onChange={(e) =>  setSignForm({...signForm, password: e.target.value})}  placeholder="password"   />
        <button>Log in</button>
      </form>
      <div>
        <Link to="/signup">Sign up ?</Link>
      </div>
    </div>
  );
};

// LoginPage.propTypes = {
//   setToken: PropTypes.func.isRequired
// }

export default LoginPage