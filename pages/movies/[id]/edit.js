import Router from "next/router";

import MovieCreateForm from "../../../components/movieCreateForm";
import { getMovieById, updateMovie } from "../../../actions";

class EditMovie extends React.Component {
    static async getInitialProps({ query }) {
        const movie = await getMovieById(query.id);

        return { movie };
    }

    handleUpdateMovie = (movie) => {
        updateMovie(movie).then((updatedMovie) => {
            Router.push(`/movies/${movie.id}`);
        });
    };

    render() {
        const { movie } = this.props;
        return (
            <div className="container">
                <h1>Edit the movie</h1>
                <MovieCreateForm
                    initialData={movie}
                    handleFormSubmit={this.handleUpdateMovie}
                    submitButtonText="Update"
                />
            </div>
        );
    }
}

export default EditMovie;
