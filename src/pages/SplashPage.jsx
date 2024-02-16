import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const SplashPage = () => {
  return (
    <div className="splash-page">
      <h1>Welcome to Our Nutrition App</h1>
      <p>
        Our nutrition app helps you track your daily intake of nutrients and
        maintain a healthy lifestyle.
      </p>
      <div className="buttons">
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default SplashPage;
