import React from "react";
import "./conversation.css";

const Conversation = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="conversation">
<img
        className="conversationImg"
        src={
          
             PF + "person/noAvatar.png"
        }
        alt=""
      />      <span className="conversationName">John Doe</span>
    </div>
  );
};

export default Conversation;
