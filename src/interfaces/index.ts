export interface Cast {
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number | null;
    id: number;
    name: string;
    order: number;
    profile_path: string | null;
}

export interface Crew {
    credit_id: string;
    department: string;
    genre: number | null;
    id: number;
    job: string;
    name: string;
    profile_path: string | null;
}

export interface Genre {
    id: number;
    name: string;
}

interface Movie {
    adult: boolean;
    backdrop_path: string | null;
    poster_path: string | null;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MovieLong extends Movie {
    budget: number;
    genres: Genre[];
    homepage: string | null;
    imdb_id: string | null;
    revenue: number;
    runtime: number | null;
    status: string;
    tagline: string | null;
}

export interface MovieShort extends Movie {
    genre_ids: Genre['id'][];
}

export interface Review {
    id: string;
    author: string;
    content: string;
    url: string;
}
