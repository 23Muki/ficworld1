import React, { useState } from 'react';
import { fetchMovie } from './omdbService';

const MovieSearch = ({ onMovieData }) => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const movieData = await fetchMovie(title);
            onMovieData(movieData);
            setError(null);
        } catch (err) {
            setError('Failed to fetch movie data');
            onMovieData(null);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
};

export default MovieSearch;
