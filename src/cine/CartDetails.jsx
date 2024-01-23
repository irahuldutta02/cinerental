import { useContext } from "react";
import { MovieContext } from "../context";
import Delete from "../assets/delete.svg";
import checkout from "../assets/icons/checkout.svg";
import { getImageUrl } from "../utils/cine-utility";
import { toast } from "react-toastify";

export function CartDetails({ onClose }) {
  const { state, dispatch } = useContext(MovieContext);

  return (
    <>
      <div
        className="onClose fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm"
        onClick={(e) => {
          e.preventDefault();
          if (e.target.className.includes("onClose")) {
            onClose();
          }
        }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
          <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
            <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
              Your Carts
            </h2>
            <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
              {state.cartData.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <img src="/assets/empty-cart.svg" alt="" />
                  <p className="text-[#575A6E] mt-5">Your cart is empty</p>
                </div>
              ) : (
                <>
                  {state.cartData.map((movie) => {
                    return (
                      <div
                        key={movie.id}
                        className="grid grid-cols-[1fr_auto] gap-4"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            className="rounded overflow-hidden w-16 h-16"
                            src={getImageUrl(movie.cover)}
                            alt={movie.cover}
                          />
                          <div>
                            <h3 className="text-base md:text-xl font-bold">
                              {movie.title}
                            </h3>
                            <p className="max-md:text-xs text-[#575A6E]">
                              {movie.genre}
                            </p>
                            <span className="max-md:text-xs">
                              ${movie.price}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between gap-4 items-center">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: {
                                  id: movie.id,
                                },
                              });
                              toast.error(`${movie.title} deleted from cart`, {
                                position: "bottom-right",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                draggable: true,
                              });
                            }}
                            className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                          >
                            <img className="w-5 h-5" src={Delete} alt="" />
                            <span className="max-md:hidden">Remove</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
            <div className="flex items-center justify-end gap-4 mb-10 lg:mb-14">
              <span className="text-[#575A6E]">Total : </span>
              <span className="text-[#575A6E] font-bold">
                ${state.cartData.reduce((acc, item) => acc + item.price, 0)}
              </span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <a className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm cursor-pointer">
                <img src={checkout} width="24" height="24" alt="" />
                <span>Checkout</span>
              </a>
              <a
                className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                }}
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
