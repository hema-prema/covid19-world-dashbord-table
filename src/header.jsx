import React from "react";
import "./styles.css";
// side bar for dahboard
function Header() {
  return (
    <div className="sidebar">
      <div className="logo_img">
        <img src="../image1.jpg" alt="Logo" />
      </div>
      <ul>
        <h3>Login</h3>
        <h3>Contact</h3>
        <h3>About</h3>
        <h3>Dashboard</h3>
        <h3>Services</h3>
      </ul>
    </div>
  );
}
// export to index.js
export default Header;
