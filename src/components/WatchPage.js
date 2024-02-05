import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  return (
    <div className="flex  flex-col">
    <div className="px-5  flex">
      <div >
      <iframe
      className="rounded-md"
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+id}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      </div>
      <div className="w-full"><LiveChat/></div>
    </div>
    <div><CommentsContainer/></div>
    </div>
  );
};

export default WatchPage;
