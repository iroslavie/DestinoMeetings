import React from "react";
import NavBar from "./components/ui/navBar";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./layouts/login";
import Main from "./layouts/main";
import Users from "./layouts/users";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/users/:userId?/:edit?" element={<Users />} />
        <Route path="/login/:type?" element={<Login />} />
        <Route path="/" element={<Main />} />
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </>
  );
}

export default App;
