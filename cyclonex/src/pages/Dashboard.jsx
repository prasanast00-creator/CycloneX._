import { Wind, Satellite, ShieldAlert, Activity, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <header className="dash-header">
        <Link to="/" className="nav-logo">
          <div className="logo-icon">
            <Wind size={22} />
          </div>
          <div>
            <span>Cyclone</span>
            <span className="logo-x">X</span>
          </div>
        </Link>

        <div className="dash-user">
          <span className="user-badge">OPERATOR ACTIVE</span>
          <Link to="/" className="logout-btn">
            <LogOut size={16} />
            Exit
          </Link>
        </div>
      </header>

      <main className="dash-content">
        <div className="dash-grid">
          <div className="dash-card">
            <div className="card-header">
              <Satellite size={18} />
              <span>SATELLITE STATUS</span>
            </div>
            <h3>INSAT-3DR Operational</h3>
            <p>Live telemetry receiving at 100% capacity.</p>
          </div>

          <div className="dash-card">
            <div className="card-header">
              <Wind size={18} />
              <span>ACTIVE CYCLONES</span>
            </div>
            <h3>1 System Detected</h3>
            <p>Bay of Bengal — Severity Level 03</p>
          </div>

          <div className="dash-card">
            <div className="card-header">
              <ShieldAlert size={18} />
              <span>RISK ZONE</span>
            </div>
            <h3>Eastern Coastal Grid</h3>
            <p>High landfall probability in 48 hours.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;