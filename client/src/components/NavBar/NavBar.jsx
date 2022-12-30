import {Link} from "react-router-dom"
import './Style.css'
import React from 'react';


const  NavBar = ({logout}) => {
 
const user  = JSON.parse(localStorage.getItem("token"))
 ///this is also the token^^^^^^^^^
    return (
      <div className="nav">
       <Link to="/" className='text'>Home</Link>
        <Link to="/form" className='text'>Form</Link>
        <Link to="*/" onClick={logout}>logout</Link>
        <Link to={`/user/${user?.result._id}`} >
        <img src={user?.result.photoUrl}  alt={user?.result.username} style={{ height: "50px",  borderRadius: "20px"}}/>
        </Link>
      </div>
    );
}

export default NavBar