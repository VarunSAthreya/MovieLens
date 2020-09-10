import { useRouter } from "next/router";
import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";
import { createMovie } from "../actions";

const SideMenu = ({ categories, appName }) => {
    let modal = null;
    const router = useRouter();

    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {
            modal.closeModal();
            router.push("/");
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
