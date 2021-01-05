# [MovieLens](https://movie-lens.vercel.app/)

**MovieLens** is an SSR application that uses **TMDb API** to get the movie details. Developed in **[NextJS](https://nextjs.org/)** using **[TypeScript](https://www.typescriptlang.org/)**.

## Getting Started:


- Installing Dependencies

```sh
$ npm install
```

- Create [TMDb](https://www.themoviedb.org/) API key from [here](https://developers.themoviedb.org/3/getting-started/introduction)

- Create a environment variable(`.env.local`):

```
TMDB_API_KEY=<API_KEY>
```

- Start the project

```sh
$ npm run dev
```

- Open **`http://localhost:3000/`** to browse through the website.

## Deploy:

- To build production files

```sh
$ npm build
```

- Links to deploy in different providers:

    - [Vercel](https://nextjs.org/docs/deployment) (Recommended)
    - [Netlify](https://www.netlify.com/with/nextjs/)
