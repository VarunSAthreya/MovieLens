const API_KEY = '';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getNowPlaying() {
    const url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();
    return data.results;
}

export async function getGenreList() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();
    return data.genres;
}

/**
 *
 * @param {string} id
 */
export async function getMovieById(id) {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();
    return data;
}

/**
 *
 * @param {string} id
 */
export async function getReviewsById(id) {
    const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();
    return data.results;
}

/**
 *
 * @param {string} id
 */
export async function getSimilarMovies(id) {
    const url = `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();
    return data.results;
}
