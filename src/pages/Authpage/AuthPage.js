import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [userStatus, setUserStatus] = useState(true);
  return (
    <div className="bg">
    <main>
      <div className="auth-page">
        {userStatus ? (
          <>
            <div className="left">
              <div className="toggle">
              <h3>Sign Up</h3>
                <button className="btn" onClick={() => setUserStatus(!userStatus)}>
                  Sign Up
                </button>
              </div>
            </div>
            <LoginForm setUser={setUser} />
          </>
        ) : (
          <>
            <div className="left">
              <div className="toggle">
              <h3>Already a User?</h3>
                <button className="btn" onClick={() => setUserStatus(!userStatus)}>
                  Log In
                </button>
              </div>
            </div>
            <SignUpForm setUser={setUser} />
          </>
        )}
      </div>
    </main>
    </div>
  );
}