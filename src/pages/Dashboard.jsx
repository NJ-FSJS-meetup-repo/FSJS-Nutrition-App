import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false'); // Clear login flag from local storage
    navigate('/login'); // Redirect user to login page
  };

  return (
    <div className="dashboard">
      <h1>Nutrition App Dashboard</h1>
      <div className="button-container">
        <button className="dashboard-button">Food List</button>
        <button className="dashboard-button">Food Search</button>
        <button className="dashboard-button">Food Filter</button>
        <button className="dashboard-button">Build Profile</button>
        {/* Attach the handleLogout function to the onClick event of this button */}
        <button className="dashboard-button" onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  ); 
};

export default Dashboard;
