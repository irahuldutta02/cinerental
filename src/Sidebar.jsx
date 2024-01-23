import commingSoon from "./assets/icons/commingSoon.svg";
import favourite from "./assets/icons/favourite.svg";
import newRelease from "./assets/icons/newRelease.svg";
import Trending from "./assets/icons/trending.svg";
import watchLater from "./assets/icons/watchLater.svg";

export function Sidebar() {
  return (
    <>
      <aside className="" >
        <ul className="space-y-2">
          <li>
            <a className="flex cursor-pointer items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black">
              <img src={Trending} width="24" height="24" alt="Trending" />
              <span>Trending</span>
            </a>
          </li>
          <li>
            <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg cursor-pointer">
              <img src={newRelease} width="24" height="24" alt="newRelease" />
              <span>New Releases</span>
            </a>
          </li>
          <li>
            <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg cursor-pointer">
              <img src={commingSoon} width="24" height="24" alt="commingSoon" />
              <span>Coming Soon</span>
            </a>
          </li>
          <li>
            <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg cursor-pointer">
              <img src={favourite} width="24" height="24" alt="favourite" />
              <span>Favourites</span>
            </a>
          </li>
          <li>
            <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg cursor-pointer">
              <img src={watchLater} width="24" height="24" alt="watchLater" />
              <span>Watch Later</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
