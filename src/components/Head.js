import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, cached } from "../utils/appSlice";
import {
  YOUTUBE_LOGO,
  HAMBURGER_LOGO,
  USER_LOGO,
  YOUTUBE_SUGGESTION_API,
} from "../utils/constants";
import { searchClicked } from "../utils/appSlice";

const Head = () => {
  const searchCache = useSelector((store) => store.app.searchCache);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setshowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleSearchClicked = (searchQuery) => {
    dispatch(searchClicked(searchQuery));
  };

  const getSuggestion = useCallback(async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cached({ [searchQuery]: json[1] }));
  }, [searchQuery, dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSuggestion();
      }
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, searchCache, getSuggestion]);

  useEffect(() => {
    const getSuggestionAndCache = async () => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        await getSuggestion();
      }
    };

    const timer = setTimeout(getSuggestionAndCache, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, searchCache, getSuggestion]);

  /*const getSuggestion = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cached({ [searchQuery]: json[1] }));
  };

 
   useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSuggestion();
      }
    }, 400);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]); */



 

  return (
    <div className="flex bg-gray-200 h-20 p-1 m-1 rounded-sm justify-between shadow-md">
      <div className="flex p-1 m-1">
        <img
          className="px-2 m-1 cursor-pointer "
          alt="menu"
          onClick={() => handleToggleMenu()}
          src={HAMBURGER_LOGO}
        />
        <a href=" /" className=" w-60  h-20 cursor-pointer">
          <img
            className="px-2 m-1 rounded-full h-10 mt-2"
            alt="youtube"
            src={YOUTUBE_LOGO}
          />
        </a>
      </div>
      <div className="relative -mt-2">
        <div>
          <input
            className="border border-black h-10 w-[550px] p-2 my-7 -mt-2 rounded-l-md"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={(e) => setshowSuggestions(true)}

            onBlur={() => setTimeout(() => setshowSuggestions(false), 200)}
          ></input>
          <button
            className=" border border-black rounded-r-full h-10 w-12 my-7"
            onClick={() => handleSearchClicked(searchQuery)}
          >
            🔍
          </button>
          {showSuggestions && (
            <div className="absolute bg-white border border-gray-300 w-[550px] mt-1  rounded-md shadow-md">
              <ul>
                {suggestions.map((item) => (
                  <li
                    className="hover:bg-slate-300 p-2 cursor-pointer border"
                    key={item}
                    onClick={() => {
                      setSearchQuery(item);
                      setshowSuggestions(false);
                    }}
                  >
                    🔍 {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex p-1 m-1">
        <img className="rounded-full" alt="userLogo" src={USER_LOGO} />
      </div>
    </div>
  );
};

export default Head;
