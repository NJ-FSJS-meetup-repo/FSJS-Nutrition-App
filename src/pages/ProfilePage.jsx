import React, { useState } from 'react';

const ProfilePage = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Handle form submission and save the user's profile
    };

    return (
        <div>
            <h1>Create Your Profile</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Select your option:
                    <select value={selectedOption} onChange={handleOptionChange}>
                        <option value="">-- Select an option --</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </label>
                <button type="submit">Create Profile</button>
            </form>
        </div>
    );
};

export default ProfilePage;
