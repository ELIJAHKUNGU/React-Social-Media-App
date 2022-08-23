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
      {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      

    </div>
  </div>
  )
  
};



export default Feeds


