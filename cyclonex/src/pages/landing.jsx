import {
  Wind,
  ArrowRight,
  Satellite,
  ShieldAlert,
  Activity,
  Radio,
  Navigation,
  CloudLightning,
  Gauge,
  Waves,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/landing.css";

function Landing() {
  return (
    <div className="landing-page">
      {/* NAVBAR */}
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          <div className="logo-icon">
            <Wind size={22} />
          </div>
          <div>
            <span>Cyclone</span>
            <span className="logo-x">X</span>
          </div>
        </Link>

        <div className="nav-links">
          <a href="#overview">Overview</a>
          <a href="#intelligence">Intelligence</a>
          <a href="#warnings">Warnings</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-actions">
          <Link to="/auth" className="nav-login">
            Login
          </Link>
          <Link to="/auth" className="nav-start">
            Get Started
            <ArrowRight size={16} />
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section" id="overview">
        <div className="hero-content">
          <div className="live-badge">
            <span className="live-dot"></span>
            LIVE CYCLONE MONITORING
          </div>

          <h1>
            Predict the <span>Cyclone.</span>
            <br />
            Protect the Future.
          </h1>

          <p className="hero-description">
            CycloneX combines real-time atmospheric intelligence, satellite
            observations and predictive analytics to detect cyclones early and
            identify areas at risk.
          </p>

          <div className="hero-buttons">
            <Link to="/auth" className="primary-btn">
              Launch Intelligence
              <ArrowRight size={18} />
            </Link>
            <a href="#intelligence" className="secondary-btn">
              Explore System
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>24/7</strong>
              <span>Monitoring</span>
            </div>
            <div className="hero-stat">
              <strong>14+</strong>
              <span>Data Signals</span>
            </div>
            <div className="hero-stat">
              <strong>360°</strong>
              <span>Risk Analysis</span>
            </div>
          </div>
        </div>

        {/* RADAR */}
        <div className="hero-visual">
          <div className="radar-container">
            <div className="radar-grid"></div>
            <div className="radar-ring radar-ring-1"></div>
            <div className="radar-ring radar-ring-2"></div>
            <div className="radar-ring radar-ring-3"></div>
            <div className="radar-ring radar-ring-4"></div>

            <div className="radar-cross horizontal"></div>
            <div className="radar-cross vertical"></div>
            <div className="radar-sweep"></div>

            <div className="cyclone-point point-1"></div>
            <div className="cyclone-point point-2"></div>
            <div className="cyclone-point point-3"></div>
            <div className="cyclone-point point-4"></div>

            <div className="cyclone-core">
              <Wind size={26} />
            </div>

            <div className="radar-label label-wind">
              <span>WIND SPEED</span>
              <strong>142 km/h</strong>
            </div>

            <div className="radar-label label-pressure">
              <span>PRESSURE</span>
              <strong>978 hPa</strong>
            </div>

            <div className="radar-label label-movement">
              <span>MOVEMENT</span>
              <strong>NW →</strong>
            </div>

            <div className="radar-status">
              <span></span>
              CYCLONE DETECTED
            </div>
          </div>
        </div>
      </section>

      {/* LIVE STRIP */}
      <div className="live-strip">
        <div className="live-strip-item">
          <Radio size={16} />
          <span>LIVE CYCLONE DATA</span>
        </div>
        <div className="live-strip-item">
          <Satellite size={16} />
          <span>BAY OF BENGAL</span>
        </div>
        <div className="live-strip-item">
          <Navigation size={16} />
          <span>11.2° N · 82.4° E</span>
        </div>
        <div className="live-strip-item">
          <Activity size={16} />
          <span>UPDATING EVERY 5 MIN</span>
        </div>
      </div>

      {/* INTELLIGENCE */}
      <section className="intelligence-section" id="intelligence">
        <div className="section-heading">
          <div>
            <span className="section-number">01 / CYCLONE INTELLIGENCE</span>
            <h2>
              From detection to
              <span> decision.</span>
            </h2>
          </div>
          <p>
            One intelligent system to monitor, understand and respond to
            cyclone threats before they become disasters.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-top">
              <Satellite size={22} />
              <span>01</span>
            </div>
            <h3>Cyclone Detection</h3>
            <p>
              Continuously analyze atmospheric signals and satellite
              observations to identify developing cyclonic systems.
            </p>
            <ArrowRight size={18} className="feature-arrow" />
          </div>

          <div className="feature-card">
            <div className="feature-top">
              <Gauge size={22} />
              <span>02</span>
            </div>
            <h3>Intensity Analysis</h3>
            <p>
              Measure wind speed, atmospheric pressure and movement to classify
              cyclone intensity and danger level.
            </p>
            <ArrowRight size={18} className="feature-arrow" />
          </div>

          <div className="feature-card">
            <div className="feature-top">
              <Target size={22} />
              <span>03</span>
            </div>
            <h3>Cyclone Impact Prediction</h3>
            <p>
              Predict potential movement and identify communities and regions
              that may experience significant impact.
            </p>
            <ArrowRight size={18} className="feature-arrow" />
          </div>
        </div>
      </section>

      {/* WARNING LEVELS */}
      <section className="warning-section" id="warnings">
        <div className="warning-heading">
          <div>
            <span className="section-number">02 / WARNING SYSTEM</span>
            <h2>
              Know the <span>risk.</span>
            </h2>
          </div>
          <p>
            A simple four-level classification makes cyclone danger immediately
            understandable.
          </p>
        </div>

        <div className="warning-grid">
          <div className="warning-card safe">
            <div className="warning-level">
              <span className="risk-dot"></span> LEVEL 01
            </div>
            <h3>SAFE</h3>
            <p>No significant cyclone threat detected.</p>
          </div>

          <div className="warning-card moderate">
            <div className="warning-level">
              <span className="risk-dot"></span> LEVEL 02
            </div>
            <h3>MODERATE</h3>
            <p>Monitor cyclone development and updates.</p>
          </div>

          <div className="warning-card dangerous">
            <div className="warning-level">
              <span className="risk-dot"></span> LEVEL 03
            </div>
            <h3>DANGEROUS</h3>
            <p>Prepare for possible severe conditions.</p>
          </div>

          <div className="warning-card critical">
            <div className="warning-level">
              <span className="risk-dot"></span> LEVEL 04
            </div>
            <h3>CRITICAL</h3>
            <p>Immediate protective action may be required.</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="about-card">
          <div className="about-number">03</div>
          <div className="about-content">
            <span className="section-number">ABOUT CYCLONEX</span>
            <h2>
              Intelligence that <span>protects.</span>
            </h2>
            <p>
              CycloneX is designed as an intelligent cyclone monitoring
              platform that transforms complex environmental data into clear,
              actionable information.
            </p>
            <Link to="/auth" className="about-btn">
              Explore Platform <ArrowRight size={16} />
            </Link>
          </div>
          <div className="about-icon">
            <CloudLightning size={80} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <div className="final-cta-content">
          <CloudLightning size={32} />
          <h2>
            Don't wait for the <span>warning.</span>
          </h2>
          <p>Monitor cyclone intelligence before it reaches your doorstep.</p>
          <Link to="/auth" className="primary-btn">
            Enter CycloneX
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">
          <div className="logo-icon">
            <Wind size={18} />
          </div>
          <strong>CycloneX</strong>
        </div>
        <p className="footer-text">
          Intelligent cyclone monitoring and early warning platform.
        </p>
        <p className="footer-copy">© 2026 CycloneX</p>
        <div className="footer-status">
          <span></span> Operational
        </div>
      </footer>
    </div>
  );
}

export default Landing;