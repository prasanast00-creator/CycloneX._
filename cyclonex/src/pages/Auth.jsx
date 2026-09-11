import { useState } from "react";
import { Wind, ArrowRight, ShieldCheck, Mail, Lock, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  const url = isSignUp
    ? "http://localhost:5000/api/auth/signup"
    : "http://localhost:5000/api/auth/login";

  const body = isSignUp
    ? {
        fullName,
        email,
        password,
      }
    : {
        email,
        password,
      };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
      return;
    }

    alert(data.message);

    console.log("Response:", data);

    navigate("/dashboard");
  } catch (error) {
    console.error("Request error:", error);

    alert("Unable to connect to server");
  }
};
  
  

  return (
    <div className="auth-page">
      <nav className="auth-nav">
        <Link to="/" className="nav-logo">
          <div className="logo-icon">
            <Wind size={22} />
          </div>
          <div>
            <span>Cyclone</span>
            <span className="logo-x">X</span>
          </div>
        </Link>
      </nav>

      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2>{isSignUp ? "Create Account" : "Access CycloneX"}</h2>
            <p>
              {isSignUp
                ? "Sign up to access real-time cyclone intelligence"
                : "Enter your credentials to monitor active systems"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {isSignUp && (
              <div className="form-group">
                <label>Full Name</label>
                <div className="input-wrapper">
                  <User size={18} />
                  <input type="text" placeholder="John Doe" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                </div>
              </div>
            )}

            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <Mail size={18} />
                <input type="email" placeholder="operator@cyclonex.io" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <Lock size={18} />
                <input type="password" placeholder="••••••••" value={password} onChange={(e)=> setPassword(e.target.value)} required />
              </div>
            </div>

            <button type="submit" className="auth-submit-btn">
              {isSignUp ? "Register Account" : "Sign In"}
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="auth-toggle">
            <span>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
            </span>
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="toggle-btn"
            >
              {isSignUp ? "Sign In" : "Create One"}
            </button>
          </div>

          <div className="auth-footer">
            <ShieldCheck size={16} />
            <span>Encrypted Operational Portal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;