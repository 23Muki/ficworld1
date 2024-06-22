// import React, { useState, useEffect } from 'react';
// import MovieSearch from './MovieSearch';
// import { fetchMovie } from './omdbService';  // Update the path to './omdbService'
// import Rating from 'react-rating';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// // import './index.css';
// import './my.css';
// import { type } from '@testing-library/user-event/dist/type';

// function App() {

//     const [movieData, setMovieData] = useState(null);

//     const handleMovieData = (data) => {
//         setMovieData(data);
//     };
    
//     const [tiles, setTiles] = useState([]);

//     console.log(tiles);

//     useEffect(() => {
//         const movies = localStorage.getItem("movies");
//         const parsedMovies = JSON.parse(movies);
//         if(parsedMovies && parsedMovies.length){
//             setTiles(parsedMovies);
//         }   
//     },[])

//     const [formData, setFormData] = useState({
//         title: '',
//         rating: 0,
//         watched: false
//     });

//     const addTile = () => {
//         // if (formData.title === "")
//         //     return
//         const newTile = {
//             id: tiles.length + 1,
//             title: formData.title,
//             rating: formData.rating,
//             watched: formData.watched,
//             type: formData.type
//         };



//         setTiles([...tiles, newTile]);
//         localStorage.setItem("movies", JSON.stringify([...tiles, newTile]));

//         setFormData({
//             title: '',
//             rating: 0,
//             watched: false,
//             type: ''
//         });
//     };

//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         const val = type === 'checkbox' ? checked : value;
//         setFormData({
//             ...formData,
//             [name]: val
//         });
//     };

//     const deleteTile = (id) => {
//         const filteredArray = tiles.filter(tile => tile.id !== id);
//         setTiles(filteredArray);
//         localStorage.setItem("movies", JSON.stringify(filteredArray));
//         console.log(filteredArray);
//     };


//     return (
//         <div> 
            
//             <div className="Logo">
//                 <h1>MyFicWorld</h1>
//             </div>
//             <div className="NewContent">
//                 <div className="Form">
//                     <label>
//                         <input class="movieTitles" className='movieTitle'
//                             type="text"
//                             name="title"
//                             placeholder='Tytuł'
//                             value={formData.title}
//                             onChange={handleInputChange}
//                         />
//                     </label>
//                     <label>
//                     <MovieSearch onMovieData={handleMovieData} />

//                         <input className='typeMovie myradio' type='radio' name='type' value="movie" checked={formData.type1} onChange={handleInputChange}/>
//                         <label class="TypeOf" for="movie">Film</label>
//                         <input className='typeSeries myradio' type='radio' name='type' value="series" checked={formData.type2} onChange={handleInputChange}/>
//                         <label class="TypeOf" for="series">Serial</label>
//                     </label>
//                     <label>
//                         <input type="checkbox" name="watched" value="watched" checked={formData.watched} onChange={handleInputChange}/>
//                         <label class="TypeOf" for="watched">Obejrzany</label>
//                     </label>
//                     <label class="Ratings">
//                         <Rating
//                             initialRating={formData.rating}
//                             onChange={(value) => setFormData({ ...formData, rating: value })}
//                             emptySymbol={<FontAwesomeIcon icon={faStar} color="white" />}
//                             fullSymbol={<FontAwesomeIcon icon={faStar} color="#dad72c" />}
//                         />
//                     </label>
//                     <button class="AddToList" onClick={addTile}><span class="AddToListbutton">Dodaj do listy</span></button>
//                 </div>
//             </div>
//                 <div className="TilesContainer">
//                     {tiles.map(tile => (
//                         <div key={tile.id} class="tilee" className="Tile">
//                                     <div>
//                 {movieData && (
//                 <div>
//                     <h2>{movieData.Title}</h2>
//                     <p>{movieData.Plot}</p>
//                     <p><strong>Year:</strong> {movieData.Year}</p>
//                     {/* <p><strong>Genre:</strong> {movieData.Genre}</p> */}
//                     <p><strong>Director:</strong> {movieData.Director}</p>
//                     <img src={movieData.Poster} alt={`${movieData.Title} Poster`} />
//                 </div>
//             )}
//         </div>
//                             {/* <h2>{tile.title}</h2>
//                             <br></br>
//                             <h4>{tile.type === "movie" ? 'Film' : 'Serial'}</h4>
//                             <br></br>
//                             <p><Rating initialRating={tile.rating} emptySymbol={<FontAwesomeIcon icon={faStar} color="white" />} fullSymbol={<FontAwesomeIcon icon={faStar} color="#dad72c" />} readonly /></p>
//                             <p class="isWatched">{tile.watched ? 'Obejrzany' : 'Do obejrzenia'}</p> */}
//                             <button class="deleteTile" onClick={() => deleteTile(tile.id)}><span>Usuń</span></button>
//                         </div>
//                     ))}
//                 </div>            
//         </div>
//     );
// }
// export default App;

