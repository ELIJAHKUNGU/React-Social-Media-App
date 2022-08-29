import React from 'react'
import Conversation from '../../components/conversation/conversation'
import Message from "../../components/message/Message";
import Topbar from '../../components/topbar/Topbar'
import "./message.css"

const Messanger = () => {
  return (
    <>
   <Topbar/>
   <div className="messenger">
    <div className="chatMenu">
        <div className="chatWrapper">
            <input type="text" placeholder="Search for friends" className="chatMenuInput" />
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        </div>
    </div>
    <div className="chatBox">
        <div className="chatBoxWrapper">
            <div className="chatBoxTop">
                box
                <Message/>
                <Message own={true}/>
                <Message/>

            </div>
            <div className="chatBoxBottom">

            </div>

        </div>
    </div>
    <div className="chatOnline">
        <div className="chatOnlineWrapper">Online</div>
    </div>
   </div>
   </>
  )
}

export default Messanger