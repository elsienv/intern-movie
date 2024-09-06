import axios from "axios"

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

//function untuk search bar
export const searchMovie = async(q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`)
    return search.data
}

//function untuk memanggil list film now playing
export const getNowPlayingMovies = async () => {
    const movie = await axios.get(`${baseUrl}/movie/now_playing?api_key=${apiKey}`);
    return movie.data.results;
  };

//function untuk memanggil list film popular
export const getMovieList = async() => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)
    return movie.data.results
}

//function untuk trending movies
export const getTrendingMovies = async (timeWindow = 'day') => {
    const response = await axios.get(`${baseUrl}/trending/movie/${timeWindow}?api_key=${apiKey}`);
    return response.data.results;
}