// import React, { useState, useEffect } from 'react';
// import MovieSearch from './MovieSearch';
// import { fetchMovie } from './omdbService';  // Update the path to './omdbService'
// import Rating from 'react-rating';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import './my.css';

// function App() {
//     const [tiles, setTiles] = useState([]);
//     const [formData, setFormData] = useState({
//         title: '',
//         rating: 0,
//         watched: false,
//         type: ''
//     });

//     useEffect(() => {
//         const movies = localStorage.getItem("movies");
//         const parsedMovies = JSON.parse(movies);
//         if (parsedMovies && parsedMovies.length) {
//             setTiles(parsedMovies);
//         }
//     }, []);

//     const handleMovieData = (movieData) => {
//         if (movieData) {
//             const newTile = {
//                 id: tiles.length + 1,
//                 title: movieData.Title,
//                 rating: formData.rating,
//                 watched: formData.watched,
//                 type: formData.type,
//                 movieData: movieData
//             };
//             const updatedTiles = [...tiles, newTile];
//             setTiles(updatedTiles);
//             localStorage.setItem("movies", JSON.stringify(updatedTiles));
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         const val = type === 'checkbox' ? checked : value;
//         setFormData({
//             ...formData,
//             [name]: val
//         });
//     };

//     const deleteTile = (id) => {
//         const filteredArray = tiles.filter(tile => tile.id !== id);
//         setTiles(filteredArray);
//         localStorage.setItem("movies", JSON.stringify(filteredArray));
//     };

//     return (
//         <div>
//             <div className="Logo">
//                 <h1>MyFicWorld</h1>
//             </div>
//             <div className="NewContent">
//                 <div className="Form">
//                     <label>
//                         <MovieSearch onMovieData={handleMovieData} />
//                     </label>
//                     <label>
//                         <input type="checkbox" name="watched" checked={formData.watched} onChange={handleInputChange} />
//                         <label className="TypeOf" htmlFor="watched">Obejrzany</label>
//                     </label>
//                     <label className="Ratings">
//                         <Rating
//                             initialRating={formData.rating}
//                             onChange={(value) => setFormData({ ...formData, rating: value })}
//                             emptySymbol={<FontAwesomeIcon icon={faStar} color="white" />}
//                             fullSymbol={<FontAwesomeIcon icon={faStar} color="#dad72c" />}
//                         />
//                     </label>
//                     <button className="AddToList" onClick={() => handleMovieData(formData.title)}><span className="AddToListbutton">Dodaj do listy</span></button>
//                 </div>
//             </div>
//             <div className="TilesContainer">
//                 {tiles.map(tile => (
//                     <div key={tile.id} className="Tile">
//                         <div>
//                             <h2>{tile.title}</h2>
//                             <p>{tile.movieData.Plot}</p>
//                             <p><strong>Year:</strong> {tile.movieData.Year}</p>
//                             <p><strong>Director:</strong> {tile.movieData.Director}</p>
//                             <img src={tile.movieData.Poster} alt={`${tile.title} Poster`} />
//                             <p><Rating initialRating={tile.rating} emptySymbol={<FontAwesomeIcon icon={faStar} color="white" />} fullSymbol={<FontAwesomeIcon icon={faStar} color="#dad72c" />} readonly /></p>
//                             <p className="isWatched">{tile.watched ? 'Obejrzany' : 'Do obejrzenia'}</p>
//                             <button className="deleteTile" onClick={() => deleteTile(tile.id)}><span>Usuń</span></button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import MovieSearch from './MovieSearch';
// import Rating from 'react-rating';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import './my.css';

// function App() {
//     const [tiles, setTiles] = useState([]);
//     const [formData, setFormData] = useState({
//         title: '',
//         rating: 0,
//         watched: false,
//         type: ''
//     });

//     useEffect(() => {
//         const movies = localStorage.getItem("movies");
//         const parsedMovies = JSON.parse(movies);
//         if (parsedMovies && parsedMovies.length) {
//             setTiles(parsedMovies);
//         }
//     }, []);

