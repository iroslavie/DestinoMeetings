import React from "react";
import Users from "./components/users";
import NavBar from "./components/navBar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Main from "./components/main";
import UserPage from './components/userPage'

function App() {
  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:userId' element={<UserPage />} />
        <Route path='/' element={<Main/>} />
      </Routes>
    </>
  );
}

export default App;
