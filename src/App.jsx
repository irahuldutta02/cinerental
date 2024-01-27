import { useReducer, useState } from "react";
import { Page } from "./Page";
import {
  CartContext,
  FilterContext,
  MovieContext,
  SearchContext,
  ThemeContext,
} from "./context";
import { cartReducer, initialSate } from "./reducers/CartReducer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllMovies } from "./data/movies";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [state, dispatch] = useReducer(cartReducer, initialSate);
  const [movies, setMovies] = useState(getAllMovies());
  const [filter, setFilter] = useState("trending");
  const [search, setSearch] = useState("");

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ movies, setMovies }}>
        <CartContext.Provider value={{ state, dispatch }}>
          <FilterContext.Provider value={{ filter, setFilter }}>
            <SearchContext.Provider value={{ search, setSearch }}>
              <Page />
              <ToastContainer />
            </SearchContext.Provider>
          </FilterContext.Provider>
        </CartContext.Provider>
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
