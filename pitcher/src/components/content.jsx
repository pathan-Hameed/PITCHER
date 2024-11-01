import React from "react";
import "./content.css";

function Content() {
  return (
    <>
      <main>
        <section className="section1">
               <h1>PITCHER</h1>
          <h2>Where Ideas Take Shape</h2>
          <p>
            PITCHER is more than a platform. It’s a launchpad for students who
            dream big and want to bring their ideas to life.
          </p>
        </section>

        {/* this is the second section which is used to login or call to action */}
        <section className="section2">
          <h2>Welcome! to Pitcher</h2>
          <button id="bttn1" type="submit">
            Login
          </button>
          <button id="bttn2" type="submit">
            Register
          </button>
          <p>OR</p>
          <button id="bttn3" type="submit">
            open with Google
          </button>
        </section>
      </main>
    </>
  );
}

export default Content;
