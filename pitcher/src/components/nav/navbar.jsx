import React from 'react';
import "./navbar.css"

function Nav () {
  return(
    <>
    <nav>
     <h1>PITCHER</h1>
      <ul>
      <li><button id="bttn1" className="button" type="submit">Login</button></li>
      <li><button id="bttn2" className="button" type="submit">Register</button></li>
      </ul>
      </nav>
    </>

  );
}

export default Nav;