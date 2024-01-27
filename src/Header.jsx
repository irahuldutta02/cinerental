import { useContext, useState } from "react";
import Moon from "./assets/icons/moon.svg";
import Sun from "./assets/icons/sun.svg";
import Logo from "./assets/logo.svg";
import Ring from "./assets/ring.svg";
import Cart from "./assets/shopping-cart.svg";
import { CartDetails } from "./cine/CartDetails";
import { CartContext, ThemeContext } from "./context";

export function Header() {
  const [showCart, setShowCart] = useState(false);

  const { state } = useContext(CartContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  function handleCartShow() {
    setShowCart(true);
  }

  return (
    <>
      <header className="fixed w-full dark:bg-[#171923] rounded-b-3xl bg-white shadow-lg">
        {showCart && (
          <CartDetails
            onClose={() => {
              setShowCart(false);
            }}
          />
        )}
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={Logo} width="139" height="26" alt="Logo" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block cursor-pointer">
                <img src={Ring} width="24" height="24" alt="Ring" />
              </a>
            </li>
            <li
              onClick={(e) => {
                e.preventDefault();
                setDarkMode(!darkMode);
              }}
            >
              <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block cursor-pointer">
                {darkMode ? (
                  <img src={Sun} width="24" height="24" alt="Sun" />
                ) : (
                  <img src={Moon} width="24" height="24" alt="Moon" />
                )}
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleCartShow();
                }}
              >
                <img src={Cart} width="24" height="24" alt="Cart" />

                {state.cartData.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-[#171923] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {state.cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
