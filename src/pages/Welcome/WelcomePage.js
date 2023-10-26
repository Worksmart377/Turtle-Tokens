import { useState } from "react";
import "./WelcomePage.css";
import { Link } from "react-router-dom";


export default function WelcomePage() {
  return (
    <div className="bg">
    <main>
      <div className="auth-page">
        
          <>
            <div className="left">
              <div className="toggle">
              <h3>Welcome to Turtle Tokens!</h3>
              <Link className="nav-links" to="/"><button className="btn enter">
                  Come take a swim!
                </button></Link>

                
              </div>
            </div>
          </>
      </div>
    </main>
    </div>
  );
}