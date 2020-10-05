import Link from 'next/link';
import PropTypes from 'prop-types';
import { useState } from 'react';

import MovieCard from '../components/movie-card';
import Sidebar from '../components/sidebar';

import { getGenreList, getNowPlaying } from '../lib/api';

const all = { id: -1, name: 'All' };

const Home = ({ genres, movies }) => {
    const [activeGenre, setActiveGenre] = useState(all.id);
    const allGenres = [all, ...genres];

    const filterMovies = () => {
        if (activeGenre === -1) return movies;

        return movies.filter(
            (movie) =>
                movie.genre_ids.length && movie.genre_ids.includes(activeGenre)
        );
    };

    return (
        <section className="py-16">
            <div className="max-w-6xl px-4 mx-auto sm:px-6 md:px-8 lg:px-10">
                <div className="lg:grid lg:gap-6 lg:grid-cols-5">
                    <div className="hidden lg:block lg:col-span-1 lg:row-span-2">
                        <Sidebar
                            active={activeGenre}
                            data={allGenres}
                            setActive={setActiveGenre}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-6 lg:col-span-4 sm:grid-cols-3 md:grid-cols-4">
                        {filterMovies().map((movie) => (
                            <Link key={movie.id} href={`/movie/${movie.id}`}>
                                <a className="group">
                                    <MovieCard movie={movie} />
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

Home.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            release_date: PropTypes.string.isRequired,
            poster_path: PropTypes.string,
            genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
        }).isRequired
    ).isRequired,
};

Home.getInitialProps = async () => {
    const movies = await getNowPlaying();
    const genres = await getGenreList();

    return { genres, movies };
};

export default Home;
