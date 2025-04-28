import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul class="nav my-2">
      <li class="nav-item">
        <Link className="ms-3 me-4 text-decoration-none" to="/">
          Main
        </Link>
      </li>
      <li class="nav-item">
        <Link className="me-4 text-decoration-none" to="/login">
          Login
        </Link>
      </li>
      <li class="nav-item">
        <Link className="text-decoration-none" to="/users">
          Users
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
