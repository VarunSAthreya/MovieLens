import Link from 'next/link';
import type { FunctionComponent } from 'react';
import type { MovieShort } from '../interfaces';

type Props = {
    movie: MovieShort;
};

const MovieCard: FunctionComponent<Props> = ({ movie }: Props) => {
    return (
        <Link href={`/movie/${movie.id}`}>
            <a className="flex flex-col h-full space-y-1 focus:outline-none group">
                {movie.poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
                        className="w-full h-auto rounded-md shadow-md"
                    />
                ) : (
                    <div className="flex items-center justify-center flex-grow bg-gray-200 rounded-md shadow-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-32 h-32 text-gray-400 fill-current"
                        >
                            <path d="M27.5 5h-23A1.5 1.5 0 003 6.5v19A1.5 1.5 0 004.5 27h23a1.5 1.5 0 001.5-1.5v-19A1.5 1.5 0 0027.5 5zM26 18.5l-4.794-5.23a.994.994 0 00-1.445-.031l-5.347 5.347L19.828 24H17l-4.793-4.793a1 1 0 00-1.414 0L6 24V8h20zm-17.9-6a2.4 2.4 0 112.4 2.4 2.4 2.4 0 01-2.4-2.4z" />
                        </svg>
                    </div>
                )}
                <div>
                    <h3 className="text-sm font-semibold text-gray-900 transition duration-150 ease-in-out group-focus:underline group-hover:underline">
                        {movie.title}
                    </h3>
                    <dl className="text-sm text-gray-600">
                        <dt className="sr-only">Released on</dt>
                        <dd>
                            <time
                                dateTime={new Date(
                                    movie.release_date
                                ).toString()}
                            >
                                {new Date(movie.release_date).getFullYear()}
                            </time>
                        </dd>
                    </dl>
                </div>
            </a>
        </Link>
    );
};

export default MovieCard;
