import Link from 'next/link';

const MovieList = ({ movies }) => {
    return (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {movies.map((movie) => (
                <Link href={`/movie/${movie.id}`} key={movie.id}>
                    <a className="p-2 space-y-2 rounded-md focus:outline-none hover:shadow-md">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            className="w-full rounded-md"
                        />
                        <div>
                            <h2 className="font-semibold text-gray-900">
                                {movie.title}
                            </h2>
                            <dl className="text-sm text-gray-600">
                                <dt className="sr-only">Released on</dt>
                                <dd>
                                    <time
                                        dateTime={new Date(
                                            movie.release_date
                                        ).toISOString()}
                                    >
                                        {movie.release_date}
                                    </time>
                                </dd>
                            </dl>
                        </div>
                    </a>
                </Link>
            ))}
        </div>
    );
};

export default MovieList;
