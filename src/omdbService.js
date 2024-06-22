const API_KEY = '9a1186d6'; // Upewnij się, że masz swój klucz API

export const fetchMovie = async (title) => {
    const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const movieData = await response.json();
    if (movieData.Response === "False") {
        throw new Error(movieData.Error);
    }
    return movieData;
};
