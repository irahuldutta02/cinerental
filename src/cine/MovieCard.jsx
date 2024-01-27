import { useContext, useState } from "react";
import { MdFavorite, MdWatchLater } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";
import Tag from "../assets/tag.svg";
import { CartContext, MovieContext } from "../context";
import { getImageUrl } from "../utils/cine-utility";
import { MovieDetailsModal } from "./MovieDetailsModal";
import { Rating } from "./Rating";

export function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { movies, setMovies } = useContext(MovieContext);

  const { state, dispatch } = useContext(CartContext);

  function handleModalClose() {
    setSelectedMovie(null);
    setShowModal(false);
  }

  function handleMovieSelection(movie) {
    setSelectedMovie(movie);
    setShowModal(true);
  }

  function toggleFavorite(movie) {
    const updatedMovies = movies.map((item) => {
      if (item.id === movie.id) {
        return {
          ...item,
          isFavorite: !item.isFavorite,
        };
      }
      return item;
    });

    setMovies(updatedMovies);
  }

  function watchLater(movie) {
    const updatedMovies = movies.map((item) => {
      if (item.id === movie.id) {
        return {
          ...item,
          addedToWatchLater: !item.addedToWatchLater,
        };
      }
      return item;
    });

    setMovies(updatedMovies);
    toast.info(`${movie.title} ${!movie.addedToWatchLater ? "added to" : "removed from"} watch later`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    });
  }

  function handleAddToCart(movie) {
    const found = state.cartData.find((item) => item.id === movie.id);

    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie,
        },
      });
      toast.success(`${movie.title} added to cart`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
    } else {
      toast.warning(`${movie.title} already exists in cart`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
    }
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={selectedMovie} onClose={handleModalClose} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <div
          className={`${
            !movie.isComingSoon && "cursor-pointer"
          } flex flex-col justify-between h-full`}
          onClick={(e) => {
            e.preventDefault();
            if (movie.isComingSoon) return;
            handleMovieSelection(movie);
          }}
        >
          <div className="w-full flex-1 rounded-md overflow-hidden">
            <img
              className="w-full object-cover h-full max-h-[600px]"
              src={getImageUrl(movie.cover)}
              alt={movie.cover}
            />
          </div>

          <div className="pt-4 w-full">
            <h3 className="text-xl  mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            {!movie.isComingSoon && (
              <div className="flex items-center space-x-1 mb-5">
                <Rating value={movie.rating} />
              </div>
            )}
            <div className="flex justify-between gap-4 items-center flex-wrap">
              {!movie.isComingSoon && (
                <div className="flex flex-1 justify-center items-center">
                  <button
                    className="bg-primary py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold  border-2 border-primary rounded-lg text-sm w-full min-w-48"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleAddToCart(movie);
                    }}
                  >
                    <img src={Tag} alt="" />
                    <span>${movie.price} | Add to Cart</span>
                  </button>
                </div>
              )}

              {!movie.isComingSoon && (
                <div className="flex justify-center gap-4 flex-1">
                  <button
                    className="py-2 px-5 flex items-center justify-center border-2 border-primary rounded-lg text-sm "
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleFavorite(movie);
                    }}
                  >
                    {movie.isFavorite ? (
                      <MdFavorite size={20} color="red" />
                    ) : (
                      <MdFavorite size={20} />
                    )}
                  </button>
                  <button
                    className="py-2 px-5 flex items-center justify-center border-2 border-primary rounded-lg text-sm "
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      watchLater(movie);
                    }}
                  >
                    {!movie.addedToWatchLater ? (
                      <MdWatchLater size={20} />
                    ) : (
                      <TiTick size={20} />
                    )}
                  </button>
                </div>
              )}

              {movie.isComingSoon && (
                <div className="flex flex-1 justify-center items-center">
                  <button
                    className="comingSoon bg-gray-500 py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold  border-2 border-gray-500 rounded-lg text-sm w-full min-w-48 cursor-not-allowed"
                    disabled
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <img src={Tag} alt="" />
                    <span>Coming Soon</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </figure>
    </>
  );
}
