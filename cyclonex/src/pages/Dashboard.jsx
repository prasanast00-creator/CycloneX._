import {
  Wind,
  Gauge,
  Navigation,
  ShieldAlert,
  MapPinned,
  Bell,
  LogOut,
  Activity,
  CloudLightning,
  ArrowUpRight,
  CircleAlert,
  LocateFixed,
  Settings,
  ChevronRight,
  Satellite,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const session = JSON.parse(
    localStorage.getItem("cyclonexSession") || '{"name":"User"}'
  );

  const logout = () => {
    localStorage.removeItem("cyclonexSession");
    navigate("/");
  };

  return (
    <div className="dashboard-page">
      <aside className="sidebar">
        <Link to="/" className="dashboard-logo">
          <div className="dashboard-logo-icon">
            <Wind size={20} />
          </div>
          <span>Cyclone<span>X</span></span>
        </Link>

        <div className="sidebar-section">
          <span className="sidebar-title">MONITORING</span>

          <a href="#overview" className="side-link active">
            <Activity size={17} />
            Overview
          </a>

          <a href="#intelligence" className="side-link">
            <Wind size={17} />
            Cyclone Intelligence
          </a>

          <a href="#impact" className="side-link">
            <MapPinned size={17} />
            Impact Map
          </a>

          <a href="#alerts" className="side-link">
            <Bell size={17} />
            Cyclone Alerts
            <span className="alert-count">3</span>
          </a>
        </div>

        <div className="sidebar-section">
          <span className="sidebar-title">SYSTEM</span>

          <a href="#settings" className="side-link">
            <Settings size={17} />
            Settings
          </a>
        </div>

        <div className="sidebar-bottom">
          <div className="sidebar-user">
            <div className="user-avatar">
              {session.name?.charAt(0)?.toUpperCase() || "U"}
            </div>
            <div>
              <strong>{session.name || "User"}</strong>
              <span>Monitoring Access</span>
            </div>
          </div>

          <button className="logout-btn" onClick={logout}>
            <LogOut size={17} />
            Logout
          </button>
        </div>
      </aside>

      <main className="dashboard-main" id="overview">
        <header className="dashboard-topbar">
          <div>
            <span className="topbar-label">CURRENT MONITORING AREA</span>
            <h2>
              Bay of Bengal <span>•</span> Tamil Nadu Coast
            </h2>
          </div>

          <div className="topbar-right">
            <div className="system-online">
              <span></span>
              SYSTEM ONLINE
            </div>

            <button className="location-button">
              <LocateFixed size={16} />
              My Location
            </button>
          </div>
        </header>

        <section className="critical-banner">
          <div className="critical-icon">
            <CircleAlert size={22} />
          </div>

          <div>
            <strong>CYCLONE ALERT — HIGH RISK</strong>
            <p>
              A developing cyclone system is being monitored over the Bay of
              Bengal. Increased activity detected.
            </p>
          </div>

          <button>
            View Alert <ArrowUpRight size={15} />
          </button>
        </section>

        <section className="metric-grid">
          <div className="metric-card">
            <div className="metric-header">
              <span>WIND SPEED</span>
              <Wind size={18} />
            </div>

            <div className="metric-value">
              142 <small>km/h</small>
            </div>

            <div className="metric-change danger-text">
              +12 km/h <span>last 3 hours</span>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <span>CENTRAL PRESSURE</span>
              <Gauge size={18} />
            </div>

            <div className="metric-value">
              978 <small>hPa</small>
            </div>

            <div className="metric-change danger-text">
              ↓ 8 hPa <span>last 3 hours</span>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <span>MOVEMENT</span>
              <Navigation size={18} />
            </div>

            <div className="metric-value">
              NW <small>→</small>
            </div>

            <div className="metric-change">
              18 km/h <span>movement speed</span>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <span>CYCLONE STRENGTH</span>
              <ShieldAlert size={18} />
            </div>

            <div className="metric-value strength-value">
              DANGEROUS
            </div>

            <div className="strength-bar">
              <span></span>
            </div>
          </div>
        </section>

        <section className="dashboard-grid">
          <div className="dashboard-panel map-panel" id="impact">
            <div className="panel-header">
              <div>
                <span className="panel-kicker">LIVE TRACKING</span>
                <h3>Cyclone Impact Map</h3>
              </div>

              <div className="map-live">
                <span></span>
                LIVE
              </div>
            </div>

            <div className="dashboard-map-canvas">
              <div className="map-grid"></div>

              <div className="map-sea-label">BAY OF BENGAL</div>
              <div className="land-shape land-india"></div>
              <div className="land-shape land-sri"></div>

              <div className="route-path">
                <span className="route-point route-start"></span>
                <span className="route-point route-middle"></span>
                <span className="route-point route-end"></span>
              </div>

              <div className="map-cyclone">
                <div className="map-cyclone-ring ring-1"></div>
                <div className="map-cyclone-ring ring-2"></div>
                <div className="map-cyclone-core">
                  <Wind size={20} />
                </div>
              </div>

              <div className="map-label cyclone-label">
                <strong>CURRENT POSITION</strong>
                <span>142 km/h</span>
              </div>

              <div className="map-label tamil-label">
                <strong>TAMIL NADU</strong>
                <span>HIGH RISK</span>
              </div>

              <div className="map-legend">
                <div>
                  <span className="legend-dot current"></span>
                  Cyclone Position
                </div>
                <div>
                  <span className="legend-line"></span>
                  Predicted Path
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-panel risk-panel">
            <div className="panel-header">
              <div>
                <span className="panel-kicker">RISK ANALYSIS</span>
                <h3>Risk Distribution</h3>
              </div>
              <ShieldAlert size={19} />
            </div>

            <div className="risk-chart">
              <div className="risk-donut">
                <div>
                  <strong>4</strong>
                  <span>LEVELS</span>
                </div>
              </div>
            </div>

            <div className="risk-list">
              <div className="risk-row">
                <span className="risk-name">
                  <i className="risk-green"></i>
                  Safe
                </span>
                <strong>28%</strong>
              </div>

              <div className="risk-row">
                <span className="risk-name">
                  <i className="risk-yellow"></i>
                  Moderate
                </span>
                <strong>24%</strong>
              </div>

              <div className="risk-row">
                <span className="risk-name">
                  <i className="risk-orange"></i>
                  Dangerous
                </span>
                <strong>31%</strong>
              </div>

              <div className="risk-row">
                <span className="risk-name">
                  <i className="risk-red"></i>
                  Critical
                </span>
                <strong>17%</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="dashboard-grid lower-grid">
          <div className="dashboard-panel" id="intelligence">
            <div className="panel-header">
              <div>
                <span className="panel-kicker">FORMATION ANALYSIS</span>
                <h3>Cyclone Origin & Formation</h3>
              </div>
              <Satellite size={19} />
            </div>

            <div className="formation-timeline">
              <div className="timeline-line"></div>

              <div className="timeline-item completed">
                <span className="timeline-dot"></span>
                <div>
                  <strong>Formation Detected</strong>
                  <small>Sep 04 • 06:00 UTC</small>
                </div>
                <span className="timeline-value">29 km/h</span>
              </div>

              <div className="timeline-item completed">
                <span className="timeline-dot"></span>
                <div>
                  <strong>Depression</strong>
                  <small>Sep 04 • 18:00 UTC</small>
                </div>
                <span className="timeline-value">52 km/h</span>
              </div>

              <div className="timeline-item completed">
                <span className="timeline-dot"></span>
                <div>
                  <strong>Deep Depression</strong>
                  <small>Sep 05 • 12:00 UTC</small>
                </div>
                <span className="timeline-value">78 km/h</span>
              </div>

              <div className="timeline-item current">
                <span className="timeline-dot"></span>
                <div>
                  <strong>Cyclone — Current</strong>
                  <small>Sep 06 • 12:00 UTC</small>
                </div>
                <span className="timeline-value">142 km/h</span>
              </div>
            </div>
          </div>

          <div className="dashboard-panel">
            <div className="panel-header">
              <div>
                <span className="panel-kicker">INTENSITY TREND</span>
                <h3>Wind Speed Analysis</h3>
              </div>
              <Wind size={19} />
            </div>

            <div className="chart-area">
              <div className="chart-grid-lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="bars">
                <div className="bar-group">
                  <span style={{ height: "30%" }}></span>
                  <small>06</small>
                </div>

                <div className="bar-group">
                  <span style={{ height: "42%" }}></span>
                  <small>12</small>
                </div>

                <div className="bar-group">
                  <span style={{ height: "51%" }}></span>
                  <small>18</small>
                </div>

                <div className="bar-group">
                  <span style={{ height: "64%" }}></span>
                  <small>00</small>
                </div>

                <div className="bar-group">
                  <span style={{ height: "77%" }}></span>
                  <small>06</small>
                </div>

                <div className="bar-group active-bar">
                  <span style={{ height: "94%" }}></span>
                  <small>12</small>
                </div>
              </div>
            </div>

            <div className="chart-summary">
              <strong>142 km/h</strong>
              <span>Current wind speed</span>
            </div>
          </div>
        </section>

        <section className="dashboard-grid final-grid" id="alerts">
          <div className="dashboard-panel affected-panel">
            <div className="panel-header">
              <div>
                <span className="panel-kicker">PREDICTION MODEL</span>
                <h3>Potentially Affected Areas</h3>
              </div>
              <MapPinned size={19} />
            </div>

            <div className="affected-list">
              <div className="affected-row critical-row">
                <div>
                  <strong>Nagapattinam</strong>
                  <span>Critical Risk</span>
                </div>
                <strong>94%</strong>
                <ChevronRight size={17} />
              </div>

              <div className="affected-row danger-row">
                <div>
                  <strong>Thanjavur</strong>
                  <span>Dangerous Risk</span>
                </div>
                <strong>78%</strong>
                <ChevronRight size={17} />
              </div>

              <div className="affected-row danger-row">
                <div>
                  <strong>Cuddalore</strong>
                  <span>Dangerous Risk</span>
                </div>
                <strong>72%</strong>
                <ChevronRight size={17} />
              </div>

              <div className="affected-row moderate-row">
                <div>
                  <strong>Chennai</strong>
                  <span>Moderate Risk</span>
                </div>
                <strong>46%</strong>
                <ChevronRight size={17} />
              </div>
            </div>
          </div>

          <div className="dashboard-panel alert-panel">
            <div className="panel-header">
              <div>
                <span className="panel-kicker">LATEST EVENTS</span>
                <h3>Cyclone Alerts</h3>
              </div>
              <Bell size={19} />
            </div>

            <div className="alerts-list">
              <div className="alert-item">
                <div className="alert-icon critical-icon-small">
                  <CircleAlert size={16} />
                </div>
                <div>
                  <strong>Risk level increased</strong>
                  <span>Dangerous → Critical</span>
                </div>
                <small>12m</small>
              </div>

              <div className="alert-item">
                <div className="alert-icon">
                  <Wind size={16} />
                </div>
                <div>
                  <strong>Wind speed increased</strong>
                  <span>130 → 142 km/h</span>
                </div>
                <small>38m</small>
              </div>

              <div className="alert-item">
                <div className="alert-icon">
                  <Navigation size={16} />
                </div>
                <div>
                  <strong>Movement updated</strong>
                  <span>Direction changed to NW</span>
                </div>
                <small>1h</small>
              </div>
            </div>
          </div>
        </section>

        <footer className="dashboard-footer">
          <span>
            <CloudLightning size={15} />
            CycloneX Intelligence System
          </span>
          <span>Data simulation for demonstration purposes</span>
          <span>© 2026</span>
        </footer>
      </main>
    </div>
  );
}

export default Dashboard;