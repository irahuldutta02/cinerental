import { useContext } from "react";
import { MovieCard } from "./MovieCard";
import { FilterContext, MovieContext, SearchContext } from "../context";

export function MovieList() {
  const { movies } = useContext(MovieContext);
  const { filter } = useContext(FilterContext);
  const { search } = useContext(SearchContext);

  const filteredMovies = movies.filter((movie) => {
    if (filter === "trending") {
      return movie.isTrending;
    }

    if (filter === "newReleases") {
      return movie.isNewRelease;
    }

    if (filter === "comingSoon") {
      return movie.isComingSoon;
    }

    if (filter === "favorites") {
      return movie.isFavorite;
    }

    if (filter === "watchLater") {
      return movie.addedToWatchLater;
    }

    return movie;
  });

  const filterWithSearchMovies = filteredMovies.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="content min-h-[90vh] ">
        {filterWithSearchMovies.length <= 0 && (
          <div className="flex justify-center items-center h-full">
            <h1 className="text-2xl text-gray-400">No movies found</h1>
          </div>
        )}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {filterWithSearchMovies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
}
