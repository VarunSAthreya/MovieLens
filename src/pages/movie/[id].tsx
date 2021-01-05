import type { GetServerSidePropsContext, NextPage } from 'next';
import Head from '../../components/head';
import List from '../../components/list';
import MovieCard from '../../components/movie-card';
import { Cast, Crew, MovieLong, MovieShort } from '../../interfaces';
import { getCredits, getMovieDetails, getSimilarMovies } from '../../lib/api';

type Props = {
    cast: Cast[];
    crew: Crew[];
    movie: MovieLong;
    similar: MovieShort[];
};

const Movie: NextPage<Props> = ({ cast, crew, movie, similar }: Props) => {
    return (
        <>
            <Head
                title={movie.title}
                description={movie.overview}
                previewImage={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            />

            <div className="max-w-6xl px-4 mx-auto sm:px-6 md:px-8 lg:px-10">
                <div className="divide-y divide-gray-400">
                    <section className="py-16">
                        <div className="flex items-start space-x-4 lg:space-x-8">
                            <div className="flex items-center justify-center w-40 overflow-hidden bg-gray-200 rounded-md shadow-xl h-60">
                                {movie.poster_path ? (
                                    <img
                                        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
                                        alt={movie.title}
                                        className="w-full h-auto"
                                    />
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                        className="w-32 h-32 text-gray-300"
                                    >
                                        <path d="M27.5 5h-23A1.5 1.5 0 003 6.5v19A1.5 1.5 0 004.5 27h23a1.5 1.5 0 001.5-1.5v-19A1.5 1.5 0 0027.5 5zM26 18.5l-4.794-5.23a.994.994 0 00-1.445-.031l-5.347 5.347L19.828 24H17l-4.793-4.793a1 1 0 00-1.414 0L6 24V8h20zm-17.9-6a2.4 2.4 0 112.4 2.4 2.4 2.4 0 01-2.4-2.4z" />
                                    </svg>
                                )}
                            </div>
                            <div className="">
                                <div className="flex items-baseline">
                                    <h1 className="text-3xl font-bold text-gray-900">
                                        {movie.title}
                                    </h1>
                                    <dl className="ml-2 text-lg text-gray-600">
                                        <dt className="sr-only">Released on</dt>
                                        <dd>
                                            <time dateTime={movie.release_date}>
                                                {`(${new Date(
                                                    movie.release_date
                                                ).getFullYear()})`}
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
                                                {idx !==
                                                    movie.genres.length - 1 &&
                                                    ', '}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="hidden md:block">
                                        &bull;
                                    </span>
                                    <dl>
                                        <dt className="sr-only">Runtime</dt>
                                        <dd>{movie.runtime} mins</dd>
                                    </dl>
                                </div>

                                <div className="flex items-center mt-4">
                                    {[...Array(5)].map((_, idx) => (
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
                                    <span className="ml-2 text-sm text-gray-500">
                                        ({movie.vote_count} votes)
                                    </span>
                                </div>
                                <p className="hidden text-sm text-gray-600 md:mt-4 md:block max-w-prose">
                                    {movie.overview}
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="py-16 md:hidden">
                        <p className="text-sm text-gray-600">
                            {movie.overview}
                        </p>
                    </section>

                    <section className="py-16">
                        <div className="grid grid-cols-2 grid-rows-1 gap-4 sm:w-1/3 md:w-1/2">
                            <List
                                data={cast.sort((a, b) => a.order - b.order)}
                                title="Cast"
                            />

                            <div className="space-y-4">
                                <List
                                    data={crew.filter(
                                        (item) =>
                                            item.job.toLowerCase() ===
                                            'director'
                                    )}
                                    title="Director"
                                />

                                <List
                                    data={crew.filter(
                                        (item) =>
                                            item.job.toLowerCase() ===
                                            'producer'
                                    )}
                                    title="Producers"
                                />

                                <List
                                    data={crew.filter(
                                        (item) =>
                                            item.job.toLowerCase() ===
                                            'screenplay'
                                    )}
                                    title="Screenwriter"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="py-16">
                        <h2 className="mb-6 text-2xl font-bold text-gray-900">
                            Similar Movies
                        </h2>
                        {similar.length ? (
                            <div className="flex py-2 space-x-6 overflow-x-auto">
                                {similar.map((movie) => (
                                    <div
                                        key={movie.id}
                                        className="flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/6"
                                    >
                                        <MovieCard movie={movie} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-600">
                                Oops! No similar movies found... The sadness :(
                            </p>
                        )}
                    </section>
                </div>
            </div>
        </>
    );
};

export async function getServerSideProps({
    params,
}: GetServerSidePropsContext): Promise<{ props: Props }> {
    const id = params?.id as string;

    const movie = await getMovieDetails(id);
    const { cast, crew } = await getCredits(id);
    const similar = await getSimilarMovies(id);

    return { props: { cast, crew, movie, similar } };
}

export default Movie;
