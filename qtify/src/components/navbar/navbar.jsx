import React from "react";
import Logo from "../logo/logo.jsx";
import Search from "../search/search.jsx";
import Button from "../button/button.jsx";
import "./navbar.css";
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar-navbar">
      <Link to={"/"}>
        <Logo />
      </Link>
      <Search placeholder="Search a song of your choice" />
      <Button>Give Feedback</Button>
    </nav>
  );
}
