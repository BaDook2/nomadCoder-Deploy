"use client";
import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";
interface IMovieProps {
  title: string;
  id: number;
  poster_path: string;
}

const Movie = ({ title, id, poster_path }: IMovieProps) => {
  const Router = useRouter();
  const onClick = () => {
    Router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link prefetch href={`/movies/${id}`}>{title}</Link>
    </div>
  );
};
export default Movie;
