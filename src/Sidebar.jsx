import { useContext } from "react";
import { FaCalendarAlt, FaFireAlt } from "react-icons/fa";
import { MdFavorite, MdFiberNew, MdWatchLater } from "react-icons/md";
import { FilterContext, SearchContext } from "./context";

export function Sidebar() {
  const { filter, setFilter } = useContext(FilterContext);
  const { search, setSearch } = useContext(SearchContext);

  return (
    <>
      <aside className="">
        <ul className="space-y-2">
          <li>
            <div className="mt-4">
              <input
                type="search"
                name="search"
                id="search"
                value={search}
                placeholder="search"
                className="w-full p-2 py- rounded-lg border-2 border-primary focus:outline-none text-black "
                onChange={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSearch(e.target.value);
                }}
              />
            </div>
          </li>
          <li>
            <a
              className={`flex cursor-pointer items-center space-x-2 px-5 py-3.5 rounded-lg ${
                filter === "trending" && "bg-primary text-black"
              } `}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setFilter("trending");
              }}
            >
              <span>
                <FaFireAlt size={23} />
              </span>
              <span>Trending</span>
            </a>
          </li>
          <li>
            <a
              className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg cursor-pointer ${
                filter === "newReleases" && "bg-primary text-black"
              } `}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setFilter("newReleases");
              }}
            >
              <span>
                <MdFiberNew size={23} />
              </span>
              <span>New Releases</span>
            </a>
          </li>
          <li>
            <a
              className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg cursor-pointer ${
                filter === "comingSoon" && "bg-primary text-black"
              } `}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setFilter("comingSoon");
              }}
            >
              <span>
                <FaCalendarAlt size={23} />
              </span>
              <span>Coming Soon</span>
            </a>
          </li>
          <li>
            <a
              className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg cursor-pointer ${
                filter === "favorites" && "bg-primary text-black"
              } `}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setFilter("favorites");
              }}
            >
              <span>
                <MdFavorite size={23} />
              </span>
              <span>Favorites</span>
            </a>
          </li>
          <li>
            <a
              className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg cursor-pointer ${
                filter === "watchLater" && "bg-primary text-black"
              } `}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setFilter("watchLater");
              }}
            >
              <span>
                <MdWatchLater size={23} />
              </span>
              <span>Watch Later</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
