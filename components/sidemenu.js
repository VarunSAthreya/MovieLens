import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";
import { createMovie } from "../actions";
const SideMenu = ({ categories, appName }) => {
    let modal = null;

    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {
            console.log(JSON.stringify(movies));
            modal.closeModal();
        });
    };

    return (
        <>
            <Modal ref={(ele) => (modal = ele)} hasSubmit={false}>
                <MovieCreateForm handleFormSubmit={handleCreateMovie} />
            </Modal>
            <h1 className="my-4">{appName}</h1>
            <div className="list-group">
                {categories.map((category) => {
                    return (
                        <a
                            key={category.id}
                            href="#"
                            className="list-group-item"
                        >
                            {category.name}
                        </a>
                    );
                })}
            </div>
        </>
    );
};

export default SideMenu;
