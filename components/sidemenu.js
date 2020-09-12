import { useRouter } from "next/router";
import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";
import { createMovie } from "../actions";

const SideMenu = (props) => {
    let modal = null;
    const router = useRouter();
    const { categories, appName, changeCategory, activeCategory } = props;

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
                            onClick={() => changeCategory(category.name)}
                            key={category.id}
                            href="#"
                            className={`list-group-item ${
                                activeCategory === category.name ? "active" : ""
                            }`}
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
