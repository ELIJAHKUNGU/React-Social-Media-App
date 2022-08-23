// import Post from "../post/Post";
import React from 'react'

import "./feeds.css";
import { Posts } from "../../dummyData";
import Share from "../share/share";
import Post from '../post/Post';

const Feeds = () => {
  return(
  <div className="feeds">
    <div className="feedWrapper">
      <Share/>
      <Post/>

    </div>
  </div>
  )
  
};



export default Feeds


