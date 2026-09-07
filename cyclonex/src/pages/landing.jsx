import {
  Wind,
  ArrowRight,
  Satellite,
  Map,
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
        <Link to="/" className="brand">
          <div className="brand-icon">
            <Wind size={22} />
          </div>

          <div>
            <span className="brand-name">Cyclone</span>
            <span className="brand-x">X</span>
          </div>
        </Link>

        <div className="nav-links">
          <a href="#overview">Overview</a>
          <a href="#intelligence">Intelligence</a>
          <a href="#warnings">Warnings</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-actions">
          <Link to="/auth" className="login-btn">
            Login
          </Link>

          <Link to="/auth" className="get-started-btn">
            Get Started
            <ArrowRight size={16} />
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section" id="overview">
        <div className="hero-grid"></div>

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
            CycloneX combines real-time atmospheric intelligence,
            satellite observations and predictive analytics to detect
            cyclones early and identify areas at risk.
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
            <div>
              <strong>24/7</strong>
              <span>Monitoring</span>
            </div>

            <div>
              <strong>14+</strong>
              <span>Data Signals</span>
            </div>

            <div>
              <strong>360°</strong>
              <span>Risk Analysis</span>
            </div>
          </div>
        </div>

        {/* RADAR */}
        <div className="radar-container">
          <div className="radar-glow"></div>

          <div className="radar">
            <div className="radar-circle circle-one"></div>
            <div className="radar-circle circle-two"></div>
            <div className="radar-circle circle-three"></div>

            <div className="radar-line"></div>

            <div className="radar-cross horizontal"></div>
            <div className="radar-cross vertical"></div>

            <div className="cyclone-point point-one"></div>
            <div className="cyclone-point point-two"></div>
            <div className="cyclone-point point-three"></div>

            <div className="cyclone-center">
              <Wind size={26} />
            </div>
          </div>

          <div className="radar-label label-top">
            <span>WIND SPEED</span>
            <strong>142 km/h</strong>
          </div>

          <div className="radar-label label-right">
            <span>PRESSURE</span>
            <strong>978 hPa</strong>
          </div>

          <div className="radar-label label-bottom">
            <span>MOVEMENT</span>
            <strong>NW →</strong>
          </div>

          <div className="radar-status">
            <span></span>
            CYCLONE DETECTED
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
      <section className="section intelligence-section" id="intelligence">

        <div className="section-heading">
          <div className="section-tag">
            <span></span>
            CYCLONE INTELLIGENCE
          </div>

          <h2>
            From detection to
            <span> decision.</span>
          </h2>

          <p>
            One intelligent system to monitor, understand and respond
            to cyclone threats before they become disasters.
          </p>
        </div>

        <div className="intelligence-grid">

          <div className="intel-card">
            <div className="card-icon">
              <Satellite />
            </div>

            <span className="card-number">01</span>

            <h3>Cyclone Detection</h3>

            <p>
              Continuously analyze atmospheric signals and satellite
              observations to identify developing cyclonic systems.
            </p>

            <div className="card-link">
              Real-time detection <ArrowRight size={15} />
            </div>
          </div>

          <div className="intel-card featured">
            <div className="card-icon">
              <Gauge />
            </div>

            <span className="card-number">02</span>

            <h3>Intensity Analysis</h3>

            <p>
              Measure wind speed, atmospheric pressure and movement
              to classify cyclone intensity and danger level.
            </p>

            <div className="card-link">
              Strength classification <ArrowRight size={15} />
            </div>
          </div>

          <div className="intel-card">
            <div className="card-icon">
              <Target />
            </div>

            <span className="card-number">03</span>

            <h3>Cyclone Impact Prediction</h3>

            <p>
              Predict potential movement and identify communities
              and regions that may experience significant impact.
            </p>

            <div className="card-link">
              Affected-area prediction <ArrowRight size={15} />
            </div>
          </div>

        </div>
      </section>

      {/* WARNING LEVELS */}
      <section className="section warnings-section" id="warnings">

        <div className="section-heading center-heading">
          <div className="section-tag">
            <span></span>
            WARNING SYSTEM
          </div>

          <h2>
            Know the <span>risk.</span>
          </h2>

          <p>
            A simple four-level classification makes cyclone danger
            immediately understandable.
          </p>
        </div>

        <div className="warning-grid">

          <div className="warning-card safe">
            <div className="warning-level">LEVEL 01</div>
            <div className="warning-dot"></div>
            <h3>SAFE</h3>
            <p>No significant cyclone threat detected.</p>
          </div>

          <div className="warning-card moderate">
            <div className="warning-level">LEVEL 02</div>
            <div className="warning-dot"></div>
            <h3>MODERATE</h3>
            <p>Monitor cyclone development and updates.</p>
          </div>

          <div className="warning-card dangerous">
            <div className="warning-level">LEVEL 03</div>
            <div className="warning-dot"></div>
            <h3>DANGEROUS</h3>
            <p>Prepare for possible severe conditions.</p>
          </div>

          <div className="warning-card critical">
            <div className="warning-level">LEVEL 04</div>
            <div className="warning-dot"></div>
            <h3>CRITICAL</h3>
            <p>Immediate protective action may be required.</p>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">

        <div className="about-visual">
          <div className="about-grid"></div>

          <div className="about-orbit orbit-one"></div>
          <div className="about-orbit orbit-two"></div>

          <div className="about-core">
            <CloudLightning size={38} />
          </div>
        </div>

        <div className="about-content">

          <div className="section-tag">
            <span></span>
            ABOUT CYCLONEX
          </div>

          <h2>
            Intelligence that
            <span> protects.</span>
          </h2>

          <p>
            CycloneX is designed as an intelligent cyclone monitoring
            platform that transforms complex environmental data into
            clear, actionable information.
          </p>

          <div className="about-points">

            <div>
              <ShieldAlert size={20} />
              <span>Early warning intelligence</span>
            </div>

            <div>
              <Map size={20} />
              <span>Location-based risk mapping</span>
            </div>

            <div>
              <Waves size={20} />
              <span>Real-time atmospheric monitoring</span>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">

        <div className="cta-glow"></div>

        <div className="section-tag">
          <span></span>
          BE PREPARED
        </div>

        <h2>
          Don't wait for the
          <span> warning.</span>
        </h2>

        <p>
          Monitor cyclone intelligence before it reaches your doorstep.
        </p>

        <Link to="/auth" className="primary-btn">
          Enter CycloneX
          <ArrowRight size={18} />
        </Link>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-brand">
          <div className="brand">
            <div className="brand-icon">
              <Wind size={20} />
            </div>

            <div>
              <span className="brand-name">Cyclone</span>
              <span className="brand-x">X</span>
            </div>
          </div>

          <p>
            Intelligent cyclone monitoring and early warning.
          </p>
        </div>

        <div className="footer-links">
          <a href="#overview">Overview</a>
          <a href="#intelligence">Intelligence</a>
          <a href="#warnings">Warnings</a>
          <a href="#about">About</a>
        </div>

        <div className="footer-copy">
          © 2026 CycloneX
        </div>

      </footer>

    </div>
  );
}

export default Landing;