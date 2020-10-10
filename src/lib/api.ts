import axios from 'axios';

import type {
    Cast,
    Crew,
    Genre,
    MovieLong,
    MovieShort,
    Review,
} from '../interfaces';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: process.env.TMDB_API_KEY,
    },
});

export async function getNowPlaying(): Promise<MovieShort[]> {
    type Response = {
        page: number;
        results: MovieShort[];
        dates: {
            maximum: string;
            minimum: string;
        };
        total_pages: number;
        total_results: number;
    };

    const res = await instance.get<Response>('/movie/now_playing');
    return res.data.results;
}

export async function getGenreList(): Promise<Genre[]> {
    type Response = {
        genres: Genre[];
    };

    const res = await instance.get<Response>(`/genre/movie/list`);
    return res.data.genres;
}

export async function getMovieDetails(id: string): Promise<MovieLong> {
    type Response = MovieLong;

    const res = await instance.get<Response>(`/movie/${id}`);
    return res.data;
}

export async function getReviewsById(id: string): Promise<Review[]> {
    type Response = {
        id: number;
        page: number;
        results: Review[];
        total_pages: number;
        total_results: number;
    };

    const res = await instance.get<Response>(`/movie/${id}/reviews`);
    return res.data.results;
}

export async function getSimilarMovies(id: string): Promise<MovieShort[]> {
    type Response = {
        page: number;
        results: MovieShort[];
        total_pages: number;
        total_results: number;
    };

    const res = await instance.get<Response>(`/movie/${id}/similar`);
    return res.data.results;
}

export async function getCredits(
    id: string
): Promise<{ cast: Cast[]; crew: Crew[] }> {
    type Response = {
        id: number;
        cast: Cast[];
        crew: Crew[];
    };

    const res = await instance.get<Response>(`/movie/${id}/credits`);
    return { cast: res.data.cast, crew: res.data.crew };
}
