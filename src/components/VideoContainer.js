import React, { useEffect, useState } from "react";
import { YOUTUBE_API,  } from "../utils/constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const userSearchQuery = useSelector((store) => store.app.userSearchQuery);
  console.log(userSearchQuery)
  useEffect(() => {
    getVideos();
  }, []);




  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap justify-between">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCards info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
