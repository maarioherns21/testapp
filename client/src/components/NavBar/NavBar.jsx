import {Link} from "react-router-dom"
import useToken from "../useToken/useToken"
import './Style.css'

const  NavBar = ({logout}) => {
 
const user  = JSON.parse(localStorage.getItem("token"))
 ///this is also the token^^^^^^^^^
 
    return (
      <div className="nav">
       <Link to="/" className='text'>Home</Link>
        <Link to="/form" className='text'>Form</Link>
        <Link to="*/" onClick={logout}>logout</Link>
        <Link to={`/user/${user?._id }`} >
        <img src={user.photoUrl}  alt={user.username} style={{ height: "50px",  borderRadius: "20px"}}/>
        </Link>
      </div>
    );
}

export default NavBar