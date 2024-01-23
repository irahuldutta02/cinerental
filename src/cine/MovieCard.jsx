import { useContext, useState } from "react";
import { toast } from "react-toastify";
import Tag from "../assets/tag.svg";
import { MovieContext } from "../context";
import { getImageUrl } from "../utils/cine-utility";
import { MovieDetailsModal } from "./MovieDetailsModal";
import { Rating } from "./Rating";

export function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { state, dispatch } = useContext(MovieContext);

  function handleModalClose() {
    setSelectedMovie(null);
    setShowModal(false);
  }

  function handleMovieSelection(movie) {
    setSelectedMovie(movie);
    setShowModal(true);
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
          className="cursor-pointer flex flex-col justify-between h-full"
          onClick={(e) => {
            e.preventDefault();
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
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleAddToCart(movie);
              }}
            >
              <img src={Tag} alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </div>
        </div>
      </figure>
    </>
  );
}
