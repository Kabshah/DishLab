import React from 'react'
import { Link, useNavigate, } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate(); // Move useNavigate here

  const handleLogout = async () => {
    try {
      // Optionally call the backend route
      await fetch("/logout");
      localStorage.removeItem("authToken"); // Clear token (if applicable)
      navigate("/login"); // Redirect to login
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <>
      <div>
        <div className="nav bg-dark p-2">
          <div className="left"><h2>Recipe Maker</h2></div>
          <div className="right">
            <Link to={"/login"} className="btn btn-primary">Login</Link>
            <Link to={"/register"} className="btn btn-warning mx-3">Register</Link>
            <Link to={"/add"} className="btn btn-info mx-3">Add</Link>
            {/* <Link to={"/profile"} className="btn btn-warning mx-3">Profile</Link> */}
            {/* <Link to={"/saved"} className="btn btn-light mx-3">Saved</Link> */}
            <div className="btn btn-danger mx-3" onClick={handleLogout}>LogOut</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
