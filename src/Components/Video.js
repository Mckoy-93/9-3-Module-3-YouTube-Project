import React from "react";
import { Link } from "react-router-dom";


function Nav() {
  return (
    <div className="nav">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
      </nav>
    </div>
  );
}
export default Nav;
