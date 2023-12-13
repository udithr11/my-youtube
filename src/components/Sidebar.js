import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) {
    return (
      <div className="col-span-1 bg-orange-200 shadow-lg">
        <div className="p-2">
          <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Live</li>
            <li> Subscription </li>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className="col-span-1 bg-red-400 shadow-lg">
      <div className="p-2">
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Live</li>
        </ul>
      </div>

      <div className="p-2">
        <h1 className="font-bold">Subscription</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
      <div className="p-2">
        <h1 className="font-bold">Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
