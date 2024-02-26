// RegistrationForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    // Save user data to local storage
    localStorage.setItem('userData', JSON.stringify(formData));
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/dashboard')
    // Clear form fields after registration
    setFormData({
      email: '',
      password: ''
    });
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
