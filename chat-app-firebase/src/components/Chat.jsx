import React, { useContext, useState } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  const handleMoreButton = () => {
    const [err, setErr] = useState(false);

    try{

      

    }catch(err){
      setErr(true);
      console.log(err);
    }
  }

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" onClick={handleMoreButton} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
