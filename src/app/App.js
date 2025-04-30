import React from "react";
import Users from "./layouts/users";
import NavBar from "./components/navBar";
import { Route, Routes } from "react-router-dom";
import Login from "./layouts/login";
import Main from "./layouts/main";
import UserPage from "./components/userPage";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserPage />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
