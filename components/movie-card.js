import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
    return (
        <div className="space-y-1">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="w-full rounded-md"
            />
            <div>
                <h3 className="text-sm font-semibold text-gray-900 transition duration-150 ease-in-out group-hover:underline">
                    {movie.title}
                </h3>
                <dl className="text-sm text-gray-600">
                    <dt className="sr-only">Released on</dt>
                    <dd>
                        <time
                            dateTime={new Date(
                                movie.release_date
                            ).toISOString()}
                        >
                            {new Date(movie.release_date).getFullYear()}
                        </time>
                    </dd>
                </dl>
            </div>
        </div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
    }).isRequired,
};

export default MovieCard;
