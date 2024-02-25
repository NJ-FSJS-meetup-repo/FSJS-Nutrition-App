import React, { useState, useEffect } from 'react';

const FoodList = () => {
    const [favoriteFoods, setFavoriteFoods] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        // Fetch favorite foods from SQL database
        // Replace `fetchFavoriteFoods` with your actual API call
        const fetchFavoriteFoods = async () => {
            try {
                const response = await fetch('/api/favorite-foods');
                const data = await response.json();
                setFavoriteFoods(data);
            } catch (error) {
                console.error('Error fetching favorite foods:', error);
            }
        };

        fetchFavoriteFoods();
    }, []);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const filteredFoods = favoriteFoods.filter((food) =>
        food.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <div>
                {/* Filter icons */}
                <button onClick={() => handleFilterChange('')}>
                    All
                </button>
                <button onClick={() => handleFilterChange('fruit')}>
                    Fruit
                </button>
                <button onClick={() => handleFilterChange('vegetable')}>
                    Vegetable
                </button>
            </div>
            <ul>
                {/* Display filtered favorite foods */}
                {filteredFoods.map((food, index) => (
                    <li key={index}>{food}</li>
                ))}
            </ul>
        </div>
    );
};

export default FoodList;
