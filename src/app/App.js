import React from "react";
import UsersListPage from "./components/page/usersListPage";
import NavBar from "./components/ui/navBar"
import { Route, Routes } from "react-router-dom";
import Login from "./layouts/login";
import Main from "./layouts/main";
import UserPage from "./components/page/userPage";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/login/:type?" element={<Login />} />
        <Route path="/users" element={<UsersListPage />} />
        <Route path="/users/:userId?" element={<UserPage />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
