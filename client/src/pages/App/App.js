import Movies from "../../components/Movies/Movies"
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom"
import Home from "../Home/Home"
import MovieDetails from "../../components/Movies/MovieDetails/MovieDetails"
import NavBar from "../../components/NavBar/NavBar"
import MyMovies from "../../components/MyMovies/MyMovies"
import Form from '../../components/Form/Form'
import LoginForm from "../../components/LoginForm/LoginForm"
import useToken from "../../components/useToken/useToken"
import { useState } from "react"
import SignUpPage from "../SignupPage/SignupPage"
import LoginPage from "../LoginPage/LoginPage"






const App = () => {
// const {token , setToken} =useToken()
const {token ,setToken, logout} =useToken()


if(token) {  
    return (
          <BrowserRouter>
            <NavBar logout={logout} />
       <Routes>
            <Route exact path="/*" element={<Home />} />
            <Route exact path="/movie/:id" element={<MovieDetails />}/>
            <Route exact path="/user/:username"   element={<MyMovies logout={logout}/>}/>
            <Route exact path="/form" element={<Form />}/>
       </Routes>
        </BrowserRouter>
    )
     };

    return (
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={<LoginPage setToken={setToken} />} />
      <Route  path="/signup"  element={<SignUpPage setToken={setToken} />}  />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
      </BrowserRouter>
    )
}

export default App