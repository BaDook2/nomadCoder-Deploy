import Link from "next/link";

// 서버 컴포넌트
// 클라이언트 컴포넌트 ("use client")
// html -> hydration (Javscript code => addeventListener) -> a(Link Component)

type IMovie = {
    adult: boolean,
    backdrop_path: string
    genre_ids: number[];
    id: number,
    original_language: string
    original_title: string
    overview: string
    popularity: number,
    poster_path: string
    release_date:string
    title: string
    video: boolean,
    vote_average: number,
    vote_count: number,
}

export const metadata = {
  title: "Home",
};  

export const API_URL = `https://nomad-movies.nomadcoders.workers.dev/movies`;

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const json = fetch(API_URL).then((res) => res.json());
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie: IMovie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
