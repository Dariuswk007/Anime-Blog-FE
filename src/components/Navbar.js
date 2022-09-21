import React from 'react'
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className= "navbar-container">
    <NavLink
    className="navbar-item"
    activeClassName="is-active"
    to="/"
    exact
>
	Home
    </NavLink>

    <NavLink
    className="navbar-item"
    activeClassName="is-active"
    to="/blog"
>
	Blogs
    </NavLink>


    </div>

  )};