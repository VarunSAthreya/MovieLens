import Link from 'next/link';
import PropTypes from 'prop-types';

import MovieCard from '../../components/movie-card';

import { getMovieById, getSimilarMovies } from '../../lib/api';

const Movie = ({ movie, similar }) => {
    return (
        <>
            <section className="py-16">
                <div className="max-w-6xl px-4 mx-auto sm:px-6 md:px-8 lg:px-10">
                    <div className="flex space-x-4 lg:space-x-8">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${
                                movie.poster_path || ''
                            }`}
                            alt={movie.title}
                            className="w-40 rounded-md shadow-xl"
                        />
                        <div className="flex-grow">
                            <div className="flex items-baseline">
                                <h1 className="text-3xl font-bold text-gray-900">
                                    {movie.title}
                                </h1>
                                <dl className="ml-2 text-lg text-gray-600">
                                    <dt className="sr-only">Released on</dt>
                                    <dd>
                                        <time
                                            dateTime={new Date(
                                                movie.release_date
                                            ).toISOString()}
                                        >
                                            (
                                            {new Date(
                                                movie.release_date
                                            ).getFullYear()}
                                            )
                                        </time>
                                    </dd>
                                </dl>
                            </div>

                            <div className="flex flex-col space-y-1 text-sm text-gray-500 md:space-y-0 md:space-x-1 md:flex-row md:items-baseline">
                                <div className="flex items-center space-x-1">
                                    {movie.genres.map((genre, idx) => (
                                        <span
                                            key={genre.id}
                                            className="font-medium"
                                        >
                                            {genre.name}
                                            {idx !== movie.genres.length - 1 &&
                                                ', '}
                                        </span>
                                    ))}
                                </div>
                                <span className="hidden md:block">&bull;</span>
                                <dl>
                                    <dt className="sr-only">Runtime</dt>
                                    <dd>{movie.runtime} mins</dd>
                                </dl>
                            </div>

                            <div className="flex items-center mt-4">
                                {[...Array(5)].map((value, idx) => (
                                    <svg
                                        key={idx}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className={`w-4 h-4 ${
                                            idx < movie.vote_average / 2
                                                ? 'text-blue-500'
                                                : 'text-gray-300'
                                        }`}
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="hidden text-sm text-gray-600 md:mt-4 md:block max-w-prose">
                                {movie.overview}
                            </p>
                        </div>
                    </div>

                    <div className="py-4 mt-8 border-t border-gray-400">
                        <p className="text-sm text-gray-600 md:hidden">
                            {movie.overview}
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-200">
                <div className="max-w-6xl px-4 mx-auto sm:px-6 md:px-8 lg:px-10">
                    <h2 className="mb-6 text-2xl font-bold text-gray-900">
                        Similar Movies
                    </h2>
                    {similar.length ? (
                        <div className="flex py-2 space-x-6 overflow-x-auto">
                            {similar.map((movie) => (
                                <Link
                                    key={movie.id}
                                    href={`/movie/${movie.id}`}
                                >
                                    <a className="flex-shrink-0 w-1/3 group sm:w-1/4 md:w-1/6">
                                        <MovieCard movie={movie} />
                                    </a>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600">
                            Oops! No similar movies found... The sadness :(
                        </p>
                    )}
                </div>
            </section>
        </>
    );
};

Movie.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        backdrop_path: PropTypes.string,
        poster_path: PropTypes.string,
        genres: PropTypes.arrayOf(
            PropTypes.exact({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
            })
        ).isRequired,
        tagline: PropTypes.string,
        runtime: PropTypes.number,
        overview: PropTypes.string,
        vote_average: PropTypes.number.isRequired,
    }).isRequired,
    similar: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            release_date: PropTypes.string.isRequired,
            poster_path: PropTypes.string,
        })
    ).isRequired,
};

Movie.getInitialProps = async (ctx) => {
    const { id } = ctx.query;
    const movie = await getMovieById(id);
    const similar = await getSimilarMovies(id);

    return { movie, similar };
};

export default Movie;
