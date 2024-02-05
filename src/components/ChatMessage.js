import React from "react";
import { USER_LOGO } from "../utils/constants";

const ChatMessage = ({name, message}) => {
  return (
    <div className="items-center flex p-3 shadow-sm">
      {" "}
      <img
        className="rounded-full h-5 border border-blue-300"
        alt="userLogo"
        src={USER_LOGO}
      />
      <span className="font-bold px-3">{name}</span>
      <span className="px-3">{message}</span>
    </div>
  );
};

export default ChatMessage;
