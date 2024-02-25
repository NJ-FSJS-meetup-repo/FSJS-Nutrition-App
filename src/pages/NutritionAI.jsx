import React, { useState } from 'react';

const NutritionAI = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Submit the prompt to the custom GPT API
        try {
            const response = await fetch('YOUR_CUSTOM_GPT_API_URL', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });

            const data = await response.json();
            setResponse(data.response);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <div>{response}</div>
        </div>
    );
};

export default NutritionAI;
