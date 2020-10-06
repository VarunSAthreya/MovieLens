import type { NextPage } from 'next';
import { useState } from 'react';

import Head from '../components/head';
import MovieCard from '../components/movie-card';
import Sidebar from '../components/sidebar';

import type { Genre, MovieShort } from '../interfaces';

import { getGenreList, getNowPlaying } from '../lib/api';

const all: Genre = { id: -1, name: 'All' };

type Props = {
    genres: Genre[];
    movies: MovieShort[];
};

const Home: NextPage<Props> = ({ genres, movies }: Props) => {
    const [activeGenre, setActiveGenre] = useState<Genre['id']>(all.id);

    const filterMovies = () => {
        if (activeGenre === -1) {
            return movies;
        }

        return movies.filter((movie) => {
            return (
                movie.genre_ids.length && movie.genre_ids.includes(activeGenre)
            );
        });
    };

    return (
        <>
            <Head title="Home | Movies App" />

            <section className="py-16">
                <div className="max-w-6xl px-4 mx-auto sm:px-6 md:px-8 lg:px-10">
                    <div className="lg:grid lg:gap-6 lg:grid-cols-5">
                        <div className="hidden lg:block lg:col-span-1 lg:row-span-2">
                            <Sidebar
                                active={activeGenre}
                                data={[all, ...genres]}
                                setActive={setActiveGenre}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6 lg:col-span-4 sm:grid-cols-3 md:grid-cols-4">
                            {filterMovies().map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export async function getServerSideProps(): Promise<{ props: Props }> {
    const movies = await getNowPlaying();
    const genres = await getGenreList();

    return { props: { genres, movies } };
}

export default Home;
