import React from 'react';
import "./navbar.css"

function Nav () {
  return(
    <>
    <nav>
     <h1>PITCHER</h1>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Contact</li>
        <li>About us</li>
      </ul>
      <button id="bttn1" className="button" type="submit">Login</button>
      <button id="bttn2" className="button" type="submit">Register</button>
      </nav>
    </>

  );
}

export default Nav;