import React from "react";
import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  

  useEffect(() => {
    const i = setInterval(() => {
      const currentDate = new Date();
      const seconds = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
      dispatch(
        addMessage({
          name: "njan",
          message: `lorem ipson doloe site (${seconds} seconds)`,
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-2 w-full h-[600px] bg-slate-100 rounded-xl p-2 border border-black shadow-lg flex flex-col-reverse overflow-auto">
        {chatMessages.map((m, index) => (
          <ChatMessage name={m.name} message={m.message} key={index} />
        ))}{" "}
      </div>

      <form className=" w-full flex  py-2 ml-2" onSubmit={(e)=>{
         dispatch(
          addMessage({
            name: "user",
            message: liveMessage,
          })) 
          setLiveMessage("")
        e.preventDefault()}}>
        <input
          type="text"
          className="border border-black shadow-lg h-10 w-full px-2"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="border border-black rounded-lg bg-blue-300 px-2">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;