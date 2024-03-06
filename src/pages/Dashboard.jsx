import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Card from '../components/Card';
import RecipeCard from '../components/RecipeCard';
import NutritionPlanCard from '../components/NutritionPlanCard';
import MainButton from '../components/MainButton';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar handleLogout={handleLogout} />
      <div className="flex-grow p-6 bg-gray-100">
        <Header title="Nutrition App Dashboard" />

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Recommended Recipes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* RecipeCard components */}
              <RecipeCard title="Tropical Mango Salad" duration="10 min" calories="450" imageUrl="https://placehold.co/100x100" />
              <RecipeCard title="Grilled Tofu Bowl" duration="15 min" calories="500" imageUrl="https://placehold.co/100x100" />
              <RecipeCard title="Spicy Taco Bowl" duration="20 min" calories="600" imageUrl="https://placehold.co/100x100" />
              <RecipeCard title="Vegan Pizza" duration="25 min" calories="700" imageUrl="https://placehold.co/100x100" />
              <RecipeCard title="Pasta Primavera" duration="30 min" calories="800" imageUrl="https://placehold.co/100x100" />
            </div>
          </div>
        </div>
        
        <div className="flex justify-center my-4">
          <MainButton text="Customize my plan" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Nutritional Plans */}
          <NutritionPlanCard planName="Vegetarian Plan" imageUrl="https://placehold.co/100x100" />
          <NutritionPlanCard planName="Gluten-Free Plan" imageUrl="https://placehold.co/100x100" />
          <NutritionPlanCard planName="Keto Plan" imageUrl="https://placehold.co/100x100" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
