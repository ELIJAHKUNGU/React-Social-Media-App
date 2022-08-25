// import Post from "../post/Post";
import React, { useState, useEffect } from 'react'

import "./feeds.css";
// import { Posts } from "../../dummyData";
import Share from "../share/share";
import Post from '../post/Post';
import axios from "axios";
import {BASE_API_URL} from '../../utils/BaseUrl'


const Feeds = () => {
  const [post, setPosts] = useState([])

  useEffect(() => {

    const fetchPost = async() =>{
      const res = await axios.get(`${BASE_API_URL}/posts/timeline/62febb8cb5f10208f1cb95e6`)
      console.log(res);
      
      setPosts(res.data)

    }
    fetchPost();

    
  }, [])
  return(
  <div className="feeds">
    <div className="feedWrapper">
      <Share/>
      {post.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      

    </div>
  </div>
  )
  
};



export default Feeds


