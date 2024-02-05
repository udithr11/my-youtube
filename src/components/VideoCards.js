import React from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";

const VideoCards = ({ info }) => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(closeMenu());
  };

  const { snippet, statistics } = info; //will get snippet and statistics from info , destructuring on the fly
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div
      className="m-2 w-[21rem] p-2 shadow-lg"
      onClick={() => handleToggleMenu()}
    >
      <img className="rounded-xl " alt="foto" src={thumbnails.medium.url} />
      <div>
        <ul>
          <li className="font-bold text-xl">{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} views</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCards;
