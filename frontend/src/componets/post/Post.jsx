import { MoreVert } from "@material-ui/icons";
// import { Users } from "../../dummyData";
import { useEffect, useState } from "react";
import './post.css'
import axios from "axios";
import {BASE_API_URL} from '../../utils/BaseUrl'
import  {format} from "timeago.js"
import { Link } from "react-router-dom";

const Post = ({post}) => {
    // console.log(post);
    // console.log(Users.filter((u) => u.id))
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const path = PF + "post"
    
    const [like,setLike] = useState(post.likes.length)
    const [isLiked,setIsLiked] = useState(false)
    const [user, setUser] = useState({});
    useEffect(() => {
      const fetchUser = async() => {
        const res = await axios.get(`${BASE_API_URL}/users/${post.userId}`)
        // console.log(res.data);
        setUser(res.data)
      }
      fetchUser();
    },[post.userId])
    
  
    const likeHandler =()=>{
      setLike(isLiked ? like-1 : like+1)
      setIsLiked(!isLiked)
    }
    
  return (
        <div className="post">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <Link to={`profile/${user.username}`}>
                <img
                  className="postProfileImg"
                  src={user.profilePicture || PF+"/person/1.jpeg"}
                  alt=""
                />
                {/* <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" /> */}
                </Link>
                <span className="postUsername">
                  {user.username}
               {/* ELIJAH KUNGU */}
                </span>
                <span className="postDate">
                    {format(post.createdAt)}
                     {/* mins Ago */}
                    </span>
              </div>
              <div className="postTopRight">
                <MoreVert />
              </div>
            </div>
            <div className="postCenter">
              <span className="postText">
                {post?.desc}
                </span>
              <img className="postImg" src={PF+ "/post/"+ post.img} alt="" />
              {/* <img className="postImg" src="/assets/post/1.jpeg" alt="" srcset="" /> */}
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img className="likeIcon" src={`${PF}like.png`}  onClick={likeHandler} alt="" />
                <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
                <span className="postLikeCounter">{like }  people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">
                {post.comment}
                    comments
                     </span>
              </div>
            </div>
          </div>
        </div>
  )
    }
  


export default Post