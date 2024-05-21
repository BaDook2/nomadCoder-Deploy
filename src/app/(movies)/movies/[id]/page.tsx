import MovieVideos from "../../../../../components/movie-videos";
import MovieInfo, { getMovie } from "../../../../../components/movie-info";
import { Suspense } from "react";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id)
  return {
    title: `${movie.title}`
  };
}

const MovieDetail = async ({ params: { id } }: IParams) => {
  return (
    <div>
      <Suspense fallback={<h1>Loading Movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
};

export default MovieDetail;
