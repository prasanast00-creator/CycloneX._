import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Wind,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Activity,
  Satellite,
} from "lucide-react";
import "../styles/auth.css";

function Auth() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const cleanEmail = email.trim().toLowerCase();

    if (mode === "signup") {
      if (!name.trim()) {
        setError("Please enter your name.");
        return;
      }

      if (!cleanEmail) {
        setError("Please enter your email.");
        return;
      }

      if (password.length < 6) {
        setError("Password must contain at least 6 characters.");
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      const account = {
        name: name.trim(),
        email: cleanEmail,
        password,
      };

      localStorage.setItem("cyclonexAccount", JSON.stringify(account));
      localStorage.setItem(
        "cyclonexSession",
        JSON.stringify({
          name: account.name,
          email: account.email,
        })
      );

      navigate("/dashboard");
      return;
    }

    const savedAccount = localStorage.getItem("cyclonexAccount");

    if (!savedAccount) {
      setError("No account found. Please create an account first.");
      return;
    }

    const account = JSON.parse(savedAccount);

    if (
      account.email.toLowerCase() !== cleanEmail ||
      account.password !== password
    ) {
      setError("Incorrect email or password.");
      return;
    }

    localStorage.setItem(
      "cyclonexSession",
      JSON.stringify({
        name: account.name,
        email: account.email,
      })
    );

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <Link to="/" className="auth-logo">
          <div className="logo-icon">
            <Wind size={21} />
          </div>
          <span>Cyclone<span>X</span></span>
        </Link>

        <Link to="/" className="back-home">
          <ArrowLeft size={15} />
          Back to Home
        </Link>

        <div className="auth-visual">
          <div className="mini-radar">
            <div className="mini-ring ring-a"></div>
            <div className="mini-ring ring-b"></div>
            <div className="mini-ring ring-c"></div>
            <div className="mini-cross horizontal"></div>
            <div className="mini-cross vertical"></div>
            <div className="mini-sweep"></div>
            <div className="mini-core">
              <Wind size={22} />
            </div>
          </div>

          <div className="auth-visual-text">
            <span>CYCLONEX INTELLIGENCE</span>
            <h2>Know the cyclone.<br />Before it reaches you.</h2>
            <p>
              Monitor cyclone formation, intensity and predicted impact through
              one intelligent platform.
            </p>
          </div>
        </div>

        <div className="auth-features">
          <div>
            <Satellite size={17} />
            Live Monitoring
          </div>
          <div>
            <Activity size={17} />
            Risk Analysis
          </div>
          <div>
            <ShieldCheck size={17} />
            Impact Prediction
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <div className="auth-mobile-logo">
            <div className="logo-icon">
              <Wind size={20} />
            </div>
            CycloneX
          </div>

          <div className="auth-heading">
            <span>CYCLONE INTELLIGENCE PLATFORM</span>
            <h1>{mode === "login" ? "Welcome back." : "Create your account."}</h1>
            <p>
              {mode === "login"
                ? "Sign in to access your cyclone monitoring dashboard."
                : "Create an account to start monitoring cyclone intelligence."}
            </p>
          </div>

          <div className="auth-toggle">
            <button
              className={mode === "login" ? "active" : ""}
              onClick={() => {
                setMode("login");
                setError("");
              }}
              type="button"
            >
              Login
            </button>

            <button
              className={mode === "signup" ? "active" : ""}
              onClick={() => {
                setMode("signup");
                setError("");
              }}
              type="button"
            >
              Create Account
            </button>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {mode === "signup" && (
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {mode === "signup" && (
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            )}

            {error && <div className="auth-error">{error}</div>}

            <button type="submit" className="auth-submit">
              {mode === "login" ? "Access Dashboard" : "Create Account"}
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="auth-footer-note">
            By continuing, you agree to use CycloneX responsibly for cyclone
            awareness and preparedness.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Auth;
