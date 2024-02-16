import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Nutrition App Dashboard</h1>
      <div className="button-container">
        <button className="dashboard-button">Food List</button>
        <button className="dashboard-button">Food Search</button>
        <button className="dashboard-button">Food Filter</button>
        <button className="dashboard-button">Build Profile</button>
      </div>
    </div>
  );
};

export default Dashboard;