import React, { useState, useEffect } from 'react';
import { fetchMovie } from './omdbService';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './my.css';

function App() {
    const [tiles, setTiles] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        rating: 0,
        watched: false
    });
    const [isEditing, setIsEditing] = useState(null);

    useEffect(() => {
        const storedTiles = localStorage.getItem('tiles');
        if (storedTiles) {
            setTiles(JSON.parse(storedTiles));
        }
    }, []);

    const handleMovieData = async () => {
        if (formData.watched && formData.rating === 0) {
            alert('Proszę ocenić produkcję, jeśli została oznaczona jako obejrzana.');
            return;
        }

        try {
            const movieData = await fetchMovie(formData.title);
            if (movieData) {
                const newTile = {
                    id: tiles.length + 1,
                    title: movieData.Title,
                    rating: formData.watched ? formData.rating : 0,
                    watched: formData.watched,
                    movieData: movieData
                };
                const updatedTiles = [...tiles, newTile];
                setTiles(updatedTiles);
                localStorage.setItem('tiles', JSON.stringify(updatedTiles));

                setFormData({
                    title: '',
                    rating: 0,
                    watched: false
                });
            }
        } catch (error) {
            console.error('Failed to fetch movie data:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: val,
            ...(name === 'watched' && !checked ? { rating: 0 } : {})
        });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleMovieData();
        }
    };

    const deleteTile = (id) => {
        const updatedTiles = tiles.filter(tile => tile.id !== id);
        setTiles(updatedTiles);
        localStorage.setItem('tiles', JSON.stringify(updatedTiles));
    };

    const startEditing = (id) => {
        setIsEditing(id);
    };

    const saveRating = (id, newRating) => {
        const updatedTiles = tiles.map(tile => {
            if (tile.id === id) {
                return { ...tile, rating: newRating };
            }
            return tile;
        });
        setTiles(updatedTiles);
        localStorage.setItem('tiles', JSON.stringify(updatedTiles));
        setIsEditing(null);
    };

    return (
        <div>
            <div className="Logo">
                <h1>MyFicWorld</h1>
            </div>
            <div className="NewContent">
                <div className="Form">
                    <label>
                        <input
                            className="movieTitle"
                            type="text"
                            name="title"
                            placeholder="Tytuł"
                            value={formData.title}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                        />
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="watched"
                            checked={formData.watched}
                            onChange={handleInputChange}
                        />
                        <label className="TypeOf" htmlFor="watched">Obejrzany</label>
                    </label>
                    {formData.watched && (
                        <label className="Ratings">
                            <Rating
                                initialRating={formData.rating}
                                onChange={(value) => setFormData({ ...formData, rating: value })}
                                emptySymbol={<FontAwesomeIcon icon={faStar} color="#adb5bd" />}
                                fullSymbol={<FontAwesomeIcon icon={faStar} color="#eb5e28" />}
                            />
                        </label>
                    )}
                    <button className="AddToList" onClick={handleMovieData}>
                        <span className="AddToListbutton">Dodaj do listy</span>
                    </button>
                </div>
            </div>
            <div className="TilesContainer">
                {tiles.map(tile => (
                    <div key={tile.id} className="Tile">
                        <div className="TileContent">
                            <h2>{tile.title}</h2>
                            {tile.movieData ? (
                                <>
                                    <p>{tile.movieData.Plot}</p>
                                    <p><strong>Year:</strong> {tile.movieData.Year}</p>
                                    <p><strong>Director:</strong> {tile.movieData.Director}</p>
                                    <img className="Poster" src={tile.movieData.Poster} alt={`${tile.title} Poster`} />
                                </>
                            ) : (
                                <p>Brak danych o filmie.</p>
                            )}
                            <p>
                                {isEditing === tile.id ? (
                                    <Rating
                                        initialRating={tile.rating}
                                        onChange={(value) => saveRating(tile.id, value)}
                                        emptySymbol={<FontAwesomeIcon icon={faStar} color="#adb5bd" />}
                                        fullSymbol={<FontAwesomeIcon icon={faStar} color="#eb5e28" />}
                                    />
                                ) : (
                                    <Rating
                                        initialRating={tile.rating}
                                        emptySymbol={<FontAwesomeIcon icon={faStar} color="#adb5bd" />}
                                        fullSymbol={<FontAwesomeIcon icon={faStar} color="#eb5e28" />}
                                        readonly
                                    />
                                )}
                            </p>
                            <p className="isWatched">{tile.watched ? 'Obejrzany' : 'Do obejrzenia'}</p>
                            <button className="deleteTile" onClick={() => deleteTile(tile.id)}><span>Usuń z Listy</span></button>
                            {tile.watched && isEditing !== tile.id && (
                                <button className="editTile" onClick={() => startEditing(tile.id)}>Edytuj ocenę</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
