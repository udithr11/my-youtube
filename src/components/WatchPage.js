import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  return (
    <div className="flex flex-col">
    <div>
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/"+id}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <div><CommentsContainer/></div>
    </div>
  );
};

export default WatchPage;
