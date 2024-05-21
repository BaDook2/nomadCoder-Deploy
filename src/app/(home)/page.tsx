import Link from "next/link";
import Movie from "../../../components/movie";
import styles from "../../../styles/home.module.css";
import { API_URL } from "../constants";

type IMovie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export const metadata = {
  title: "Home",
};



async function getMovies() {
  const json = fetch(API_URL).then((res) => res.json());
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie: IMovie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
