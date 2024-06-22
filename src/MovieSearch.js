import React, { useState } from 'react';
import { fetchMovie } from './omdbService';

const MovieSearch = ({ onMovieData }) => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const movieData = await fetchMovie(title);
            onMovieData(movieData); // Send movieData back to parent component
            setError(null);
        } catch (err) {
            setError('Failed to fetch movie data');
            onMovieData(null); // Send null to indicate error
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter movie title"
            />
            {error && <p>{error}</p>}
        </div>
    );
};

export default MovieSearch;
