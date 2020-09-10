const MOVIE_DATA = [
    {
        id: "1",
        name: "The Shawshank Redemption",
        releaseYear: 1994,
        description:
            "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        rating: 4.8,
        genre: "drama",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Temp_plate_blue.svg/902px-Temp_plate_blue.svg.png",

        longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quidem animi tempora nihil aspernatur nisi amet a fuga consectetur provident officia sint adipisci soluta, laborum voluptatibus explicabo delectus inventore quam? Odit dolores porro veniam iusto maxime? Saepe esse accusamus quia quidem, nisi molestiae et odit sunt ducimus beatae sint officiis, repellendus totam laborum sit inventore ipsam ullam quis incidunt! Hic, doloremque corporis repudiandae quisquam magni quis expedita? Id nemo tempore enim? Obcaecati provident deleniti hic repellat nemo numquam architecto quibusdam asperiores nostrum aperiam eius expedita porro consectetur voluptatibus placeat, ducimus sit unde saepe? Voluptates, quo illum praesentium unde omnis voluptas.",
    },
    {
        id: "2",
        name: "The Dark Knight",
        releaseYear: 2008,
        description:
            "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        rating: 4.7,
        genre: "action, crime, drama",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Temp_plate_blue.svg/902px-Temp_plate_blue.svg.png",
        longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rerum quisquam, beatae perferendis velit deleniti exercitationem, minus facere quia delectus in omnis vel voluptatum maiores, debitis sint labore ea ut tempore! Delectus nisi dolore doloribus possimus itaque, quaerat optio corporis, deleniti assumenda blanditiis est, repellat accusantium voluptatem. Explicabo porro quos consequuntur ab non odit harum quidem voluptas nemo consectetur hic numquam quam repudiandae vitae, in enim sint corporis nulla dolores debitis ipsum cum. Ipsa, inventore quisquam porro hic, voluptatum obcaecati est distinctio earum quidem officia excepturi enim adipisci! Facere sunt odit esse deleniti vitae placeat totam earum ducimus quis rpellat?",
    },
    {
        id: "3",
        name: "Lord Of Rings",
        releaseYear: 2001,
        description:
            "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        rating: 4.0,
        genre: "adventure, drama, fantasy, historical",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Temp_plate_blue.svg/902px-Temp_plate_blue.svg.png",
        longDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempore praesentium aut maxime. Repellat reprehenderit temporibus at architecto omnis qui minima culpa ducimus earum, beatae eum mollitia numquam maiores harum dolore ullam blanditiis pariatur voluptate ipsa eveniet quas commodi ipsum ea aspernatur. Sequi corrupti consequatur perspiciatis harum repellendus, corporis excepturi necessitatibus magni amet iusto eaque exercitationem quas repellat. Excepturi voluptate ea explicabo vel delectus totam illum impedit! Impedit delectus ut accusantium eum minima officiis, enim hic a, molestias sapiente et temporibus voluptatum vero distinctio ad quas accusamus rerum aperiam. Officia, est commodi? Dignissimos porro nostrum totam perspiciatis tempora iste quam?",
    },
];

const CATEGORY_DATA = [
    { id: "1", name: "drama" },
    { id: "2", name: "actions" },
    { id: "3", name: "adventure" },
    { id: "4", name: "historical" },
];

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(CATEGORY_DATA);
        }, 50);
    });
};

export const getMovies = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOVIE_DATA);
            // reject("Cannot fetch data");
        }, 50);
    });

    // setTimeout(() => {
    //     return movieData;
    // }, 2000);
};

export const getMovieById = (id) => {
    return new Promise((resolve, reject) => {
        const movieIndex = MOVIE_DATA.findIndex((m) => m.id === id);
        const movie = MOVIE_DATA[movieIndex];
        setTimeout(() => resolve(movie), 50);
    });
};

export const createMovie = (movie) => {
    return new Promise((resolve, reject) => {
        movie.id = Math.random().toString(36).substr(2, 7);

        MOVIE_DATA.push(movie);
        setTimeout(() => {
            resolve(MOVIE_DATA);
        }, 50);
    });
};
