import { useEffect, useState } from "react"
import "./LoginForm.css"
import PropTypes from 'prop-types'

const LoginForm = ({setToken}) => {
const [formData, setFormData] =useState({ username: "" , password:""})
const [error, setError] =useState([])
const [log, setLog] =useState([])

const handleSubmit = async (e) => {
  e.preventDefault();
  const token = { username: formData.username, password: formData.password };
  await fetch("http://localhost:4000/users/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(token),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setToken(data);
      setError(null)
    })
    .catch((error) => {
      console.log(error.message);
      setError(error.message)
    });
};

const handleLog = async (e) => {
    e.preventDefault();
    const token = { username: formData.username, password: formData.password };
    await fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => {
        for (let tok in data) {
          if (
            token.username.toLowerCase() === data[tok].username.toLowerCase() &&
            token.password.toLowerCase() === data[tok].password.toLowerCase()
          ) {
            setToken(token);
            setLog(true);
          } else {
            console.log("the passowrd wasnt correct");
            setLog(false);
          }
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


    return (
      <div className="form">
        <div>{error ? error :  null}</div> 
    {!log ?  (
        <>
         <form onSubmit={handleSubmit}>
           <h1>Sign up</h1>
          <input value={formData.username}  onChange={(e) => setFormData({...formData, username: e.target.value})}/>
          <input  value={formData.password}  onChange={(e) => setFormData({...formData, password: e.target.value})} />
          <button>Submit</button>
        </form>
        </>
    ):
    (
        <>
            <form onSubmit={handleLog}>
           <h1>Log in</h1>
          <input value={formData.username}  onChange={(e) => setFormData({...formData, username: e.target.value})}/>
          <input  value={formData.password}  onChange={(e) => setFormData({...formData, password: e.target.value})} />
          <button>Submit</button>
        </form>
        </>
    )}
      </div>
    );
}


LoginForm.propTypes = {
    setToken : PropTypes.func.isRequired
}






// const [formData, setFormData] =useState({ username: "" , password:""})
// const [error, setError] =useState([])
// const [log, setLog] =useState([])

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const token = { username: formData.username, password: formData.password };
//   await fetch("http://localhost:4000/user/new", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(token),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       setToken(data);
//       setError(null)
//     })
//     .catch((error) => {
//       console.log(error.message);
//       setError(error.message)
//     });
// };

// const handleLog = async (e) => {
//     e.preventDefault();
//     const token = { username: formData.username, password: formData.password };
//     await fetch("http://localhost:4000/user")
//       .then((res) => res.json())
//       .then((data) => {
//         for (let tok in data) {
//           if (
//             token.username.toLowerCase() === data[tok].username.toLowerCase() &&
//             token.password.toLowerCase() === data[tok].password.toLowerCase()
//           ) {
//             setToken(token);
//             setLog(true);
//           } else {
//             console.log("the passowrd wasnt correct");
//             setLog(false);
//           }
//         }
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };


//     return (
//       <div className="form">
//         <div>{error ? error :  null}</div> 
//     {!log ?  (
//         <>
//          <form onSubmit={handleSubmit}>
//            <h1>Sign up</h1>
//           <input value={formData.username}  onChange={(e) => setFormData({...formData, username: e.target.value})}/>
//           <input  value={formData.password}  onChange={(e) => setFormData({...formData, password: e.target.value})} />
//           <button>Submit</button>
//         </form>
//         </>
//     ):
//     (
//         <>
//             <form onSubmit={handleLog}>
//            <h1>Log in</h1>
//           <input value={formData.username}  onChange={(e) => setFormData({...formData, username: e.target.value})}/>
//           <input  value={formData.password}  onChange={(e) => setFormData({...formData, password: e.target.value})} />
//           <button>Submit</button>
//         </form>
//         </>
//     )}
//       </div>
//     );
// }


// LoginForm.propTypes = {
//     setToken : PropTypes.func.isRequired
// }



export default LoginForm