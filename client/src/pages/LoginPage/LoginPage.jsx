import React, { useState } from "react";
// import PropTypes from 'prop-types'
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
    const token = { ...signForm };
    await fetch("http://0.0.0.0:4000/user/login", {
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
      <div>{error ? error : null}</div>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" value={signForm.email} onChange={(e) =>  setSignForm({...signForm, email: e.target.value})}  placeholder="email"  />
        <input type="password" value={signForm.password} onChange={(e) =>  setSignForm({...signForm, password: e.target.value})}  placeholder="password"   />
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