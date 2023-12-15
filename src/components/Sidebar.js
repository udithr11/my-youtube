import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className="w-[200px] bg-red-400 shadow-lg">
      <div className="p-2">
        <ul>
          <Link to="/">
            <li>Home</li>
            </Link>
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