//     const handleMovieData = (movieData) => {
//         if (movieData) {
//             const newTile = {
//                 id: tiles.length + 1,
//                 title: movieData.Title,
//                 rating: formData.rating,
//                 watched: formData.watched,
//                 type: formData.type,
//                 movieData: movieData
//             };
//             const updatedTiles = [...tiles, newTile];
//             setTiles(updatedTiles);
//             localStorage.setItem("movies", JSON.stringify(updatedTiles));
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         const val = type === 'checkbox' ? checked : value;
//         setFormData({
//             ...formData,
//             [name]: val
//         });
//     };

//     const deleteTile = (id) => {
//         const filteredArray = tiles.filter(tile => tile.id !== id);
//         setTiles(filteredArray);
//         localStorage.setItem("movies", JSON.stringify(filteredArray));
//     };

//     return (
//         <div>
//             <div className="Logo">
//                 <h1>MyFicWorld</h1>
//             </div>
//             <div className="NewContent">
//                 <div className="Form">
//                     <label>
//                         <input
//                             className="movieTitle"
//                             type="text"
//                             name="title"
//                             placeholder='Tytuł'
//                             value={formData.title}
//                             onChange={handleInputChange}
//                         />
//                     </label>
//                     <label>
//                         <MovieSearch onMovieData={handleMovieData} />
//                         <input className='typeMovie myradio' type='radio' name='type' value="movie" checked={formData.type === "movie"} onChange={handleInputChange} />
//                         <label className="TypeOf" htmlFor="movie">Film</label>
//                         <input className='typeSeries myradio' type='radio' name='type' value="series" checked={formData.type === "series"} onChange={handleInputChange} />
//                         <label className="TypeOf" htmlFor="series">Serial</label>
//                     </label>
//                     <label>
//                         <input type="checkbox" name="watched" checked={formData.watched} onChange={handleInputChange} />
//                         <label className="TypeOf" htmlFor="watched">Obejrzany</label>
//                     </label>
//                     <label className="Ratings">
//                         <Rating
//                             initialRating={formData.rating}
//                             onChange={(value) => setFormData({ ...formData, rating: value })}
//                             emptySymbol={<FontAwesomeIcon icon={faStar} color="white" />}
//                             fullSymbol={<FontAwesomeIcon icon={faStar} color="#dad72c" />}
//                         />
//                     </label>
//                     <button className="AddToList" onClick={() => handleMovieData(formData.title)}><span className="AddToListbutton">Dodaj do listy</span></button>
//                 </div>
//             </div>
//             <div className="TilesContainer">
//                 {tiles.map(tile => (
//                     <div key={tile.id} className="Tile">
//                         <div>
//                             <h2>{tile.title}</h2>
//                             {tile.movieData ? (
//                                 <>
//                                     <p>{tile.movieData.Plot}</p>
//                                     <p><strong>Year:</strong> {tile.movieData.Year}</p>
//                                     <p><strong>Director:</strong> {tile.movieData.Director}</p>
//                                     <img src={tile.movieData.Poster} alt={`${tile.title} Poster`} />
//                                 </>
//                             ) : (
//                                 <p>Brak danych o filmie.</p>
//                             )}
//                             <p>{tile.type === "movie" ? 'Film' : 'Serial'}</p>
//                             <p><Rating initialRating={tile.rating} emptySymbol={<FontAwesomeIcon icon={faStar} color="white" />} fullSymbol={<FontAwesomeIcon icon={faStar} color="#dad72c" />} readonly /></p>
//                             <p className="isWatched">{tile.watched ? 'Obejrzany' : 'Do obejrzenia'}</p>
//                             <button className="deleteTile" onClick={() => deleteTile(tile.id)}><span>Usuń</span></button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import MovieSearch from './MovieSearch';
// import Rating from 'react-rating';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import './my.css';

// function App() {
//     const [tiles, setTiles] = useState([]);
//     const [formData, setFormData] = useState({
//         title: '',
//         rating: 0,
//         watched: false,
//         type: ''
//     });

//     useEffect(() => {
//         const movies = localStorage.getItem("movies");
//         const parsedMovies = JSON.parse(movies);
//         if (parsedMovies && parsedMovies.length) {
//             setTiles(parsedMovies);
//         }
//     }, []);

