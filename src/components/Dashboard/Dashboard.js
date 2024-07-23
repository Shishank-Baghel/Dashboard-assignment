// src/Dashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChartSelector from './ChartSelector';
import { useAuth } from '../../AuthContext';
import Loading from '../Loading.js/Loading'; // Import the Loading component
import './Dashboard.css'; // Import the dashboard CSS

function Dashboard() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to login page
  };

  const handleLoadingFinish = () => {
    setLoading(false);
  };

  if (!isAuthenticated) {
    return <p>You need to log in to view the dashboard</p>;
  }

  if (loading) {
    return <Loading onFinish={handleLoadingFinish} />;
  }

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <ChartSelector />
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
