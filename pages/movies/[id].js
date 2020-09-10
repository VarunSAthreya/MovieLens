import { useRouter } from "next/router";
import { getMovieById, deleteMovie } from "../../actions";

const Movie = (props) => {
    const router = useRouter();
    const { id } = router.query;
    const { movie } = props;

    const handleDeleteMovie = (id) => {
        deleteMovie(id).then(() => {
            router.push("/");
        });
    };

    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">{movie.name}</h1>
                <p className="lead">{movie.description}</p>
                <hr className="my-4" />
                <p>{movie.genre}</p>
                <button
                    className="btn btn-primary btn-lg"
                    href="#"
                    role="button"
                >
                    Learn more
                </button>
                <button
                    className="btn btn-danger btn-lg ml-2"
                    href="#"
                    role="button"
                    onClick={() => handleDeleteMovie(id)}
                >
                    delete
                </button>
            </div>
            <p className="desc-text">{movie.longDesc}</p>
            <style jsx>{`
                .desc-text {
                    font-size: 21px;
                }
            `}</style>
        </div>
    );
};

Movie.getInitialProps = async (context) => {
    const { id } = context.query;

    const movie = await getMovieById(id);
    return { movie };
};

export default Movie;
