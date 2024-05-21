import { API_URL } from "@/app/(home)/page";
import MovieVideos from "../../../../../components/movie-videos";
import MovieInfo from "../../../../../components/movie-info";
import { Suspense } from "react";

const MovieDetail = async ({ params: { id } }: { params: { id: string } }) => {
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