//     const handleMovieData = (movieData) => {
//         if (movieData) {
//             const newTile = {
//                 id: tiles.length + 1,
//                 title: movieData.Title,
//                 rating: formData.rating,
//                 watched: formData.watched,
//                 type: formData.type,
//                 movieData: movieData
//             };
//             const updatedTiles = [...tiles, newTile];
//             setTiles(updatedTiles);
//             localStorage.setItem("movies", JSON.stringify(updatedTiles));

//             setFormData({
//                 title: '',
//                 rating: 0,
//                 watched: false,
//                 type: ''
//             });
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         const val = type === 'checkbox' ? checked : value;
//         setFormData({
//             ...formData,
//             [name]: val
//         });
//     };

//     const deleteTile = (id) => {
//         const filteredArray = tiles.filter(tile => tile.id !== id);
//         setTiles(filteredArray);
//         localStorage.setItem("movies", JSON.stringify(filteredArray));
//     };

//     return (
//         <div>
//             <div className="Logo">
//                 <h1>MyFicWorld</h1>
//             </div>
//             <div className="NewContent">
//                 <div className="Form">
//                     <label>
//                         <input
//                             className="movieTitle"
//                             type="text"
//                             name="title"
//                             placeholder='Tytuł'
//                             value={formData.title}
//                             onChange={handleInputChange}
//                         />
//                     </label>
//                     <label>
//                         <input type="checkbox" name="watched" checked={formData.watched} onChange={handleInputChange} />
//                         <label className="TypeOf" htmlFor="watched">Obejrzany</label>
//                     </label>
//                     <label className="Ratings">
//                         <Rating
//                             initialRating={formData.rating}
//                             onChange={(value) => setFormData({ ...formData, rating: value })}
//                             emptySymbol={<FontAwesomeIcon icon={faStar} color="gray" />}
//                             fullSymbol={<FontAwesomeIcon icon={faStar} color="#dad72c" />}
//                         />
//                     </label>
//                     <MovieSearch onMovieData={handleMovieData} title={formData.title} />
//                 </div>
//             </div>
//             <div className="TilesContainer">
//                 {tiles.map(tile => (
//                     <div key={tile.id} className="Tile">
//                         <div>
//                             <h2>{tile.title}</h2>
//                             {tile.movieData ? (
//                                 <>
//                                     <p>{tile.movieData.Plot}</p>
//                                     <p><strong>Year:</strong> {tile.movieData.Year}</p>
//                                     <p><strong>Director:</strong> {tile.movieData.Director}</p>
//                                     <img src={tile.movieData.Poster} alt={`${tile.title} Poster`} />
//                                 </>
//                             ) : (
//                                 <p>Brak danych o filmie.</p>
//                             )}
//                             <p><Rating initialRating={tile.rating} emptySymbol={<FontAwesomeIcon icon={faStar} color="gray" />} fullSymbol={<FontAwesomeIcon icon={faStar} color="#dad72c" />} readonly /></p>
//                             <p className="isWatched">{tile.watched ? 'Obejrzany' : 'Do obejrzenia'}</p>
//                             <button className="deleteTile" onClick={() => deleteTile(tile.id)}><span>Usuń</span></button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import MovieSearch from './MovieSearch';
// import Rating from 'react-rating';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import './my.css';

// function App() {
//     const [tiles, setTiles] = useState([]);
//     const [formData, setFormData] = useState({
//         title: '',
//         rating: 0,
//         watched: false,
//         type: ''
//     });

//     useEffect(() => {
//         const storedTiles = localStorage.getItem('tiles');
//         if (storedTiles) {
//             setTiles(JSON.parse(storedTiles));
//         }
//     }, []);

//     const handleMovieData = (movieData) => {
//         if (movieData) {
//             const newTile = {
//                 id: tiles.length + 1,
//                 title: movieData.Title,
//                 rating: formData.rating,
//                 watched: formData.watched,
//                 type: formData.type,
//                 movieData: movieData
//             };
//             const updatedTiles = [...tiles, newTile];
//             setTiles(updatedTiles);
//             localStorage.setItem('tiles', JSON.stringify(updatedTiles));

//             setFormData({
//                 title: '',
//                 rating: 0,
//                 watched: false,
//                 type: ''
//             });
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         const val = type === 'checkbox' ? checked : value;
//         setFormData({
//             ...formData,
//             [name]: val
//         });
//     };

