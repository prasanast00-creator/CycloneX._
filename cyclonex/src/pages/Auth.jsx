import { useState } from "react";
import { Wind, ArrowRight, ShieldCheck, Mail, Lock, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to dashboard upon form submission
    navigate("/dashboard");
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
                  <input type="text" placeholder="John Doe" required />
                </div>
              </div>
            )}

            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <Mail size={18} />
                <input type="email" placeholder="operator@cyclonex.io" required />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <Lock size={18} />
                <input type="password" placeholder="••••••••" required />
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