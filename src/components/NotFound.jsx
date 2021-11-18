import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
    return <h2>NotFound <NavLink to='/'>back to home</NavLink></h2>;
  }
  export default NotFound;