//     const deleteTile = (id) => {
//         const updatedTiles = tiles.filter(tile => tile.id !== id);
//         setTiles(updatedTiles);
//         localStorage.setItem('tiles', JSON.stringify(updatedTiles));
//     };

//     return (
//         <div>
//             <div className="Logo">
//                 <h1>MyFicWorld</h1>
//             </div>
//             <div className="NewContent">
//                 <div className="Form">
//                     <label>
//                         <input
//                             className="movieTitle"
//                             type="text"
//                             name="title"
//                             placeholder="Tytuł"
//                             value={formData.title}
//                             onChange={handleInputChange}
//                         />
//                     </label>
//                     <label>
//                         <MovieSearch onMovieData={handleMovieData} />
//                         <input className="typeMovie myradio" type="radio" name="type" value="movie" checked={formData.type === "movie"} onChange={handleInputChange} />
//                         <label className="TypeOf" htmlFor="movie">Film</label>
//                         <input className="typeSeries myradio" type="radio" name="type" value="series" checked={formData.type === "series"} onChange={handleInputChange} />
//                         <label className="TypeOf" htmlFor="series">Serial</label>
//                     </label>
//                     <label>
//                         <input type="checkbox" name="watched" checked={formData.watched} onChange={handleInputChange} />
//                         <label className="TypeOf" htmlFor="watched">Obejrzany</label>
//                     </label>
//                     <label className="Ratings">
//                         <Rating
//                             initialRating={formData.rating}
//                             onChange={(value) => setFormData({ ...formData, rating: value })}
//                             emptySymbol={<FontAwesomeIcon icon={faStar} color="white" />}
//                             fullSymbol={<FontAwesomeIcon icon={faStar} color="#dad72c" />}
//                         />
//                     </label>
//                     <button className="AddToList" onClick={() => handleMovieData({ Title: formData.title })}>
//                         <span className="AddToListbutton">Dodaj do listy</span>
//                     </button>
//                 </div>
//             </div>
//             <div className="TilesContainer">
//                 {tiles.map(tile => (
//                     <div key={tile.id} className="Tile">
//                         <div className="TileContent">
//                             <h2>{tile.title}</h2>
//                             {tile.movieData ? (
//                                 <>
//                                     <p>{tile.movieData.Plot}</p>
//                                     <p><strong>Year:</strong> {tile.movieData.Year}</p>
//                                     <p><strong>Director:</strong> {tile.movieData.Director}</p>
//                                     <img className="Poster" src={tile.movieData.Poster} alt={`${tile.title} Poster`} />
//                                 </>
//                             ) : (
//                                 <p>Brak danych o filmie.</p>
//                             )}
//                             <p>{tile.type === "movie" ? 'Film' : 'Serial'}</p>
//                             <p><Rating initialRating={tile.rating} emptySymbol={<FontAwesomeIcon icon={faStar} color="white" />} fullSymbol={<FontAwesomeIcon icon={faStar} color="#dad72c" />} readonly /></p>
//                             <p className="isWatched">{tile.watched ? 'Obejrzany' : 'Do obejrzenia'}</p>
//                             <button className="deleteTile" onClick={() => deleteTile(tile.id)}><span>Usuń</span></button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default App;

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

    useEffect(() => {
        const storedTiles = localStorage.getItem('tiles');
        if (storedTiles) {
            setTiles(JSON.parse(storedTiles));
        }
    }, []);

    const handleMovieData = async () => {
        try {
            const movieData = await fetchMovie(formData.title);
            if (movieData) {
                const newTile = {
                    id: tiles.length + 1,
                    title: movieData.Title,
                    rating: formData.rating,
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
            [name]: val
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
                    <label className="Ratings">
                        <Rating
                            initialRating={formData.rating}
                            onChange={(value) => setFormData({ ...formData, rating: value })}
                            emptySymbol={<FontAwesomeIcon icon={faStar} color="#adb5bd" />}
                            fullSymbol={<FontAwesomeIcon icon={faStar} color="#eb5e28" />}
                        />
                    </label>
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
                            <p><Rating initialRating={tile.rating} emptySymbol={<FontAwesomeIcon icon={faStar} color="#adb5bd" />} fullSymbol={<FontAwesomeIcon icon={faStar} color="#eb5e28" />} readonly /></p>
                            <p className="isWatched">{tile.watched ? 'Obejrzany' : 'Do obejrzenia'}</p>
                            <button className="deleteTile" onClick={() => deleteTile(tile.id)}><span>Usuń z Listy</span></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
